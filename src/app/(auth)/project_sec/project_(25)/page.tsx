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
            src="/picture/project_sec/project_24/project_.jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            SII&Robotic
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้ผ่านการคัดเลือกและเข้าค่ายอบรมและแข่งขันค่าย
          
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            ได้รับหน้าที่เป็นพี่คุมกีฬาเทเบิลเทนนิส โดยจะทำหน้าที่ในการฝึกซ้อมน้อง ๆ ทั้งมอต้นและมอปลายด้วย ซึ่งทำให้ได้เรื่องของความอดทนและวินัยแก่ทั้งตัวน้อง ๆ และตัวผม และอีกหน้าที่คือเป็นแบล็คสเตจที่ช่วยในการประกอบฉากและท่าในการแสดงของเชียร์ลีดเดอร์
          </p>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_24/project_.jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_24/project_.jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            */}
          </div>

          {/* รูปภาพเกียรติบัตร */}
          {/* <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              เกียรติบัตร
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_23/project_ (3).png"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            
          </div> */}
        </div>
      </section>
    </div>
  );
}
