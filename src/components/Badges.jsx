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
    { label: "Tech Stack", value: "12+", icon: <FaLayerGroup className="text-xl" /> },
    { label: "Total Projects", value: "11+", icon: <FaProjectDiagram className="text-xl" /> },
    { label: "Years of Experience", value: "3+", icon: <FaCalendarAlt className="text-xl" /> },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 pt-8 pb-2 sm:grid-cols-3"
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
          className="badges-container group rounded-2xl border border-border bg-card p-5 hover:border-foreground/20"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="rounded-xl border border-border p-2 text-foreground">
              {badge.icon}
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
          </div>
          <div className="mb-1 text-4xl font-extrabold tabular-nums text-foreground">
            {badge.value}
          </div>
          <div className="text-sm font-medium text-muted">
            {badge.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
