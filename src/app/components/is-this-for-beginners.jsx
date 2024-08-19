/* eslint-disable react/no-unescaped-entities */
export default function IsThisForBeginners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            You may be wondering... can I join if I have not coded before?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Yes, complete beginners are more than welcome to join... even if you
            have not written a single line of code. HeyLearn2Code is catered for
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" />
      </div>
    </section>
  );
}
