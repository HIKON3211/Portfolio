"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
            src="/picture/project_sec/project_1/project_ (2).jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            CODING WAR
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้เข้าร่วมการเเข่งขันรอบ 100 ทีมสุดท้าย ระดับประเทศ กิจกรรม "
            Coding War "
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            ได้รับสิทธิมาแข่งโครงงานนี้จากการผ่านเข้ารอบจาก Coding Bootcamp
            โดยกิจกรรมนี้จะให้นำเสนอโครงงานเกี่ยวกับชีวิตประจำวันโดยตั้งบูธ
            และนำเสนอให้กับทางคณะกรรมการและบุคลากรที่ได้เข้ามารับชมที่MCC
            Hallเดอะมอลล์ ไลฟ์สโตร์ บางกะปิ โดยจะมีการเก็บคะแนนอยู่ตลอดทั้งงาน
            เป็นเวลา 3 วัน
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            สิ่งที่ได้รับ :
            ในช่วงก่อนไปงานได้ทำโครงงานและเรียนรู้เรื่องการใช้โปรแกรม Cira-Core
            เพื่อใช้ AI ในการ Detect ใบหน้า และ Arduino
            เพื่อสั่งการไปยังอุปกรณ์ต่างๆ และในวันที่ไปแข่งขันโครงงาน
            ก็ได้รับประสบการณ์ในการพูดและการนำเสนอ
            และยังได้รู้ทำความรู้จักกับนักเรียนและคนแข่งขันจากบูธอื่นๆอีกมากมาย
            ทำให้ได้พัฒนาความสามารถในการทำความรู้จักและเข้ากับคนที่ไม่รู้จักได้ดีมากๆ
          </p>
          {/* บล็อควิดีโอ YouTube */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              🎥 วิดีโอกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/iOywA6zjr48" // 🔗 ใส่ลิงก์ YouTube ที่ต้องการ
                title="วิดีโอกิจกรรม"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_1/project_ (2).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_1/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_1/project_ (3).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_1/project_ (4).jpg"
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
                src="/picture/project_sec/project_1/project_ (6).jpg"
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
