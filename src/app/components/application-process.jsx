/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

export default function ApplicationProcess() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            Application Process
          </h2>
          {/* <p className="text-muted-foreground md:text-xl">
            First come, first serve but we won't be accepting everyone
            unfortunately. We only want suitable candidates.
          </p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="text-6xl font-bold">1</div>
            <div>
              <h3 className="text-2xl font-semibold">Register</h3>
              <p className="text-muted-foreground">
                Fill out our application form{" "}
                <Link href="#" className="underline">
                  here
                </Link>{" "}
                to get started. We'll review your information and get back to
                you for an interview in 2-3 days. Again, don't feel insecure if
                you have not coded before!
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-6xl font-bold">2</div>
            <div>
              <h3 className="text-2xl font-semibold">Interview</h3>
              <p className="text-muted-foreground">
                If your application is accepted, we'll schedule an interview to
                learn more about you and your goals.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-6xl font-bold">3</div>
            <div>
              <h3 className="text-2xl font-semibold">Acceptance</h3>
              <p className="text-muted-foreground">
                After the interview, we'll let you know within a day if you've
                been accepted into the program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
