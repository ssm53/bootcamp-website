export default function Timeline() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">
            Coding Bootcamp Timeline (Full-Time)
          </h2>
          <p className="text-muted-foreground">
            Follow the journey from fundamentals to frontend to backend.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                Weeks 1-3: Fundamentals
              </h2>
              <p className="text-muted-foreground">
                Dive into the basics of programming, including data types,
                control structures, and problem-solving. Lay a strong foundation
                for your coding journey.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                Weeks 4-8: Frontend
              </h2>
              <p className="text-muted-foreground">
                Explore the world of frontend development, mastering HTML, CSS,
                and JavaScript. Build dynamic user interfaces using popular
                frameworks like Svelte.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                Weeks 9-12: Backend
              </h2>
              <p className="text-muted-foreground">
                Dive into backend development with Node.js. Learn how to build
                scalable and efficient server-side applications, work with APIs,
                databases, and deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
