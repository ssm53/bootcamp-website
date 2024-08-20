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
              Hey guys, I'm Shaun...
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I learnt to code in 2023 without a Masters or a Degree. In
              December 2023, I received 4 software developer job offers.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              I've managed to build and sell various tech products to
              businesses, and most importantly tech products that actually help
              'em.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              By nature, I'm not that much of a tech person. In college, I
              didn't know how to save my documents on a computer. So, I saved it
              by sending stuff to my sister through Facebook Messenger chat
              hahaha so yeah not gonna lie learning to code was difficult for
              me... very difficult, but I bloody did it, and it's been one of
              the most rewarding things I've done.
            </p>
            <br />
            <ol className="text-muted-foreground md:text-xl list-disc list-inside">
              <p>These are the projects that I have built:</p>
              <br />
              <li>
                I'm currently building EZLA, an AI startup that generates
                personalized job-specific cover letters in under 20 seconds.
                This is in beta mode and releasing in Q4 2024.
              </li>
              <br />
              <li>All-in-one clinic management system for GP doctors.</li>
              <br />
              <li>
                Rating Up, a tech system that filters bad Google reviews before
                they reach Google.
              </li>
              <br />
              <li>
                Various other websites and an AI chatbot for a crypto project
                (NDA signed).
              </li>
            </ol>
            <br />
            <p className="text-muted-foreground md:text-xl">
              You can see more of my work{" "}
              <Link
                href="www.ravewavedigital.com"
                target="_blank"
                className="underline"
              >
                here
              </Link>
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl">
              Now, I want to share with you what I know on how to do it. I aim
              to provide y'all with what I did not have when I was learning,
              which is:
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl font-bold">
              To have someone guiding you on what to learn and providing you
              instant help when needed... at a super affordable price.
            </p>
            <br />
            <p className="text-muted-foreground md:text-xl font-bold">
              and HeyLearn2Code was born!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
