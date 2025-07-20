import React from "react";

export default function Badges() {
  const badges = [
    { label: "Programming Languages", value: 11, color: "bg-blue-500" },
    { label: "Total Projects", value: 15, color: "bg-green-500" },
    { label: "Open Source", value: 4, color: "bg-purple-500" },
    { label: "Years of Experience", value: 4, color: "bg-yellow-500" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`rounded-xl p-8 text-white font-semibold shadow-md ${badge.color}`}
        >
          <div className="text-2xl font-bold">{badge.value}</div>
          <div className="text-sm">{badge.label}</div>
        </div>
      ))}
    </div>
  );
}
