import { Button } from "@/components/ui/button";

export default function TwoPricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center">
          {" "}
          {/* Added text-center here */}
          <div className="mt-6 space-y-4 text-center md:mt-8 md:space-y-6">
            <h2 className="text-5xl font-bold tracking-tighter">Pricing</h2>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Afforable pricing for all!
            </p>
          </div>
          <div className="mt-8 rounded-lg border bg-background p-8 shadow-lg md:mt-10 md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col text-center">
                {" "}
                {/* Added text-center here */}
                <p className="mt-2 text-lg text-muted-foreground">
                  Regular Price
                </p>
                <h3 className="text-3xl font-bold line-through">$6,000</h3>
                <h3 className="text-4xl font-bold">$900</h3>
              </div>
              <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                OG Discount
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              {" "}
              {/* Centered Button */}
              <Button className="hover:bg-blue-900" size="lg">
                APPLY NOW
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              {" "}
              {/* Centered text */}
              Save $5,100 with the OG Discount
            </p>
          </div>
        </div>
        <div className="space-y-8 lg:space-y-10" />
      </div>
    </section>
  );
}
