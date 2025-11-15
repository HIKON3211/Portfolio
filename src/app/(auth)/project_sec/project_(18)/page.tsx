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
            src="/picture/project_sec/project_18/project_ (3).jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
             3DsMax

          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้ฝึกและเรียนรู้พื้นฐานการใช้งานโปรแกรม 3DsMax 
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            ฝึกใช้โปรแกรม 3ds Max ทำให้ผมได้เปิดมุมมองใหม่เกี่ยวกับงานออกแบบ
สามมิติ จากที่ตอนแรกคิดว่าเป็นเรื่องยาก กลับกลายเป็นว่ายิ่งลองยิ่งรู้สึกท้าทายและสนุก ผมได้เรียนรู้ทั้งการจัดองค์ประกอบ แสง เงา และความสำคัญของรายละเอียดเล็ก ๆ ที่ส่งผลกับภาพรวมของงาน ทำให้เข้าใจว่าความสวยงามของผลงานไม่ได้มาจากโปรแกรม และเผื่อในอนาคตจะมีการนำทักษะนี้ไปใช้ในการออกแบบ 3D ต่าง ๆ
          </p>
          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (3).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (2).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

             <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (4).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

             <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (5).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

             <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (6).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

             <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_18/project_ (7).jpg"
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
