import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6">
      <div className="flex items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="h-8 w-auto md:h-10"
        />
      </div>
      <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 md:text-base">
        Login
      </button>
    </header>
  );
};

export default Header;
