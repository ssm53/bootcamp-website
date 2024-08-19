/* eslint-disable react/no-unescaped-entities */
export default function QuitJob() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            But Shaun, I can't quit my job and join the bootcamp...
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Don't worry, I got you... our bootcamp has full-time and part-time
            options.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" />
      </div>
    </section>
  );
}
