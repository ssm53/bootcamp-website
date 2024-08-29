/* eslint-disable react/no-unescaped-entities */
export default function HelpAfterBootcamp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            Get Proper Career Help
          </h2>
          <p className="font-bold md:text-xl">
            We will be pushing you all the way...
          </p>
        </div>
        <div>
          <p className="text-muted-foreground md:text-xl">
            We'll provide you with resume and cover letter templates.
          </p>
          <br />
          <p className="text-muted-foreground md:text-xl">
            But more importantly, we provide you with ready-to-use portfolio
            templates.
          </p>
          <br />
          <p>
            Not just that, we check in with you 4 times a week to ensure that
            you are keeping up with your job applications!
          </p>
          <br />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" />
      </div>
    </section>
  );
}
