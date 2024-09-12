import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center justify-center">
          {/* <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage src="/founder.png" alt="Founder" />
          </Avatar> */}
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
        <div className="space-y-8 lg:space-y-10">
          <div className="mt-6 space-y-4 text-center md:mt-8 md:space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
              Hey peeps, I'm Shaun and I launched HeyLearn2Code..
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My aim here at HeyLearn2Code is to provide y'all with what I did
              not have when I was learning:
            </p>
            <p className="text-lg text-muted-foreground font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              To have someone guiding you on exactly how to do it, provide you
              instant help when needed and to guarantee that you get a job... at
              an affordable price.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I was an accountant but I learned to code in April 2023. By the
              end of the year, I received 4 software developer job offers. This
              was done withut a Degree or a Master's. I mean... it was too
              expensive and they take too darn long! I went down the freelance
              route and built and sold various tech products to businesses, that
              actually add value for them. Currently, I am building EZLA, an AI
              SaaS that is able to generate personalised job specific resumes
              and cover letters under 20 seconds. This is in beta mode and is
              launching in Q4 2024.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              You can see more of my work{" "}
              <Link
                href="https://www.ravewavedigital.com/"
                target="_blank"
                className="underline font-bold"
              >
                HERE
              </Link>
            </p>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Previously, I studied at the Uni of Bath and and worked as an
              accountant at Deloitte in the UK. I then came back to my home
              country Malaysia to start a crypto company which had a 7-figure
              profit in 2021. That venture ultimately failed but I experienced
              first-hand the amount of value you can add to your organisation if
              you learn to code. Well, that's when I knuckled down and learned
              to code!
            </p>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Now, that I have done it, I want to share everything on how I did
              it so you can do it too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
