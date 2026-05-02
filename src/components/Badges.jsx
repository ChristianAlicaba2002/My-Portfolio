import React from "react";
import { motion } from "framer-motion";
import { FaLayerGroup, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Badges() {
  const badges = [
    { 
      label: "Tech Stack", 
      value: 12, 
      icon: <FaLayerGroup className="text-2xl" />,
      gradient: "from-white to-gray-300",
      textColor: "text-blue-500",
    },
    { 
      label: "Total Projects", 
      value: 11, 
      icon: <FaProjectDiagram className="text-2xl" />,
      gradient: "from-gray-300 to-gray-500",
      textColor: "text-green-500",
    },
    { 
      label: "Years of Experience", 
      value: 3, 
      icon: <FaCalendarAlt className="text-2xl" />,
      gradient: "from-gray-500 to-gray-700",
      textColor: "text-yellow-500",
    },
  ];

  return (
    <motion.div
      className="pt-14 pb-6 sm:p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          custom={index}
          variants={cardVariants}
          whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
          className="badges-container group relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-500 hover:shadow-2xl hover:shadow-white/25"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`${badge.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {badge.icon}
              </div>
              <div className={`w-2 h-2 ${badge.textColor} rounded-full animate-pulse`}></div>
            </div>
            
            <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${badge.textColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>
              {badge.value}
            </div>
            
            <div className={`${badge.textColor} text-sm sm:text-base lg:text-lg font-medium group-hover:text-white transition-colors duration-300`}>
              {badge.label}
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      ))}
    </motion.div>
  );
}
