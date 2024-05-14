import Navbar from "@/components/landing/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
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

          <div className="flex gap-2">
            <Input type="text" placeholder="Enter link here"/>
            <Button variant="shortenBtn">Shorten Now!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
