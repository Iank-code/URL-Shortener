"use client";

import { FormEvent } from "react";
import Navbar from "@/components/landing/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name }),
    });

    // Handle response
    if (response.ok) {
      const data = await response.json();
      console.log("Response Data:", data);
    } else {
      console.error("Error:", response.statusText);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="flex mt-[4em] gap-8 flex-col justify-center items-center">
        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Shorten you loooooong links {": )"}
        </h1>

        <div className="flex flex-col gap-3">
          <span>
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </span>

          <form onSubmit={submitForm} className="flex gap-2">
            <Input type="text" placeholder="Enter link here" name="name" />
            <Button variant="shortenBtn" type="submit">
              Shorten Now!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
