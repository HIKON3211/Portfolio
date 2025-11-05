// components/commands_project.tsx
"use client";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "การแข่งขัน Coding War",
    description: "แอปสำหรับจัดการเมนูและออเดอร์ฟกฟหกฟหกฟหกฟหกฟหกฟหก",
    imageUrl: "/picture/project/project_1/project_1.jpg",
    tags: ["React", "POS"],
  },
  {
    id: 2,
    title: "เว็บพอร์ตโฟลิโอส่วนตัว",
    description: "แสดงผลงานและข้อมูลติดต่อ",
    imageUrl: "/images/portfolio.jpg",
    tags: ["Next.js", "Tailwind", "Portfolio"],
  },
  {
    id: 3,
    title: "1",
    description: "3",
    imageUrl: "/images/booking.jpg",
    tags: ["Node.js", "MongoDB", "Booking"],
  },
];

const CommandsProject = () => {
  const [projects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const uniqueTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="ค้นหาโปรเจกต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4 rounded shadow-xl "
      />

      {/* 🏷️ Tag Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded ${
            selectedTag === null
              ? "bg-white text-black shadow-xl"
              : "bg-gray-200 text-gray-800 shadow-l"
          }`}
        >
          ทั้งหมด
        </button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded ${
              selectedTag === tag
                ? "bg-white text-black shadow-xl"
                : "bg-gray-200 text-gray-800 shadow-l"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 📦 Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-2xl overflow-hidden flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col grow">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4 grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-[#33a8de] px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandsProject;
