"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const travelTabs = [
  {
    label: "Flights",
    icon: (
      <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-7 5v2l7-2.2V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.2L21 16Z" />
      </svg>
    ),
  },
  {
    label: "Stays",
    icon: (
      <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h2v9h14V8h2v12h-2v-3H5v3H3V5Zm4 2h4a3 3 0 0 1 3 3v2H7V7Zm9 1h2a2 2 0 0 1 2 2v2h-4V8Z" />
      </svg>
    ),
  },
  {
    label: "Activities",
    icon: (
      <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9Zm-2 13h4v2h-4v-2Zm1 3h2v3h-2v-3Z" />
      </svg>
    ),
  },
  {
    label: "Rides",
    icon: (
      <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 11 1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a3 3 0 0 1 2 2.8V19h-2v-2H5v2H3v-5.2A3 3 0 0 1 5 11Zm2.1-.5h9.8l-1.2-3.5H8.3l-1.2 3.5ZM6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      </svg>
    ),
    badge: "NEW",
  },
];

function Header() {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <header className="sticky top-0 z-[200] w-full bg-[#003143] text-white">
      <div className="mx-auto box-border w-full max-w-[1200px] px-[15px]">
        <div className="flex min-h-[68px] items-center justify-between gap-6">
          <Link
            className="inline-flex shrink-0 items-center"
            href="/"
            aria-label="Almosafer home"
          >
            <Image
              src="/image/almosafer.svg"
              alt="Almosafer"
              width={120}
              height={32}
              priority
              className="block h-auto w-[150px]"
            />
          </Link>

          <nav
            className="flex min-w-0 items-center justify-end gap-5"
            aria-label="Account and language"
          >
            <button
              className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent py-2 font-[inherit] text-[14px] text-inherit"
              type="button"
            >
              SAR{" "}
              <span
                className="h-[6px] w-[6px] rotate-45 -translate-y-[2px] border-r border-b border-current"
                aria-hidden="true"
              />
            </button>
            <button
              className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent py-2 font-[inherit] text-[14px] text-inherit"
              type="button"
              lang="ar"
            >
              العربية
            </button>
            <a
              className="whitespace-nowrap font-[inherit] text-[14px] text-inherit no-underline hover:underline"
              href="#retrieve-trip"
            >
              Retrieve my trip
            </a>
            <a
              className="inline-flex items-center gap-2 whitespace-nowrap font-[inherit] text-[14px] text-inherit no-underline hover:underline"
              href="tel:+966554400000"
              aria-label="Call +966 55 440 0000"
            >
              <svg
                className="h-[17px] w-[17px] fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.4-.2-3.2.8.8-3.1-.3-.5A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.3.2-.3.6-1.1.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.3.7 3.1.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
              </svg>
              <span>+966554400000</span>
            </a>
            <button
              className="min-w-[120px] cursor-pointer rounded-[22px] border border-white bg-transparent px-3 py-1 font-[inherit] text-[14px] text-white"
              type="button"
            >
              Sign in
            </button>
          </nav>
        </div>

        <nav
          className="flex min-h-[57px] items-center gap-5"
          aria-label="Travel services"
        >
          {travelTabs.map(({ label, icon, badge }) => (
            <button
              className={`inline-flex min-h-[36px] cursor-pointer items-center justify-center gap-[10px] whitespace-nowrap rounded-[20px] border-0 px-4 font-[inherit] text-[14px] font-semibold ${
                activeTab === label
                  ? "bg-white text-[#003143]"
                  : "bg-transparent text-white"
              }`}
              type="button"
              key={label}
              aria-pressed={activeTab === label}
              onClick={() => setActiveTab(label)}
            >
              {icon}
              <span>{label}</span>
              {badge && (
                <span className="rounded-[4px] bg-[#269b52] px-[6px] py-[2px] text-[10px] font-bold leading-none text-white">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
