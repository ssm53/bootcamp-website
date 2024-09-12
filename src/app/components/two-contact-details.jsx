import { FaWhatsapp } from "react-icons/fa";
export default function TwoContactDetails() {
  return (
    <div className="bg-black rounded-lg p-4 flex items-center justify-center">
      <div>
        <h2 className="text-5xl font-bold tracking-tighter text-gray-200 mb-10">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center gap-2">
            <a
              href="mailto:shaun@heylearn2code.com"
              className="flex items-center gap-2"
            >
              <MailIcon className="w-5 h-5 text-xl md:text-2xl text-gray-200" />
              <p className="text-xl text-muted-foreground md:text-2xl text-gray-200">
                shaun@heylearn2code.com
              </p>
            </a>
          </div>
          <a
            href="https://wa.me/+60123397028"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5 text-xl md:text-2xl text-gray-200" />
            <p className="text-xl text-muted-foreground md:text-2xl text-gray-200">
              +6 012 339 7028
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
