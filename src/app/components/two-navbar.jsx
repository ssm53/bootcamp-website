import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TwoNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* HeyLearn2Code logo */}
        <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter">
          <span className="text-blue-500">Hey</span>
          <span className="text-white">Learn</span>
          <span className="text-blue-500">2</span>
          <span className="text-white">Code</span>
        </div>

        {/* Buttons container */}
        <div className="ml-auto flex gap-4">
          <Button className="hover:bg-blue-900 px-8 py-3 text-base">
            GET FREE ACCESS
          </Button>
          <Button
            variant="outline"
            className="hover:bg-blue-900 hover:text-white px-8 py-3 text-base"
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </header>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
