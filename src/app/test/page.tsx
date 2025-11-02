import Image from "next/image";

export default function ActivityDetail() {
  return (
    <div className="">
      {/* {รูปอันเบิ้มๆข้างบน} */}

      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center ">
        {/* พื้นหลังภาพแบบละลาย */}
        <div className="absolute inset-0 ">
          <Image
            src="/picture/project_1/IMG_2.jpg"
            alt="Background"
            fill
            className="object-cover object-[center_20%] opacity-75 "
          />
        </div>
        <div className="mt-10 z-10 px-4 text-center">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white text-shadow-strong wrap-break-word">
            CODING WAR
          </h1>
        </div>
      </section>

      {/* {ข้อมูลกิจกรรมกับรูป} */}
      <section className="min-h-screen bg-gray-50 py-20 px-6 ">
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

          {/* รูปภาพกิจกรรม */}
          <div className="mb-8 ">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 ">
              📸 ภาพกิจกรรม
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/images/activity.jpg"
                alt="ภาพกิจกรรม"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="/images/activity.jpg"
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
              🎖️ เกียรติบัตร
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/certificate.jpg"
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
