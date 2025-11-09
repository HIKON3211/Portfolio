'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed bottom-4 left-4 bg-[#33a8de] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1e90cc] transition duration-300 z-50"
    >
      ⬅ ย้อนกลับ
    </button>
  );
};

export default BackButton;
