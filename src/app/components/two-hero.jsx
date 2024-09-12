import { Button } from "@/components/ui/button";

export default function TwoHero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-6 px-4 md:grid-cols-2 md:gap-16 lg:px-0">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-blue-500">Hey</span>Learn
              <span className="text-blue-500">2</span>Code's Full-Stack Coding
              Bootcamp
            </h1>

            <p className="text-xl text-muted-foreground md:text-2xl">
              Become a Full-Stack Developer in 3 Months and get a developer job.
              If not, it is 100% FREE.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
              <CheckIcon className="h-5 w-5" />
              <span>Get a developer job or it is 100% free</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
              <CheckIcon className="h-5 w-5" />
              <span>Full-time/part-time options available</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
              <CheckIcon className="h-5 w-5" />
              <span>Remote/on-site options available</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
              <CheckIcon className="h-5 w-5" />
              <span>Proper career support after graduation</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
              <CheckIcon className="h-5 w-5" />
              <span>
                Build and UNDERSTAND projects that will impress people
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="hover:bg-blue-900 hover:text-white px-8 py-3 text-base"
              >
                APPLY NOW
              </Button>
              <Button className="hover:bg-blue-900 px-8 py-3 text-base">
                GET FREE ACCESS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
