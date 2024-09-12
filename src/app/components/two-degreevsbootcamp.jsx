export default function TwoDegreeVsBootcamp() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">
            Why it makes sense to join us...
          </h2>
        </div>
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8"></th>
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8">
                    Degree/ Master's
                  </th>
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8 font-bold text-blue-600">
                    Our bootcamp
                  </th>
                  <th className="px-4 py-3 text-left md:px-6 lg:px-8">
                    Other bootcamps
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Total Cost
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    USD 80,000-150,000
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold text-blue-600">
                    USD 500
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    USD 3,000-2,000K
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Total Cost if you dont get a job
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">USD 80-150K</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold text-blue-600">
                    USD 0
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">USD 3-20K</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Time Commitment (Full-time)
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">1-2 years</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold text-blue-600">
                    4 months
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">3 - 6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Time Commitment (Part-time)
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">3-4 years</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold text-blue-600">
                    7-8 months
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">7-9 months</td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Number of Students per cohort
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">100+</td>
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold text-blue-600">
                    Max of 8
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">15-40</td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Practical Skills
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <XIcon className="w-5 h-5 text-red-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Career Prep
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <XIcon className="w-5 h-5 text-red-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 md:px-6 lg:px-8 font-bold">
                    Real-life Project for a real business
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <XIcon className="w-5 h-5 text-red-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-4 py-3 md:px-6 lg:px-8">
                    <XIcon className="w-5 h-5 text-red-500" />
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
