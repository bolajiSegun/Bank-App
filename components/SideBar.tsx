"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex items-center mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            alt="SG Bank"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-24"
          />
          <h2 className="sidebar-logo">SGBANK</h2>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className="flex gap-4 text-blue-600">
          <p className="sidebar-label">User:</p>
        </div>
      </nav>

      <div className="sidebar-label">FOOTER</div>
    </section>
  );
};

export default SideBar;
