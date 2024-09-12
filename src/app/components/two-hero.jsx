// import { Button } from "@/components/ui/button";

// export default function TwoHero() {
//   return (
//     <section className="w-full pt-24 md:pt-24 lg:pt-32 xl:py-48">
//       <div className="container space-y-10 xl:space-y-16">
//         <div className="grid gap-6 px-4 md:grid-cols-2 md:gap-16 lg:px-0">
//           <div className="space-y-4">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
//               <span className="text-blue-500">Hey</span>Learn
//               <span className="text-blue-500">2</span>Code's Full-Stack Coding
//               Bootcamp
//             </h1>

//             <p className="text-xl text-muted-foreground md:text-2xl">
//               Become a Full-Stack Developer in 3 Months and get a developer job.
//               If not, it is 100% FREE.
//             </p>
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
//               <CheckIcon className="h-5 w-5" />
//               <span>Get a developer job or it is 100% free</span>
//             </div>
//             <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
//               <CheckIcon className="h-5 w-5" />
//               <span>Full-time/part-time options available</span>
//             </div>
//             <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
//               <CheckIcon className="h-5 w-5" />
//               <span>Remote/on-site options available</span>
//             </div>
//             <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
//               <CheckIcon className="h-5 w-5" />
//               <span>Proper career support after graduation</span>
//             </div>
//             <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
//               <CheckIcon className="h-5 w-5" />
//               <span>
//                 Build and UNDERSTAND projects that will impress people
//               </span>
//             </div>
//             <div className="flex gap-2">
//               <a href="https://forms.gle/Kyz6t3iFxqzPNWYm8" target="_blank">
//                 <Button
//                   variant="outline"
//                   className="hover:bg-blue-900 hover:text-white px-8 py-3 text-base"
//                 >
//                   APPLY NOW
//                 </Button>
//               </a>

//               <a href="https://forms.gle/NAAPmqp9cFuiYNzQ7" target="_blank">
//                 <Button className="hover:bg-blue-900 px-8 py-3 text-base">
//                   GET FREE ACCESS
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   );
// }

import { Button } from "@/components/ui/button";

export default function TwoHero() {
  return (
    <section className="w-full pt-24 md:pt-24 lg:pt-32 xl:py-48">
      <div className="container space-y-10 xl:space-y-16 text-center md:text-left">
        <div className="grid gap-6 px-4 md:grid-cols-2 md:gap-16 lg:px-0 justify-center">
          <div className="space-y-4">
            {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-blue-500">Hey</span>Learn
              <span className="text-blue-500">2</span>Code's Full-Stack Coding
              Bootcamp
            </h1> */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-blue-500">Hey</span>Learn
              <span className="text-blue-500">2</span>Code's Remote
              Full&nbsp;Stack Coding Bootcamp
            </h1>

            <p className="text-xl text-muted-foreground md:text-2xl">
              Become a Full-Stack Developer in 4 Months and get a developer job.
              If not, it is 100% FREE.
            </p>
            <p className="text-lg font-bold uppercase text-blue-500 md:text-xl">
              FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            {/* <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
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
              <span>Build projects that impress recruiters</span>
            </div> */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Get a developer job or it is 100% free</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Only 8 students per cohort</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Full-time/part-time options available</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Build projects that impress recruiters</span>
              </div>
              {/* <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Get help when stuck</span>
              </div> */}
              <div className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground w-full max-w-[400px]">
                <CheckIcon className="h-5 w-5" />
                <span>Proper career support after graduation</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="https://forms.gle/Kyz6t3iFxqzPNWYm8" target="_blank">
                <Button
                  variant="outline"
                  className="hover:bg-blue-900 hover:text-white px-8 py-3 text-base"
                >
                  APPLY NOW
                </Button>
              </a>

              <a href="https://forms.gle/NAAPmqp9cFuiYNzQ7" target="_blank">
                <Button className="hover:bg-blue-900 px-8 py-3 text-base">
                  GET FREE ACCESS
                </Button>
              </a>
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
