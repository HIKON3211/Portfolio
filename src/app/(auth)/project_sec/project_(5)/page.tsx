'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ActivityDetail() {
  const router = useRouter();

  return (
    <div>
      {/* 🔙 ปุ่มย้อนกลับ */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-[#208b86] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1e90cc] transition duration-300 z-50"
      >
        ⬅ ย้อนกลับ
      </button>

      {/* {รูปอันเบิ้มๆข้างบน} */}
      <section
        id="project_1"
        className="relative h-[80vh] flex flex-col items-center justify-center text-center"
      >
        {/* พื้นหลังภาพแบบละลาย */}
        <div className="absolute inset-0">
          <Image
            src="/picture/project_sec/project_5/project_ (2).jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            Python Competiton
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้ผ่านเข้ารอบ 24 ทีมสุดท้าย ในการเเข่งขัน Python Competition 
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
                     ได้ลงเเข่งการเขียนโค้ดเเก้โจทย์จากภาษา Python โดยจะเขียนโดย
ไม่ใช้ในส่วนของ Ai มาช่วยเลย เเละได้ผ่านเข้ามาเเข่งในรอบ 24 ทีมสุดท้าย ที่ กทม.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
                     สิ่งที่ได้รับ : เป็นครั้งแรกที่เริ่มรู้จักและเริ่มใช้งาน Kali Linux และยังได้ความเรียนรู้เกี่ยวกับกรรมวิธีต่าง ๆ ที่เหล่าคนร้ายจะเข้าระบบมาอย่างไรด้วยวิธีอะไร และยังได้มีการสอนใช้โปรแกรมต่าง ๆ ไม่ว่าจะเป็นการสุ่มรหัสผ่านเพื่อเข้าเว็บ และการสอนให้แฮ็กเว็บในหลาย ๆ วิธีอย่างเช่นวิธี SQL Injection ซึ่งทำให้รู้ชื่นชอบมากขึ้น
          </p>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_5/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_5/project_ (2).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_5/project_ (3).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_5/project_ (4).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

          </div>

          {/* รูปภาพเกียรติบัตร */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              เกียรติบัตร
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/picture/project_sec/project_5/project_ (1).png"
                alt="เกียรติบัตร"
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
