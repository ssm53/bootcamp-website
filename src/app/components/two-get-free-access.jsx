import { Button } from "@/components/ui/button";

export default function TwoGetFreeAccess() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16 mb-8">
        <div className="grid gap-6 px-4 md:grid-cols-2 md:gap-16 lg:px-0">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              GET FULL BOOTCAMP MATERIAL ACCESS FOR FREE
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground md:text-2xl">
                600+ hours of material
              </p>
              <p className="text-xl text-muted-foreground md:text-2xl">
                From complete beginner to building full-stack apps
              </p>
              <p className="text-xl text-muted-foreground md:text-2xl">
                7 actual projects (not just your normal build a to-do list)
              </p>
            </div>
            <Button className="px-8 py-3 text-base hover:bg-blue-900">
              GET FREE ACCESS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
