"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { BiTime } from "react-icons/bi";
import { FaUsers, FaGlobe } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    suffix: "+",
    title: "Clients Served",
    Value: 2000,
    desc: "Families and professionals guided through complex immigration processes worldwide.",
  },
  {
    id: 2,
    icon: <MdVerified className="text-blue-600 text-2xl" />,
    suffix: "%",
    title: "Success Rate",
    Value: 96,
    desc: "Industry-leading visa approval rate backed by expert legal review at every step.",
  },
  {
    id: 3,
    icon: <BiTime className="text-blue-600 text-2xl" />,
    suffix: "hrs",
    title: "Avg. Approval Time",
    Value: 42,
    desc: "Fastest processing in the industry with our streamlined documentation system.",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-blue-600 text-2xl" />,
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

      <div className="max-w-screen-xl mx-auto shadow-xl rounded-2xl overflow-hidden">

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100"
        >
          {stats.map((item, index) => (
       <motion.div
  key={item.id}
  variants={zoomIn(index * 0.12, 0.5)}
  className="group relative bg-zinc-50 flex flex-col py-10 px-6 hover:bg-blue-50 transition-colors duration-300 cursor-default"
>
  {/* Top accent */}
  <div className="absolute top-0 left-0 w-0 h-[3px] bg-blue-600 group-hover:w-full transition-all duration-500 rounded-t-sm" />

  {/* Icon + Number row */}
  <div className="flex items-center gap-4 mb-3">
    {/* Icon */}
    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
      {item.icon}
    </div>

    {/* Number */}
    <div className="text-4xl font-bold text-gray-900 leading-none">
      {inView ? <CountUp start={0} end={item.Value} duration={2.8} separator="," /> : "0"}
      <span className="text-blue-600 ml-0.5 text-2xl">{item.suffix}</span>
    </div>
  </div>

  {/* Divider */}
  <div className="w-28 h-[2px] bg-blue-200 mb-3 rounded-full" />

  {/* Title */}
  <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-900 font-medium mb-2 group-hover:text-blue-600 transition-colors duration-300">
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