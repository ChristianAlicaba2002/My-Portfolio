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
      value: "12+",
      icon: <FaLayerGroup className="text-xl" />,
      accent: "from-blue-600/30 to-blue-800/30 border-blue-500/40",
      iconColor: "text-blue-200 bg-blue-500/20",
      valueColor: "text-blue-200",
      dot: "bg-blue-300",
    },
    {
      label: "Total Projects",
      value: "11+",
      icon: <FaProjectDiagram className="text-xl" />,
      accent: "from-blue-500/30 to-blue-700/30 border-blue-400/40",
      iconColor: "text-blue-100 bg-blue-400/20",
      valueColor: "text-blue-100",
      dot: "bg-blue-200",
    },
    {
      label: "Years of Experience",
      value: "3+",
      icon: <FaCalendarAlt className="text-xl" />,
      accent: "from-blue-700/30 to-blue-900/30 border-blue-600/40",
      iconColor: "text-blue-300 bg-blue-600/20",
      valueColor: "text-blue-300",
      dot: "bg-blue-400",
    },
  ];

  return (
    <motion.div
      className="pt-8 pb-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
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
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`badges-container group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br ${badge.accent} border backdrop-blur-sm transition-all duration-300 hover:brightness-110`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 rounded-xl ${badge.iconColor}`}>
              <span className={badge.valueColor}>{badge.icon}</span>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full ${badge.dot} animate-pulse`} />
          </div>
          <div className={`text-4xl font-extrabold ${badge.valueColor} mb-1 tabular-nums`}>
            {badge.value}
          </div>
          <div className="text-blue-300/70 text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">
            {badge.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
