"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-24 md:py-24 lg:py-32 xl:py-48 bg-[#f0e6d6] dark:bg-[#f0e6d6] h-screen">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">
              <span className="text-blue-500">Hey</span>
              <span>Learn</span>
              <span className="text-blue-500">2</span>
              <span>Code</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              #1 Most Affordable & Personalised Full-Stack Coding Bootcamp.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              In 3 months, you will be able to build apps from scratch and be
              ready to apply for software developer jobs
            </p>
            <br />
            {/* <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We will hold your hand while you embark on your journey to code.
            </p>
            <br /> */}

            <p className="mx-auto max-w-[700px] font-bold md:text-xl ">
              FULL-TIME & PART-TIME OPTIONS AVAILABLE
            </p>
            <br />
            <p className="mx-auto max-w-[700px] font-bold md:text-xl text-blue-500">
              NEXT COHORT: 21 SEPTEMBER 2024
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button type="submit">Apply Now</Button>

            {/* <p className="text-xs text-muted-foreground">
              Sign up to unlock exclusive features and start building today.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
