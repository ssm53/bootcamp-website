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
              I'm the founder of HeyLearn2Code and I just wanna say a few
              words...
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I learned to code in April 2023. By the end of the year, I
              received 4 software developer job offers.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              This was done withut a Degree or a Master's. I mean... it was too
              expensive and they take too darn long!
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I went down the freelance route and built and sold various tech
              products to businesses, that actually add value for them.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Currently, I am building EZLA, an AI SaaS that is able to generate
              personalised job specific resumes and cover letters under 20
              seconds. This is in beta mode and is launching in Q4 2024.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              You can see more of my work{" "}
              <Link href="#" target="_blank" className="underline font-bold">
                HERE
              </Link>
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Oh, and here is my{" "}
              <Link href="#" target="_blank" className="underline font-bold">
                Linkedin
              </Link>
              .
            </p>
            <br />

            <p className="text-muted-foreground md:text-xl">
              Previously, I studied at the Uni of Bath and and worked as an
              accountant at Deloitte in the UK. I then came back to my home
              country Malaysia to start a crypto company which had a 7-figure
              profit in 2021.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              That venture ultimately failed but I experienced first-hand the
              amount of value you can add to your organisation if you learn to
              code.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Well, that's when I knuckled down and learned to code!
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              My aim here at HeyLearn2Code is to provide y'all with what I did
              not have when I was learning:
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl font-bold">
              To have someone guiding you on exactly how to do it, provide you
              instant help when needed and to guarantee that you get a job... at
              an affordable price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
