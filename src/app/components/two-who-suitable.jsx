export default function TwoWhoSuitable() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-12">
        {/* Centered text section */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter">
            Who is this for?
          </h2>
          <p className="text-xl font-bold uppercase text-blue-500 md:text-2xl">
            ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
          </p>
        </div>

        {/* Existing grid layout */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter">
                Your current situation
              </h2>
              <ul className="space-y-2 text-xl text-muted-foreground md:text-2xl ">
                <li>
                  - You have never learned to code OR you joined some online
                  do-yourself course only to get confused! (that was me haha)
                </li>
                <li>
                  - You have a steady job but you are bored of it... and want to
                  switch to a more exciting role.
                </li>
                <br />
                <li>
                  - You have alot of ideas but dont have the skills to code it
                  out.
                </li>
                <br />
                <br />
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter">
                What you want for your future
              </h2>
              <ul className="space-y-2 text-xl text-muted-foreground md:text-2xl">
                <li>- You want to get a job in tech as a coder/developer.</li>
                <br />
                <li>
                  - You want to understand and build various web apps (turn your
                  app idea into reality)
                </li>
                <br />
                <li>- You want to earn extra cash through freelance work.</li>
                <br />
                <li>
                  - You want to remotely (whilst sipping some Pina Coladas in
                  Thailand)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
