import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "เว็บไซต์แสดงผลงานส่วนตัวที่ออกแบบด้วย Next.js และ Tailwind CSS เพื่อให้ดูเรียบง่ายและทันสมัย",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "E-commerce Platform",
    description:
      "ระบบร้านค้าออนไลน์ที่รองรับการชำระเงินและจัดการสินค้า พร้อมระบบหลังบ้านสำหรับผู้ดูแล",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Mobile App Design",
    description:
      "ออกแบบแอปมือถือสำหรับการจองตั๋วภาพยนตร์ โดยเน้น UX/UI ที่ใช้งานง่ายและสวยงาม",
    image: "/projects/mobileapp.jpg",
  },
  {
    title: "Mobile App Design",
    description:
      "ออกแบบแอปมือถือสำหรับการจองตั๋วภาพยนตร์ โดยเน้น UX/UI ที่ใช้งานง่ายและสวยงาม",
    image: "/projects/mobileapp.jpg",
  },
  {
    title: "Mobile App Design",
    description:
      "ออกแบบแอปมือถือสำหรับการจองตั๋วภาพยนตร์ โดยเน้น UX/UI ที่ใช้งานง่ายและสวยงาม",
    image: "/projects/mobileapp.jpg",
  },
  
  // เพิ่มโปรเจกต์อื่นๆ ได้ตามต้องการ
];

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-12">ผลงานของฉัน</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* รูปภาพโปรเจกต์ */}
            <div className="w-full h-56 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* เนื้อหาโปรเจกต์ */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
