"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link"; //
export default function FounderMessage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0e6d6] dark:bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="rounded-full w-[300px] h-[300px] mx-auto overflow-hidden">
            <Image
              src="/founder.png"
              width="300"
              height="300"
              alt="Founder"
              className="object-contain"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-20">
              Hey peeps, I'm Shaun...
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I started learning to code in April 2023.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              By the end of the year, I received 4 software developer job
              offers.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              This was done withut a Degree or a Master's. I mean... it was too
              expensive!
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I've also managed to build and sell various tech products to
              businesses, that actually add value for them.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Currently, I am building EZLA, an AI SaaS that is able to generate
              personalised job specific cover letters under 20 seconds.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              You can see more of my work{" "}
              <Link
                href="https://www.ravewavedigital.com/portfolio"
                target="_blank"
                className="underline font-bold"
              >
                HERE
              </Link>
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Oh, and here is my{" "}
              <Link
                href="https://www.linkedin.com/in/shaun-shanil-menezes/"
                target="_blank"
                className="underline font-bold"
              >
                Linkedin
              </Link>
              .
            </p>
            <br />

            <p className="text-muted-foreground md:text-xl">
              Previously, I studied at the Uni of Bath and and worked as an
              accountant at Deloitte in the UK. I then came back to my home
              country Malaysia to start a crypto company which did relatively
              well at the start, but it ultimately failed.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I remember feeling abit helpless cause I lacked the skills to turn
              it around, specifically tech skills. Lesson learnt but yeah, not a
              nice feelling hahaha
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              That's when I decided to properly learn how to code.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I aim here at HeyLearn2Code is to provide y'all with what I did
              not have when I was learning:
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl font-bold">
              To have someone guiding you on exactly how to do it and provide
              you instant help when needed... at an affordable price.
            </p>
            {/* <br />
            <p className="text-muted-foreground md:text-xl font-bold">
              and HeyLearn2Code was born!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
