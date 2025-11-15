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
            src="/picture/project_sec/project_9/project_ (1).png"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75"
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            STEM PROJECT
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* หัวข้อกิจกรรม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ได้เข้าร่วมอบรมเเละเเข่งขันในกิจกรรม STEM project ในโรงเรียน
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
                      ทางโรงเรียนได้จัดการแข่งขันโครงงาน STEM ในทั้งระดับชั้นมัธยมปีที่ 5
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
                 สิ่งที่ได้รับ : เนื่องจากโครงงานของผมจะเกี่ยวกับการสั่งงานควบคุมแสงไฟให้หันไปยังจุดที่ตั้งค่าไปได้ โดยก็จะได้ฝึกการแบ่งหน้าที่เนื่องจากมีสมาชิกถึง 5 คน โดยผมก็จะทำหน้าที่ในส่วนของการทำตัวชิ้นงาน ซึ่งก็จะมีการใช้ โปรแกรม Arduino และยังมีการทำตัวของแอปพลิเคชันเพื่อเชื่อมต่อผ่าน 
Wi-Fi และสั่งการตัวของอุปกรณ์ ซึ่งนี้ก็เป็นครั้งแรกที่ได้ลองทำแอปพลิเคชันลงในมือถือซึ่งเป็นอะไรที่ท้าทายมาก ๆ แต่สุดท้ายผ่านมาได้
          </p>

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_9/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_9/project_ (2).jpg"
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
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/picture/project_sec/project_8/project_ (1).jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
