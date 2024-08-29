export default function WhatYouWilllearn() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">
            What You Will Learn
          </h2>
          <p className="text-muted-foreground">
            This is a full-stack coding bootcamp... so you'll learn frontend and
            backend programming.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                Frontend Programming
              </h2>
              <p className="text-muted-foreground">
                Javascript, Svelte, NextJS, HTML, CSS, Tailwind, DaisyUI,
                ShadcnUI, Langchain
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                Backend Programming
              </h2>
              <p className="text-muted-foreground">
                NodeJS, ExpressJS, AWS, Prisma, Docker, PostgreSQl, SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
