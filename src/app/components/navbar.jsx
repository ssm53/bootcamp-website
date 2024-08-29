import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2d3748] py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {/* <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter">
          <span className="text-blue-500">Hey</span>
          <span>Learn</span>
          <span className="text-blue-500">2</span>
          <span>Code</span>
        </div> */}
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
