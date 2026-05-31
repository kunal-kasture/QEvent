"use client";

import "../app/globals.css";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  HomeIcon,
  PersonIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { CgProfile } from "react-icons/cg";
import { useSession, signIn, signOut } from "next-auth/react";

import { FaRegHeart } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";

const Header = () => {
  const [session, setSession] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-50 drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 border-spacing-0 bg-slate-100 h-24">
      <div className="hover-inverse flex items-center justify-center gap-2">
        <Link
          href={"#"}
          className="text-3xl font-bold max-sm:text-2xl bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent"
        >
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={90} // Aspect ratio control
            width={90} // Aspect ratio control
            className="hover-inverse w-full h-auto max-w-[120px] max-h-[120px] py-4"
          />
        </Link>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center justify-center gap-5 font-semibold max-md:hidden">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <HomeIcon />
            </div>
            <p>Home</p>
          </Link>

          <Link
            href={"/events"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <CgProfile />
            </div>
            <p>Events</p>
          </Link>

          <Link
            href={"/artists"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <PersonIcon />
            </div>
            <p>Artists</p>
          </Link>

          <Link
            href={"/tags"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <TfiTicket />
            </div>
            <p>Tags</p>
          </Link>

          {session ? (
            <button
              onClick={() => {}}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Logout
            </button>
          ) : null}
          {!session ? (
            <button
              onClick={() => {}}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Log in
            </button>
          ) : null}
        </div>
        <div className="flex justify-center items-center gap-4 max-sm:gap-1"></div>
      </div>

      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMenu}
          className="text-slate-700 p-2 focus:outline-none scale-150 transition-transform duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-100 border-b border-slate-200 px-6 py-4 shadow-2xl z-50 md:hidden">
          <div className="flex flex-col gap-4 font-semibold text-sm text-slate-700">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-2 hover:text-primary border-b border-slate-100 transition-all"
            >
              <HomeIcon className="scale-110" />
              <p>Home</p>
            </Link>
            <Link
              href={"/events"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-2 text-primary border-b border-slate-100 transition-all"
            >
              <CgProfile className="scale-110" />
              <p>Events</p>
            </Link>
            <Link
              href={"/artists"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-2 hover:text-primary border-b border-slate-100 transition-all"
            >
              <PersonIcon className="scale-110" />
              <p>Artists</p>
            </Link>
            <Link
              href={"/tags"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 py-2 hover:text-primary border-b border-slate-100 transition-all"
            >
              <TfiTicket className="scale-110" />
              <p>Tags</p>
            </Link>
            {/* Mobile Auth Button */}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-gradient-to-r from-orange-400 to-teal-600 text-white py-2.5 rounded-md font-medium text-center hover:opacity-90 transition-all"
            >
              {session ? "Logout" : "Log in"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
