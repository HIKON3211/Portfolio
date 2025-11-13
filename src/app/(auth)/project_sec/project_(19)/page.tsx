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
            src="/picture/project_sec/project_19/project_ (2).png"
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
            ตัวผมได้รับสิทธิมาเเข่งโครงงานนี้จากการผ่านเข้ารอบจาก Coding
            Bootcamp
            โดยกิจกรรมนี้จะให้นำเสนอโครงงานเกี่ยวกับชีวิตประจำวันโดยตั้งบูธ
            เเละพรีเซนต์ให้กับทางคณะกรรมการเเละบุคคลการที่ได้เข้ามารับชมที่ MCC
            Hall เดอะมอลล์ ไลฟ์สโตร์ บางกะปิ โดยจะมีการเก็บคะเเนนอยู่ตลอดทั้งงาน
            เป็นเวลา 3 วัน
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            สิ่งที่ได้มาจากกิจกรรมนี้ :
            ในช่วงก่อนไปงานได้ทำโครงงานเเละเรียนรู้เรื่องการใช้โปรเเกรม
            Cira-Core เพื่อใช้ Ai ในการ Detect ใบหน้า เเละ Arduino
            เพื่อสั่งการไปยังอุปกรณ์ต่างๆ เเละในวันที่ไปเเข่งขันโครงงาน
            ก็ได้รับประสบการณ์ในการพูดเเละพรีเซนต์
            เเละยังได้รู้ทำความรู้จักกับนักเรียนเเละคนเเข่งขันจากบูธอื่นๆอีกมากมาย
            ทำให้ผมได้พัฒนาความสามารถในการ
            ทำความรู้จักเเละเข้ากับคนที่ไม่รู้จักได้ดีมากๆ
          </p>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_19/project_ (2).png"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_19/project_ (1).png"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
             
          </div>

          {/* รูปภาพเกียรติบัตร */}
          <div>
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-2">
              เกียรติบัตร
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (3).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div> */}

            
          </div>
        </div>
      </section>
    </div>
  );
}
