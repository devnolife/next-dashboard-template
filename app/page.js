// /app/page.js
import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    //..
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <img
        src="/hero.png"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //..
  );
}