import fallbackData from "@/content/fallback.json";

const CONTENT_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vCONTENT_PLACEHOLDER/pub?output=csv";
const SERVICES_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSERVICES_PLACEHOLDER/pub?output=csv";

type Hero = {
  title: string;
  subtitle: string;
  cta: string;
};

type Service = {
  title: string;
  description: string;
  icon: string;
};

export type SiteData = {
  hero: Hero;
  services: Service[];
  finalCta: string;
};

function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      out.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  out.push(current.trim());
  return out;
}

function parseCsv(csvText: string): Array<Record<string, string>> {
  const rows = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (rows.length < 2) {
    throw new Error("CSV must include headers and at least one row");
  }

  const headers = splitCsvLine(rows[0]).map((header) => header.trim());
  if (!headers.every((header) => header.length > 0)) {
    throw new Error("CSV headers are missing or malformed");
  }

  return rows.slice(1).reduce<Array<Record<string, string>>>((acc, line) => {
    const cells = splitCsvLine(line);
    const row: Record<string, string> = {};

    headers.forEach((header, idx) => {
      row[header] = (cells[idx] ?? "").trim();
    });

    const hasAnyValue = Object.values(row).some((value) => value.length > 0);
    if (hasAnyValue) {
      acc.push(row);
    }

    return acc;
  }, []);
}

function buildSiteData(
  contentRows: Array<Record<string, string>>,
  serviceRows: Array<Record<string, string>>
): SiteData {
  const content = contentRows[0] ?? {};
  const hero = {
    title: content.title || fallbackData.hero.title,
    subtitle: content.subtitle || fallbackData.hero.subtitle,
    cta: content.cta || fallbackData.hero.cta
  };

  const finalCta = content.finalCta || fallbackData.finalCta;

  const services = serviceRows
    .map((row) => ({
      title: row.title || "",
      description: row.description || "",
      icon: row.icon || "Package"
    }))
    .filter((service) => service.title && service.description)
    .slice(0, 3);

  return {
    hero,
    services: services.length > 0 ? services : fallbackData.services,
    finalCta
  };
}

export async function getSiteData(): Promise<SiteData> {
  try {
    const [contentRes, servicesRes] = await Promise.all([
      fetch(CONTENT_URL, { next: { revalidate: 300 } }),
      fetch(SERVICES_URL, { next: { revalidate: 300 } })
    ]);

    if (!contentRes.ok || !servicesRes.ok) {
      throw new Error("Failed to fetch one or more Google Sheets CSV feeds");
    }

    const [contentCsv, servicesCsv] = await Promise.all([
      contentRes.text(),
      servicesRes.text()
    ]);

    const contentRows = parseCsv(contentCsv);
    const serviceRows = parseCsv(servicesCsv);

    const contentHeaders = Object.keys(contentRows[0] ?? {});
    const serviceHeaders = Object.keys(serviceRows[0] ?? {});
    if (
      !["title", "subtitle", "cta", "finalCta"].every((key) =>
        contentHeaders.includes(key)
      ) ||
      !["title", "description", "icon"].every((key) =>
        serviceHeaders.includes(key)
      )
    ) {
      throw new Error("CSV headers did not match required schema");
    }

    return buildSiteData(contentRows, serviceRows);
  } catch (error) {
    console.error("Using fallback content due to sheets error:", error);
    return fallbackData as SiteData;
  }
}
