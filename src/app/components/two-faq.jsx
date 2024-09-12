import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function TwoFaq() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
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
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  Is this a full-stack coding bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  Yes, it is. We teach you frontend programming, backend
                  programming and a little bit of design.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md">
                <h3 className="text-lg font-medium">
                  Do I need to know how to code to join this bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  NO, you do not! Complete beginners or novice (did a few online
                  course on Udemy) are more than welcome!
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  What are your admission requirements?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  You need to have a laptop and a real motivation to learn.
                  Complete beginners are welcome to join!
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  Is this full-time or part-time?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  There are full-time and part-time options.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  Is this remote or on-site?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  There are remote and on-site (Kuala Lumpur, Malaysia) options
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  Im not really good at numbers. Am I suitable to learn to code?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  You might be surprised... you dont actually need much math.
                  You need logic and motivation.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  How much is the full-stack coding bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  For a limited time only, for our OG's, it is USD 500.
                  Normally, it will be USD 5,000.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  What can I do after the bootcamp?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  You can find a job in tech, build a startup, freelance or
                  apply code to your current job function.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  How long does the bootcamp run for?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  Full-time (3 - 4 months) and Part-time (6-8 months)
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  If I enroll as a full-time student, can I change it to
                  part-time? And vice versa.
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  Yes, of course. Just let us know that you want to change.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left bg-muted rounded-md hover:bg-black hover:text-gray-200">
                <h3 className="text-lg font-medium">
                  What is the difference between part-time and full-time?
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
                  How can I get help if I am stuck?
                </h3>
                <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3">
                <p className="text-muted-foreground">
                  If you are stuck, just hit me up and I will attend to you
                  within 10 minutes. This is not like your Udemy course.
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
