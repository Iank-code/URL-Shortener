"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { sessionId } = useAuth();
  const { user } = useUser();

  return (
    <div className="flex flex-row justify-between px-[3em] py-[1.7em] shadow-md">
      <Link href="/">
        <Image
          src="logo.svg"
          alt="logo.svg"
          width={120}
          height={120}
          priority
        />
      </Link>

      {sessionId ? (
        <div className="flex gap-4 items-center">
          <p>Hi {user && user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-[1.5em]">
          <Button>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button variant="shortenBtn">
            <Link href="/sign-up">Register Now</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
