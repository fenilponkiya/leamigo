import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex h-16 sm:h-20 w-full items-center justify-between relative">
        <Link href="#" className="mr-6 hidden sm:flex">
          <Image src={Logo} alt="Logo" />
        </Link>
        <Input
          className="flex-1 mx-2 sm:mx-6"
          placeholder="Search Destination or Activities..."
        />

        <div className="hidden sm:flex gap-2">
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            Home
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            Airport Transfers
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            Deals
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            Activities
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            Agent Login
          </Link>
          <Link
            href="#"
            className="group h-9 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
          >
            USD
          </Link>
        </div>

        <button
          className="sm:hidden flex items-center justify-center p-2 bg-white rounded-md dark:bg-gray-950"
          data-collapse-toggle="navbar-hamburger"
          aria-controls="navbar-hamburger"
          aria-expanded={open ? "true" : "false"}
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:hidden flex-col gap-2 box-shadow-1 absolute right-7 bg-white p-4 rounded-lg shadow-lg z-50`}
      >
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          About Us
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          Airport Transfers
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          Deals
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          Activities
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          Agent Login
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="#"
          className="block h-7 px-4 py-2 text-sm font-medium bg-white rounded-md dark:bg-gray-950"
        >
          USD
        </Link>
      </div>
    </div>
  );
};
