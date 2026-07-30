import Image from "next/image";
import Link from "next/link";
import { about, box3} from "@/assets"; 


const imgs=[
  box3, about
]
const features = [
  "Experienced Immigration Consultants",
  "Fast & Reliable Visa Processing",
  "Personalized Client Assistance",
  "Global reach and support",
];

export default function Studyabrod() {
  return (
    <section className="bg-white relative xl:px-28 lg:px-20 md:p-16 sm:p-12 p-6 overflow-hidden">
    <div className=" flex flex-wrap max-w-[1460px] mx-auto items-stretch gap-12 justify-between  ">

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-color1/7 rounded-full blur-[100px] pointer-events-none" />

      {/* ── LEFT: Stacked Images ── */}
     <div className="relative flex-shrink-0 w-full md:w-[46%] h-[420px] md:h-[480px] p-4">

  {/* Paper plane deco */}
  <svg
    className="absolute -top-3 right-6 w-12 h-12 text-color2 opacity-20 z-10"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
  >
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>

  {/* Dashed frames behind */}
  <div className="absolute top-[10px] left-[36px] right-[-14px] bottom-[-14px] border-2 border-dashed border-color1/30 rounded-2xl pointer-events-none z-[2]" />
  <div className="absolute top-[22px] left-[60px] right-[-26px] bottom-[-26px] border-2 border-dashed border-color2/20 rounded-2xl pointer-events-none " />

  {/* Card Back — box3, rotated right */}
  <div className="absolute w-[49%] h-[96%] right-[3%] top-[3%] rotate-[8deg] z-[1] rounded-2xl duration-300 ease-in-out  hover:rotate-[2deg] overflow-hidden border-[3px] border-white shadow-xl">
    <Image src={imgs[0]} alt="img" fill className="object-cover object-center" />
  </div>

  {/* Card Front — box1, straight, red border */}
  <div className="absolute w-[50%] h-[96%] left-[7%] top-[3%] -rotate-[10deg] z-[3] hover:rotate-0 rounded-2xl duration-300 ease-in-out  overflow-hidden border-[3px] border-white shadow-2xl">
    <Image src={imgs[1]} alt="img" fill className="object-cover object-center" />
  </div>
</div>

      {/* ── RIGHT: Content ── */}
      <div className="relative md:w-[47%] w-full">

        {/* Label */}
        <span className="block text-color2 text-xs tracking-[0.22em] font-bold uppercase  mb-4">
          Who We Are
        </span>

        {/* Heading */}
        <h2 className="font-bold  capitalize text-color3 text-3xl md:text-4xl lg:text-5xl !leading-tight mb-5">
          Trusted Support for Every Step of Your{" "}
          <span className="text-color1">Immigration Journey</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
          We provide professional assistance for every visa application, ensuring a smooth process, accurate documentation, and reliable support to make your journey abroad simple and stress-free.

        </p>

        {/* Experience + Features */}
        <div className="flex flex-wrap items-start gap-10 mb-9">

          {/* 20+ Years */}
          <div>
            <p
              className="font-black text-8xl leading-none"
              style={{
                background: "linear-gradient(135deg, #004094, #CB0000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              20+
            </p>
            <p className="text-color3 font-semibold text-base mt-1">Years Of Experience</p>
          </div>

          {/* Features list */}
          <ul className="flex flex-col gap-3 pt-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-end gap-2 text-color3 font-medium text-[15px]">
                <span className="text-color2 font-black text-lg tracking-[-4px]">»</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}

      </div>
    </div>
    </section>
  );
}