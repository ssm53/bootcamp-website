export default function FulltimeParttimeTable() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">
            Full-Time vs Part-Time Curriculum
          </h2>
          <p className="text-muted-foreground">
            Compare the differences for our full-time and part-time options
          </p>
        </div>
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8"></th>
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8">
                    Full-Time
                  </th>
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8">
                    Part-Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">Duration</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">3-4 months</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">6-8 months</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    Access to All Coding Projects
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">Cost</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">1.5 KUSD</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">2K USD</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">Career Coaching</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">Career Prep</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    Real-life Project for Business
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    Build capstone projects (e-commerce marketplace)
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    Build AI projects
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
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

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
