import React from "react";

export default function Badges() {
  const badges = [
    { label: "Programming Languages", value: 10, color: "bg-blue-500" },
    { label: "Total Projects", value: 9, color: "bg-green-500" },
    { label: "Open Source", value: 5, color: "bg-purple-500" },
    { label: "Years of Experience", value: 5, color: "bg-yellow-500" },
  ];

  return (
    <div className="pt-14 pb-6 sm:p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`badges-container rounded-xl p-3 sm:p-4 lg:p-6 xl:p-8 text-white font-semibold shadow-md ${badge.color} hover:scale-105 transition-transform duration-200 cursor-pointer`}
        >
          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
            {badge.value}
          </div>
          <div className="text-xs sm:text-sm lg:text-base">{badge.label}</div>
        </div>
      ))}
    </div>
  );
}
