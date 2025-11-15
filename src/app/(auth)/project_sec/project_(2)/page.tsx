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
            src="/picture/project_sec/project_2/project_ (8).jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            Coding Bootcamp
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้เข้าร่วมกิจกรรม Coding Bootcamp อบรมเเละได้เเข่งขันได้ชนะเลิศอันดับ 2 ของระดับภาคเหนือตอนล่าง
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
             ได้เข้าร่วมอบรมเชิงปฏิบัติเป็นเวลา 2 วัน โดยจะได้เรียนรู้การทำโปรเจคต่างๆผ่านเว็ป Ai thaigen เเละได้มีการคัดเลือกก่อนที่จะไปขึ้นบนเวทีใหญ่เเละได้รับการคัดเลือกผ่านไปเข้าร่วมกิจกรรม Coding war ที่กรุงเทพมหานคร 
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
               สิ่งที่ได้รับ : ได้รับความรู้เกี่ยวกับกระบวนการคิดเเละการพูดเเละพรีเซ้น เเละได้เรียนรู้การใช้งานเว็ป Ai thai gen เเละได้รับประสบการณ์ การพูดบนเวทีใหญ่ที่มีผู้คนมากมายคอยจับตามอง จึงทำให้ลดความประหม่าในการขึ้นเวทีหรือ
การนำเสนองานอื่นๆหรือสิ่งอื่นๆได้มาก
          </p>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_2/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_2/project_ (2).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_2/project_ (3).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_2/project_ (5).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_2/project_ (8).jpg"
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
            <div className="rounded-lg overflow-hidden shadow-md mb-10">
              <Image
                src="/picture/project_sec/project_2/project_ (7).jpg"
                alt="เกียรติบัตร"
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/picture/project_sec/project_2/project_ (6).jpg"
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
