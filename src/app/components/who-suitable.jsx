export default function WhoSuitable() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tighter">
              Who is this for?
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Between the age of 15-35</li>
              <br />
              <li>Want to build apps for their ideas</li>
              <br />
              <li>Want to get a job in tech</li>
              <br />
              <li>Want to pick up a side hustle</li>
              <br />
              <li>Motivated</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tighter">
              Who is this not for?
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>People unwilling to put in the hard work and dedication</li>
              <br />
              <li>
                Looking for a secret sauce that magically gives you the ability
                to code
              </li>
              <br />
              <li>
                If you dont like steak, we cant be friends (haha just kidding)
                ha ha very funny Shaun
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
