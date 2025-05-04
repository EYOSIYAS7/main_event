import React from "react";
import Image from "next/image";

import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

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
      <div>
        <SignedOut>
          <SignUpButton>
            <Button variant="outline" className="hidden md:inline-flex">
              <Link href="/sign-up">Login</Link>
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
