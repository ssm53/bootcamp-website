/* eslint-disable react/no-unescaped-entities */
export default function MoneyBackGuarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            Our 100% Money-Back Guarantee
          </h2>
          <p className="font-bold md:text-xl">We win only if you win</p>
        </div>
        <div>
          <p className="text-muted-foreground md:text-xl">
            We're that confident in our program that we offer this insane
            money-back guarantee.
          </p>
          <br />
          <p className="text-muted-foreground md:text-xl">
            To qualify, students must meet and maintain eligibility as outlined
            below:
          </p>
          <br />
          <p className="text-muted-foreground md:text-xl">
            You graduated from our bootcamp and received our certificate.
          </p>
          <p className="text-muted-foreground md:text-xl">
            You are of legal working age and have the rights to work in your
            country.
          </p>
          <p className="text-muted-foreground md:text-xl">
            You actively look for jobs, and perform the tasks set out by our
            career team
          </p>
          <br />
          <p className="text-muted-foreground md:text-xl">
            If you follow those steps above, but still dont get a tech job, you
            get a full-refund!
          </p>
          <br />
          <p className="text-muted-foreground md:text-xl">
            100% risk-free for you.
          </p>
          <br />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" />
      </div>
    </section>
  );
}
