"use client";

import { useState } from "react";
import "./globals.css"; // ถ้ามีไฟล์ CSS รวม
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-black bg-opacity-80 backdrop-blur-md opacity-70">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* ด้านซ้าย */}
            <div className="text-white font-bold text-lg">PORTFOLIO</div>

            {/* ปุ่มเมนูมือถือ */}
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            {/* เมนูหลัก */}
            <div
              className={`flex-col md:flex-row md:flex space-x-6 text-white text-lg scroll-smooth ${
                menuOpen ? "flex" : "hidden"
              } md:items-center`}
            >
              <Link
                href="/"
                className="py-2 md:py-0 hover:underline"
              >
                HOME
              </Link>
              <Link
                href="/#profile"
                className="py-2 md:py-0 hover:underline"
              >
                PROFILE
              </Link>
              <Link
                href="/#about"
                className="py-2 md:py-0 hover:underline"
              >
                ACTIVITY
              </Link>
            </div>
          </div>
        </nav>

        {/* เนื้อหาหลัก */}
        <main>{children}</main>
      </body>
    </html>
  );
}
