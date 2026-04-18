import Image from "next/image";
import { logo } from "@/assets"; // apne path se adjust karo

const partners = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
  { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
  { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 },
];

export default function Partners() {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4fb] via-[#e8eef8] to-[#f5f0e8] md:py-12 p-6 md:px-14 lg:px-20 overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,64,148,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,64,148,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-color2 to-color1" />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="relative text-center mb-7 sm:mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-color2 mb-3">
          Our Network
        </p>
        <h2 className="font-bold text-color3 text-3xl md:text-5xl tracking-tight">
          150+{" "}
          <span className="text-color1">Tie Ups</span>{" "}
          Across The World
        </h2>
      </div>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {partners.map((partner, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            const totalRows = Math.ceil(partners.length / 4);
            const isLastRow = row === totalRows - 1;
            const isLastCol = col === 3;

            return (
              <div
                key={partner.id}
                className={`
                  relative flex items-center justify-center p-6 md:p-8
                  group cursor-pointer transition-all duration-300
                  hover:bg-white/60
                  ${!isLastRow ? "border-b border-color2/15" : ""}
                  ${!isLastCol ? "border-r border-color2/15" : ""}
                `}
              >
                {/* Logo */}
                <div className="relative w-full h-14 sm:h-20 transition-all duration-300 group-hover:scale-105 sm:filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                  <Image
                    src={logo}
                    alt={`partner-${partner.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}