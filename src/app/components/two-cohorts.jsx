export default function TwoCohorts() {
  return (
    <section className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tighter pb-4">
          Our Cohorts
        </h2>
        <ul className="space-y-4 text-xl text-muted-foreground md:text-2xl">
          <li>
            15th October 2024{" "}
            <span className="text-blue-500 font-bold">(5 spots left)</span>
          </li>
          <li>
            15th February 2025{" "}
            <span className="text-blue-500 font-bold">(6 spots left)</span>
          </li>
          <li>
            15th June 2024{" "}
            <span className="text-blue-500 font-bold">(8 spots left)</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
