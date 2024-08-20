import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Faq() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">FAQ</h2>
          <p className="text-muted-foreground">
            Frequently Asked Questions about our programs.
          </p>
        </div>
        <div className="mt-12">
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  What is the difference between the full-time and part-time
                  programs?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  There is no real difference really, except your time
                  commitment.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  Is this a full-stack coding bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  Yeap, it is. We teach you the whole process. Frontend
                  Development, Design, Databases & Backend Development.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  How long are the programs?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  The full-time program is 12 weeks long, while the part-time
                  program is 24 weeks long.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  What kind of support do students receive?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  If you are stuck, just hit me up on our Discord and I will
                  attend to you within 10 minutes.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  Do I need to learn to code to join this bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  No, you do not. We cater to you.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  What are the admission requirements?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  I want to know the reason you want to learn to code.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  How will you help me after I graduate?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  If you want a job, I will pass you ready-made portfolio
                  templates, CV's and cover letters. I will also teach you how
                  to reach out to companies. I will be a pain in the ass to you,
                  as I will monitor your progress. Screw procastination!
                </p>
                <br />
                <p className="text-muted-foreground">
                  If you want to build an app, I will give you guidance on how
                  to do it, and how to structure your project. I will also give
                  you access on how to intergrate AI into your projects.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
