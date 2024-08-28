export default function InANutshell() {
  return (
    <div className="bg-[#f0e6d6] rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold">In a Nutshell</h2>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">What Makes Our Bootcamp Special</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <p className="text-muted-foreground">
              You get personalised help when you're stuck (we only accept 6
              students per cohort)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <p className="text-muted-foreground">
              Build an actual product for an actual business... and get paid!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <p className="text-muted-foreground">
              Hop on the AI train, and build AI products
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <p className="text-muted-foreground">
              If you dont get a job, this will be 100% free.
            </p>
          </div>
        </div>
      </div>
    </div>
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
