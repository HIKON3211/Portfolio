"use client";
import CommandsProject from "./components/commands_project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/picture/project/project_2/project_1.jpg",
  "/picture/project/project_1/project_2.jpg",
  "/picture/project/project_3/project_1.jpg",
];
//hello
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // เปลี่ยนทุก 5 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-800 ">
      <div className="container"></div>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden ">
        {/* พื้นหลังภาพแบบเฟด */}
        {backgroundImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index}`}
            fill
            priority={index === currentIndex}
            className={`object-cover absolute inset-0 transition-opacity duration-5000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* เนื้อหา */}
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            PORTFOLIO
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white tracking-widest mt-2 uppercase text-shadow-strong wrap-break-word">
            By Thanadet Nualkham
          </p>
        </div>
      </section>

      {/* About ME */}
      <section
        id="profile"
        className="bg-white p-6 text-white py-20 px-6 text-center "
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">Profile</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-10"></div>

          {/* ข้อมูลส่วนตัว */}
          <div className=" flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-70 h-70 rounded-xl overflow-hidden shadow-lg bg-[#33a8de] ">
              <img
                src="/picture/profile/profile_1.jpg"
                width={148}
                height={144}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-left bg-gray-50 p-6 rounded-xl  w-full shadow-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex gap-2">
                <img
                  src="/picture/logo/logo_user.svg"
                  alt="user"
                  className="w-6 h-6"
                />
                ข้อมูลส่วนตัว
              </h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li>
                  <strong>ชื่อ-นามสกุล:</strong> ธนเดช นวลคำ (Thanadet Nualkham)
                </li>
                <li>
                  <strong>ชื่อเล่น:</strong> ให้คุณ
                </li>
                <li>
                  <strong>วันเกิด:</strong> 29 เมษายน 2551
                </li>
                <li>
                  <strong>สัญชาติ:</strong> ไทย
                </li>
                <li>
                  <strong>อายุ:</strong> 17 ปี
                </li>
                <li>
                  <strong>น้ำหนัก:</strong> 84 กิโลกรัม
                </li>
                <li>
                  <strong>ส่วนสูง:</strong> 174.5 เซนติเมตร
                </li>
              </ul>
            </div>
          </div>

          {/* หมวดอื่น ๆ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
            {/* 🎓 การศึกษา */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl self-start">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex gap-2">
                <img
                  src="/picture/logo/logo_study.svg"
                  alt="study"
                  className="w-6 h-6"
                />{" "}
                การศึกษา
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>โรงเรียน:</strong> จ่านกร้อง
                </li>
                <li>
                  <strong>แผนการเรียน:</strong> วิทย์-คณิต-คอมพิวเตอร์
                </li>
                <li>
                  <strong>ระดับชั้นการศึกษา:</strong> มัธยมศึกษาตอนปลาย
                </li>
                <li>
                  <strong>ปีการศึกษา:</strong> ปี 3
                </li>
              </ul>
            </div>

            {/* 🎥 วิดีโอแนะนำตัว */}
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/oPnjEiwH0Vk?si=OjYP_YOwqHwooNmx"
                title="วิดีโอแนะนำตัว"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* 🛠 ทักษะ */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 items-center flex gap-2">
                <img
                  src="/picture/logo/logo_file.svg"
                  alt="terminal skill"
                  className="w-6 h-6"
                />
                ทักษะ
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                {/* 💡 เพิ่มคุณสมบัติ 'link' ในอาร์เรย์ข้อมูล */}
                {[
                  {
                    name: "Basic HTML",
                    icon: "/picture/logo/logo_html.svg",
                    color: "#e34c26",
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTML", // 👈 เพิ่ม URL ที่ต้องการลิงก์
                  },
                  // ... ข้อมูลอื่น ๆ เช่น CSS, JavaScript, React ฯลฯ ...
                  // ตัวอย่างเพิ่มเติม:
                  {
                    name: "Basic CSS",
                    icon: "/picture/logo/logo_css.svg",
                    color: "#2965f1",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Basic js",
                    icon: "/picture/logo/logo_js.svg",
                    color: "#F7DF1E",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                  },
                  {
                    name: "Basic TS",
                    icon: "/picture/logo/logo_ts.svg",
                    color: "#2965f1",
                    link: "https://www.w3schools.com/typescript/typescript_intro.php",
                  },
                  {
                    name: "Basic Tailwind CSS",
                    icon: "/picture/logo/logo_tailwind_css.svg",
                    color: "#06B6D4",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Vercel",
                    icon: "/picture/logo/logo_vercel.svg",
                    color: "#000000",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Github",
                    icon: "/picture/logo/logo_github.svg",
                    color: "#000000",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Next.JS",
                    icon: "/picture/logo/logo_nextjs.svg",
                    color: "#000000",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Arduino",
                    icon: "/picture/logo/logo_arduino.svg",
                    color: "#00878F",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                  {
                    name: "Visual Studio Code",
                    icon: "/picture/logo/logo_vscode.svg",
                    color: "#007ACC",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  },
                ].map((skill, index) => (
                  // 🌟 โค้ดที่เปลี่ยนไป: ใช้แท็ก <a> ห่อหุ้ม <li> ทั้งหมด 🌟
                  <a
                    key={index}
                    href={skill.link} // กำหนดลิงก์ปลายทาง
                    target="_blank" // เปิดในแท็บใหม่
                    rel="noopener noreferrer" // เป็นการปฏิบัติที่ดีด้านความปลอดภัย
                    // ย้ายคลาสของ <li> เดิมมาที่ <a>
                    className="flex items-center gap-4 p-4 rounded-lg bg-white hover:bg-red-50 hover:scale-[1.02] transition-all duration-300 cursor-pointer group shadow-sm"
                  >
                    {/* ❗️ ลบ key={index} ออกจาก <li> เพราะย้ายไปที่ <a> แล้ว ❗️ */}
                    {/* ⚠️ ลบ className ของ <li> เดิมออก แล้วย้ายไปที่ <a> ด้านบน ⚠️ */}
                    {/* <li className="..."> ถูกแทนที่ด้วย <a> */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span
                        className="w-8 h-8 block"
                        style={{
                          backgroundColor: skill.color,
                          WebkitMaskImage: `url(${skill.icon})`,
                          maskImage: `url(${skill.icon})`,
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
                      />
                    </div>
                    <span className="text-base font-medium group-hover:text-red-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </ul>
            </div>

            {/* 🎯 ความสนใจและเป้าหมาย + 🌐 โซเชียลมีเดีย */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl flex flex-col gap-6">
              {/* ความสนใจและเป้าหมาย */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex gap-2">
                  <img
                    src="/picture/logo/logo_star.svg"
                    alt="facebook"
                    // 🌟 คำสั่งที่ง่ายกว่า: ทำให้สีดำกลายเป็นสีขาว 🌟
                    className="w-6 h-6"
                  />
                  ความสนใจและเป้าหมาย
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  สนใจด้านการพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพและ UI/UX ที่ดี
                  เป้าหมายคือการเป็น Full-stack Developer
                  ที่สามารถสร้างระบบที่ตอบโจทย์ผู้ใช้งานได้จริง
                </p>
              </div>

              {/* โซเชียลมีเดีย / เว็บไซต์ */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex gap-2">
                  <img
                    src="/picture/logo/logo_contact.svg"
                    alt="contact"
                    className="w-6 h-6"
                  />{" "}
                  โซเชียลมีเดีย / เว็บไซต์
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-gray-600">
                  {/* 💡 อัปเดตข้อมูลเพื่อให้รายการแรกสามารถโทรออกได้ และรายการที่สองไม่มีลิงก์ */}
                  {[
                    {
                      name: "Gmail : hikunggeez1@gmial.com",
                      icon: "/picture/logo/logo_gmail.svg",
                      color: "#e34c26",
                      // ลิงก์สำหรับโทรออก
                      link: undefined,
                    },
                    {
                      name: "Tel : 064-427-8191",
                      icon: "/picture/logo/logo_phone.svg", // เปลี่ยนไอคอน
                      color: "#008000",
                      // 🛑 ไม่มีลิงก์ (undefined)
                      link: undefined,
                    },
                    {
                      name: "Facebook : คุณ ณเดช",
                      icon: "/picture/logo/logo_facebook.svg",
                      color: "#2965f1",
                      link: "https://www.facebook.com/khun.n.dech.975478",
                    },
                    {
                      name: "Instagram : nr._.veeeer",
                      icon: "/picture/logo/logo_instagram.svg",
                      color: "#FF0069",
                      link: "https://www.instagram.com/nr._.veeeer?igsh=MTRlcjF1OHAxeWk4cQ%3D%3D&utm_source=qr",
                    },
                    {
                      name: "LINE ID : kongy3211",
                      icon: "/picture/logo/logo_line.svg",
                      color: "#00C300",
                      link: undefined,
                    },

                  ].map((skill, index) => {
                    // กำหนดคลาสที่ใช้ร่วมกัน
                    const commonClasses =
                      "flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm";
                    const hoverClasses = skill.link
                      ? "hover:bg-red-50 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                      : "cursor-default group"; // ไม่มีลิงก์ ให้ใช้เคอร์เซอร์เริ่มต้น

                    // องค์ประกอบภายใน (Icon + Name)
                    const content = (
                      <>
                        <div className="w-10 h-10 flex items-center justify-center">
                          <span
                            className="w-8 h-8 block"
                            style={{
                              backgroundColor: skill.color,
                              WebkitMaskImage: `url(${skill.icon})`,
                              maskImage: `url(${skill.icon})`,
                              WebkitMaskRepeat: "no-repeat",
                              maskRepeat: "no-repeat",
                              WebkitMaskSize: "contain",
                              maskSize: "contain",
                              WebkitMaskPosition: "center",
                              maskPosition: "center",
                            }}
                          />
                        </div>
                        <span className="text-base font-medium group-hover:text-red-600 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </>
                    );

                    // 🌟 เงื่อนไขการแสดงผล 🌟
                    if (skill.link) {
                      // กรณีมีลิงก์: ใช้แท็ก <a>
                      const isExternalLink = skill.link.startsWith("http");

                      return (
                        <a
                          key={index}
                          href={skill.link}
                          // กำหนด target และ rel เฉพาะเมื่อเป็นลิงก์ภายนอกเท่านั้น
                          {...(isExternalLink
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={`${commonClasses} ${hoverClasses}`}
                        >
                          {content}
                        </a>
                      );
                    } else {
                      // กรณีไม่มีลิงก์: ใช้แท็ก <li>
                      return (
                        <li
                          key={index}
                          className={`${commonClasses} ${hoverClasses}`}
                        >
                          {content}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="about"
        className="pt-28 pb-20 bg-gray-50 text-center "
      >
        <h2 className="text-2xl font-bold tracking-wide">
          CERTIFICATE AND MYPROJECT
        </h2>
        <div className="w-10 h-1 bg-red-600 mx-auto mt-2 mb-10"></div>
        <div>
          <CommandsProject />
        </div>
        <div className="flex justify-center mt-8 mb-20">
          <Link
            href="/media"
            id="bottone5"
          >
            ดูทั้งหมด
          </Link>
        </div>
      </section>
    </div>
  );
}
function setIsLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
