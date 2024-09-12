export default function TwoAdmissionRequirement() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">
            Admission Requirement
          </h2>
          <p className="text-xl text-muted-foreground md:text-2xl">
            The only admission requirement for our bootcamp is{" "}
            <span className="font-bold text-blue-500">
              proven motivation to learn
            </span>
            . That's it.... but we take it seriously.
          </p>
          {/* <p className="text-gray-700 leading-relaxed">
            The only admission requirement for our bootcamp is{" "}
            <span className="font-bold text-blue-500">proven motivation to learn</span>. We believe that with the right
            mindset and dedication, anyone can succeed in our program.
          </p> */}
        </div>
      </div>
    </section>
  );
}
