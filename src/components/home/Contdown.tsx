"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { BiTime } from "react-icons/bi";
import { FaUsers, FaGlobe } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { shape1 } from "@/assets";
import Image from "next/image";

const colorClasses = [
   "bg-red-700/10 text-red-700 group-hover:bg-red-700/30",
  "bg-violet-700/10 text-violet-700 group-hover:bg-violet-700/30",
   "bg-teal-700/10 text-teal-700 group-hover:bg-teal-700/30",
  "bg-orange-700/10 text-orange-700 group-hover:bg-orange-700/30",
];

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    suffix: "+",
    title: "Clients Served",
    Value: 1000,
    desc: "Families and professionals guided through complex immigration processes worldwide.",
  },
  {
    id: 2,
    icon: <MdVerified />,
    suffix: "%",
    title: "Success Rate",
    Value: 96,
    desc: "Industry-leading visa approval rate backed by expert legal review at every step.",
  },
  {
    id: 3,
    icon: <BiTime  />,
    suffix: "hrs",
    title: "Avg. Approval Time",
    Value: 42,
    desc: "Fastest processing in the industry with our streamlined documentation system.",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    suffix: "+",
    title: "Countries Operations",
    Value: 60,
    desc: "Active presence across 6 continents serving clients in over 60 destination countries.",
  },
];

function CountDown() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative w-full bg-white py-6 p-3 md:px-12">
 <Image
              src={shape1}
              alt="img"
              className="absolute top-0 max-w-[500px] scale-x-100 right-0 object-contain z-0"
            />
      <div className="max-w-screen-xl mx-auto shadow-lg shadow-black/40 rounded-2xl overflow-hidden">

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4  z-10 relative gap-px bg-gradient-to-tr from-orange-50 via-white to-blue-50"
        >
          {stats.map((item, index) => (
       <motion.div
  key={item.id}
  variants={zoomIn(index * 0.12, 0.5)}
  className="group relative  flex flex-col py-10 px-6 shadow-sm shadow-black/5 hover:bg-blue-50 transition-colors duration-300 cursor-default"
>
  {/* Top accent */}
  <div className="absolute top-0 left-0 w-0 h-[3px] bg-blue-600 group-hover:w-full transition-all duration-500 rounded-t-sm" />

  {/* Icon + Number row */}
  <div className="flex items-center gap-4 mb-3">
    {/* Icon */}
   <div
  className={`sm:w-14 sm:h-14 h-10 w-10 flex shadow-md group-hover:shadow-sm shadow-black/30 items-center text-lg sm:text-2xl justify-center rounded-full border border-blue-100 transition-colors duration-300 ${colorClasses[index]}`}
>
  {item.icon}
</div>

    {/* Number */}
    <div className="md:text-[45px] text-2xl font-bold text-gray-900 leading-none">
      {inView ? <CountUp start={0} end={item.Value} duration={2.8} separator="," /> : "0"}
      <span className="text-blue-600 ml-0.5 text-3xl">{item.suffix}</span>
    </div>
  </div>

  {/* Divider */}
  <div className="w-full h-[2px] bg-blue-200 my-3 rounded-full" />

  {/* Title */}
  <h3 className="text-sm md:text-base tracking-widest uppercase text-color3 font-medium mb-2 group-hover:text-red-600 transition-colors duration-300">
    {item.title}
  </h3>

  {/* Para */}
  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
    {item.desc}
  </p>
</motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default CountDown;