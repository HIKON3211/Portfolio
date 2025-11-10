'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string; // ✅ เพิ่มลิงก์ที่ต้องการ
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'การแข่งขัน Coding War',
    description: 'แอปสำหรับจัดการเมนูและออเดอร์ฟกฟหกฟหกฟหกฟหกฟหกฟหก',
    imageUrl: '/picture/project_sec/project_2/project_ (8).jpg',
    tags: ['React', 'POS'],
    link: '/project_sec/project_1', // ✅ ลิงก์ที่กำหนดเอง
  }
]
const CommandsProject = () => {
  const [projects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState('');
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
    <div className="max-w-6xl mx-auto p-6">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="ค้นหาโปรเจกต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4 rounded shadow-xl"
      />

      {/* 🏷️ Tag Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded ${
            selectedTag === null
              ? 'bg-white text-black shadow-xl'
              : 'bg-gray-200 text-gray-800 shadow-sm'
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
                ? 'bg-white text-black shadow-xl'
                : 'bg-gray-200 text-gray-800 shadow-sm'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 📦 Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link} // ✅ ใช้ลิงก์ที่กำหนดเอง
            className="rounded-lg shadow-2xl overflow-hidden flex flex-col transition-transform transform hover:scale-[1.02] hover:shadow-neutral-300 hover:bg-red-50 hover:text-cyan-900 cursor-pointer bg-white"
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommandsProject;
