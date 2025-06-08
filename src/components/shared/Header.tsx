import React from "react";
import Image from "next/image";

import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

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
      <SignedIn>
        <nav className="md:flex between hidden w-full max-w-xs">
          <NavItems />
        </nav>
      </SignedIn>
      <div>
        <SignedIn>
          <UserButton />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <SignUpButton>
            <Button variant="outline" className="hidden md:inline-flex">
              Sign up
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
