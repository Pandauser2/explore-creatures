export function FounderSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/founder.jpeg"
              alt="Founder"
              className="w-full max-w-md rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Built by someone who’s been through it 🐾
            </h2>
            <p className="mb-4 text-gray-600">
              I started this after struggling to relocate my own pet internationally. The process
              was confusing, stressful, and full of hidden rules.
            </p>

            <p className="mb-4 text-gray-600">
              Now, we help pet parents move their pets safely across countries by handling
              airlines, documentation, and complex regulations.
            </p>

            <p className="font-medium text-gray-800">
              Helping families relocate pets across multiple international routes.
            </p>

            <p className="mt-4 font-semibold">— Sourav Bose, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
