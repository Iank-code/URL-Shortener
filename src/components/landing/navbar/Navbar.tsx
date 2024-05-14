"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();
  console.log(user)

  if (sessionId) {
    localStorage.setItem("ses-id", sessionId);
  }
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
        <p>Hi {user && user.fullName}</p>
      ) : (
        <div className="flex gap-[1.5em]">
          <Button>Login</Button>
          <Button variant="shortenBtn">
            <Link href="/sign-up">Register Now</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
