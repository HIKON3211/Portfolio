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
    description: 'ได้เข้าร่วมการเเข่งขันรอบ 100 ทีมสุดท้าย ระดับประเทศ กิจกรรม " Coding War "',
    imageUrl: '/picture/project_sec/project_1/project_ (5).jpg',
    tags: ['Depa', 'Ciracore','ระดับประเทศ'],
    link: '/project_sec/project_(1)', // ✅ ลิงก์ที่กำหนดเอง
  },
  {
    id: 2,
    title: 'การแข่งขัน Coding Bootcamp',
    description: 'ได้เข้าร่วมกิจกรรม Coding Bootcamp อบรมเเละได้เเข่งขันได้ชนะเลิศอันดับ 2 ของระดับภาคเหนือตอนล่าง',
    imageUrl: '/picture/project_sec/project_2/project_ (8).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(2)'  
  },
  {
    id: 3,
    title: 'PSRU Cyber Hackathon#2',
    description: 'ได้เข้าร่วมกิจกรรม อบรมเเละเเข่งขัน PSRU CYBER HACKATHON #2 ',
    imageUrl: '/picture/project_sec/project_3/project_ (4).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(3)'  
  },
  {
    id: 4,
    title: 'ชนะเลิศเหรียญทองระดับเขต ศิลปะหัตกรรม',
    description: 'ได้รับรางวัลเหรียญทองในการเเข่งขันศิลปหัตกรรม หุ่นยนต์ระดับสูง ในระดับ เขต',
    imageUrl: '/picture/project_sec/project_4/project_ (2).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(4)'  
  },
  {
    id: 5,
    title: 'KU Python Competition',
    description: 'ได้ผ่านเข้ารอบ 24 ทีมสุดท้าย ในการเเข่งขัน Python Competition  /< it',
    imageUrl: '/picture/project_sec/project_5/project_ (2).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(5)'  
  },
  {
    id: 6,
    title: 'Coding Inspire Swift',
    description: 'ได้เข้าร่วมอบรมเเละเเข่งขันในกิจกรรม Coding Inspire Swift Coding Club TH',
    imageUrl: '/picture/project_sec/project_6/project_ (2).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(6)'  
  },
  {
    id: 7,
    title: 'อบรม Mikrotik',
    description: 'ได้ผ่านการอบรมหลักสูตร Mikrotik Certified Security Engineer',
    imageUrl: '/picture/project_sec/project_7/project_ (1).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(7)'  
  },
  {
    id: 8,
    title: 'Generative Ai coding ',
    description: 'ได้รับรางวัญ ชมเชย ในการอบรมเเละเเข่งขัน Generative Ai Coding ',
    imageUrl: '/picture/project_sec/project_8/project_ (3).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(8)'  
  },
  {
    id: 9,
    title: 'STEM PROJECT',
    description: 'ได้เข้าร่วมอบรมเเละเเข่งขันในกิจกรรม STEM project ในโรงเรียน',
    imageUrl: '/picture/project_sec/project_9/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(9)'  
  },
  {
    id: 10,
    title: 'การแข่งขัน อบรม Cira Core',
    description: 'ได้เข้าร่วมการอบรมการฝึกสอนการใช้งาน Cira Core ',
    imageUrl: '/picture/project_sec/project_10/project_ (5).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(10)'  
  },
  {
    id: 11,
    title: 'คณะกรรมการสภานักเรียน',
    description: 'ได้รับเลือกเป็นคณะกรรมการสภานักเรียน ฝ่ายสารวัตรนักเรียนในระดับชั้นมัธยมศึกษาปีที่ 5',
    imageUrl: '/picture/project_sec/project_11/project_ (2).png',
    tags: ['Depa'],
    link: '/project_sec/project_(11)'  
  },
  {
    id: 12,
    title: 'แข่งขันหนังสั้นพราวไทย',
    description: 'ได้รับรางวัลชมเชย การประกวดการจัดทำภาพยนตร์สั้น “พราวไทย ',
    imageUrl: '/picture/project_sec/project_12/project_ (2).png',
    tags: ['Depa'],
    link: '/project_sec/project_(12)'  
  },
  {
    id: 13,
    title: 'โปรโมทห้องเรียน Gifted',
    description: 'ได้ร่วมทำคลิปวิดิโอโปรโมทห้องเรียน Gifted ของโรงเรียนจ่านกร้อง',
    imageUrl: '/picture/project_sec/project_13/project_ (2).png',
    tags: ['Depa'],
    link: '/project_sec/project_(13)'  
  },
  {
    id: 14,
    title: 'โครงการ THAI DIGITAL CONTENT GO GLOBEL',
    description: 'กิจกรรมพัฒนายกระดับทักษะด้านเกมโครงการ THAI DIGITAL CONTENT GO GLOBEL',
    imageUrl: '/picture/project_sec/project_14/project_ (2).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(14)'  
  },
  {
    id: 15,
    title: ' ศธ.360 องศา ได้มาเยือนโรงเรียน',
    description: 'ได้มีสิทธิเป็นตัวแทนถูกสัมภาษณ์เกี่ยวกับกิจกรรมการแข่งขันโครงงานต่าง ๆ',
    imageUrl: '/picture/project_sec/project_15/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(15)'  
  },
  {
    id: 16,
    title: 'กิจกรรมการแข่งขันทักษะคณิตศาตร์',
    description: 'ได้เข้าร่วมเป็นผู้ช่วยกรรมการในกิจกรรมการแข่งขันทักษะคณิตศาตร์',
    imageUrl: '/picture/project_sec/project_16/project_.png',
    tags: ['Depa'],
    link: '/project_sec/project_(16)'  
  },
  {
    id: 17,
    title: 'การประกวดโครงงานเศรษฐกิจพอเพียง ในระดับโรงเรียน',
    description: 'ได้รับรางวัลเหรียญทอง รองชนะเลิศอันดับ 1 การประกวดโครงงานเศรษฐกิจพอเพียง ในระดับโรงเรียน',
    imageUrl: '/picture/project_sec/project_17/project_.jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(17)'  
  },
  {
    id: 18,
    title: '3DsMax',
    description: 'ได้ฝึกและเรียนรู้พื้นฐานการใช้งานโปรแกรม 3DsMax ',
    imageUrl: '/picture/project_sec/project_18/project_ (3).jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(18)'  
  },
  {
    id: 19,
    title: 'เข้าร่วมการสวนสนาม',
    description: 'ได้เข้าร่วมพิธีกระทำสัตย์ปฎิญาณตนและสวนสนามนักศึกษาวิชาทหาร ชั้นปีที่ 2',
    imageUrl: '/picture/project_sec/project_19/project_ (2).png',
    tags: ['Depa'],
    link: '/project_sec/project_(19)'  
  },
  {
    id: 20,
    title: 'จัดทำหนังสั้นในวิชา',
    description: '',
    imageUrl: '/picture/project_sec/project_20/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(20)'  
  },
  {
    id: 21,
    title: 'ทำ Short Video',
    description: '',
    imageUrl: '/picture/project_sec/project_21/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(21)'  
  },
  {
    id: 22,
    title: 'ฝึกทำอนิเมชั่น',
    description: '',
    imageUrl: '/picture/project_sec/project_22/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(22)'  
  },
  {
    id: 23,
    title: 'ทำ MV cover เพลง',
    description: '',
    imageUrl: '/picture/project_sec/project_23/project_ (1).png',
    tags: ['Depa'],
    link: '/project_sec/project_(23)'  
  },
  {
    id: 24,
    title: 'กิจกรรมงานวันกีฬาสี',
    description: 'กิจกรรมงานวันกีฬาสีได้รับหน้าที่เป็นพี่สีคุมกีฬาและเเบล็คสเตจของเเสตนเชียร์',
    imageUrl: '/picture/project_sec/project_24/project_.jpg',
    tags: ['Depa'],
    link: '/project_sec/project_(24)'  
  },
  


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
