import { Button } from "@/components/ui/button";

export default function TwoGetFreeAccess() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16 mb-8">
        <div className="grid gap-6 px-4 md:grid-cols-2 md:gap-16 lg:px-0">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              GET 560 HOURS OF CODING MATERIAL FOR FREE
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground md:text-2xl">
                560+ hours of material
              </p>
              <p className="text-xl text-muted-foreground md:text-2xl">
                From complete beginner to building full-stack apps
              </p>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Actual projects (not just your normal build a to-do list)
              </p>
              <br />
              <p className="text-xl text-muted-foreground font-bold md:text-2xl mb-5">
                Click the button below, fill up a few questions and get your
                free access! We will email you your login credentials within a
                day.
              </p>
            </div>
            <a href="https://forms.gle/NAAPmqp9cFuiYNzQ7" target="_blank">
              <Button className="px-8 py-3 text-base hover:bg-blue-900">
                GET 560 HOURS CODING MATERIAL FOR FREE
              </Button>
            </a>
            <p className="text-lg font-bold text-red-600 mt-4">
              GET IT NOW BEFORE ITS TOO LATE. ONLY AVAILABLE FOR THE NEXT 50
              STUDENTS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
