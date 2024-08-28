// export default function WhoSuitable() {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
//       <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12">
//         <div className="space-y-6">
//           <div className="space-y-4">
//             <h2 className="text-5xl font-bold tracking-tighter">
//               Who is this for?
//             </h2>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>
//                 Want to understand and build cool apps from scratch. No more
//                 just ideas!
//               </li>
//               <br />
//               <li>Want to get a job in tech</li>
//               <br />
//               <li>Want to pick up a side hustle</li>
//               <br />
//               <li>Motivated</li>
//             </ul>
//           </div>
//         </div>
//         <div className="space-y-6">
//           <div className="space-y-4">
//             <h2 className="text-5xl font-bold tracking-tighter">
//               Who is this not for?
//             </h2>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>People unwilling to put in the hard work and dedication</li>
//               <br />
//               <li>
//                 Looking for a secret sauce that magically gives you the ability
//                 to code
//               </li>
//               <br />
//               <li>
//                 If you dont like steak, we cant be friends (haha just kidding)
//                 ha ha very funny Shaun
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function WhoSuitable() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        {/* Centered text section */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            Who is this for?
          </h2>
        </div>

        {/* Existing grid layout */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter">
                Your current situation
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  You are unemployed or have a steady job but you are bored of
                  it... or you dont see a future in it!
                </li>
                <br />
                <li>
                  You are an entrepreneur sick of paying developers alot of
                  money to create your app
                </li>
                <br />
                <li>
                  You have never learned to code OR you joined some online
                  course only to get confused! haha that was me
                </li>
                <br />
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter">
                What you want for your future
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>You want to get a job in tech as a coder/developer.</li>
                <br />
                <li>
                  You want to understand build various web apps (turn your app
                  idea into reality)
                </li>
                <br />
                <li>
                  You want to be a remote freelance developer and work whilst
                  sipping some Pina Coladas in Thailand!
                </li>
                <br />
                <li>You want to FINALLY learn and understand code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
