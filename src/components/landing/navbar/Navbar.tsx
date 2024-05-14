"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-[3em] py-[1.7em] shadow-md">
      <Link href="/">
        <Image src="logo.svg" alt="logo.svg" width={120} height={120} />
      </Link>

      <div className="flex gap-[1.5em]">
        <Button>Login</Button>
        <Button variant="shortenBtn">Register Now</Button>
      </div>
    </div>
  );
}
