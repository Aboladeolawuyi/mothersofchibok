const CREDIT_ROWS: {
  left: { name: string; role: string };
  right?: { name: string; role: string };
}[] = [
  {
    left: { name: "Kachi Benson", role: "concept" },
    right: { name: "Jeza Ojeriakhi", role: "photo" },
  },
  {
    left: { name: "Jeza Ojeriakhi", role: "cordinator" },
    right: { name: "Jeza Ojeriakhi", role: "ui/ux designer" },
  },
  {
    left: { name: "Jeza Ojeriakhi", role: "designer & creative director" },
    right: { name: "Jeza Ojeriakhi", role: "web developer" },
  },
  {
    left: { name: "Jeza Ojeriakhi", role: "project manager" },
    right: { name: "Jeza Ojeriakhi", role: "logistics carrier" },
  },
  {
    left: { name: "Kachi Benson", role: "videographer" },
    right: { name: "Jeza Ojeriakhi", role: "translator" },
  },
  {
    left: { name: "Kachi Benson", role: "producer" },
    right: { name: "Kachi Benson", role: "photo" },
  },
  {
    left: { name: "Kachi Benson", role: "owner" },
  },
];

const CreditSection = () => {
  return (
    <section className=" mx-auto">
       <header className="border-b p-16 flex justify-between items-center">
        <div className="text-[70px] tracking-tight4 leading-0 font-afolkalips text-gray-200">
          The Film
        </div>
      </header>
      {/* Content */}
      <div className="relative mx-auto flex flex-col items-center justify-center px-8 md:px-12 lg:py-16 py-10">
        <div className="w-full">
          <div className="mx-auto space-y-6 text-center">
            {/* Rows */}
            {CREDIT_ROWS.map((row, i) => (
              <div
                key={`${row.left.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 text-white lg:flex-row lg:gap-4"
              >
                {/* Left */}
                <p className="leading-snug text-white/90">
                  <span
                    className="lg:text-4xl text-lg"
                  >
                    {row.left.name}
                  </span>
                  <span className="lg:mx-2 mx-1 text-white/60">—</span>
                  <span
                    className="text-white/80 text-sm lg:text-xl font-thin">
                    {row.left.role}
                  </span>
                </p>

                {/* Slash separator (only when right exists) */}
                {row.right && (
                  <span
                    className="hidden select-none text-white/40 md:inline"
                    style={{
                      fontSize: "clamp(1.25rem, 3vw, 2.5rem)", // 20px → 40px
                    }}
                  >
                    /
                  </span>
                )}

                {/* Right */}
               {row.right && (
                  <p className="leading-snug text-white/90">
                    <span
                      className="lg:text-4xl text-lg">
                      {row.right.name}
                    </span>
                    <span className="lg:mx-2 mx-1 text-white/60">—</span>
                    <span
                      className="text-white/80 text-sm lg:text-xl font-thin"
                    >
                      {row.right.role}
                    </span>
                  </p>
                )}
              </div>
            ))}

            {/* Footer note */}
            <p
              className="pt-8 text-white/80 lg:text-xl text-sm px-5">
              We appreciate all other individuals involved in the making of this film
              as their contributions were important in making this a reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSection;
