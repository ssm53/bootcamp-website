/* eslint-disable react/no-unescaped-entities */
"use client";
export default function SellingPoints() {
  // more info aboout bootcamp
  // affordable pricing - USD 1.5K (show me a bootcamp with a better price)
  // only 6 students per cohort
  // instant help - this is not your udemy or online course you find online. you will get help in less than 5 mins.
  // 700+ hours of material
  // build a product for a real-life company... and GET PAID!
  // learn to code with AI
  // career supprt after bootcamp
  // 90% doing. 10% theory. Build 10 projects!
  // Bonus1: you will learn langchain...used to build AI products!
  // Bonus2: we will teach you to make websites in less than 20 minutes!
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d6]">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            This is not like other bootcamps...
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Here's why our bootcamp stands out from the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <WalletIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Affordable Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Show me a bootcamp with better pricing, and I will jump off
                Mount Everest
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              {/* <BriefcaseIcon className="w-6 h-6" /> */}
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Personalised Support</h3>
              <p className="text-muted-foreground text-sm">
                Only accepts 6 students per cohort
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              {/* <LaptopIcon className="w-6 h-6" /> */}
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Instant Help</h3>
              <p className="text-muted-foreground text-sm">
                You will get stuck while learning. I will help you within 10
                mins of you asking for help. This is not a udemy course..
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <LightbulbIcon className="w-6 h-6" />
              {/* <FlameIcon className="w-6 h-6" /> */}
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">
                Build a tech product for a real business...
              </h3>
              <p className="text-muted-foreground text-sm">
                and get paid! We connect you with businesses for you to get your
                first client.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <SettingsIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Learn to code with AI</h3>
              <p className="text-muted-foreground text-sm">
                AI is cool and helpful. I'll teach you how to properly utilise
                it.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <RocketIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Career Support</h3>
              <p className="text-muted-foreground text-sm">
                After you've graduated, we have portfolio templates, resume
                templates, cover letter templates and email templates. Whatever
                your goal is, we will be helping(and pushing) you to do it.
                Screw procastination!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <LightbulbIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">10% theory 90% doing</h3>
              <p className="text-muted-foreground text-sm">
                You will build 10 projects!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <FlameIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">700+ hours of material</h3>
              <p className="text-muted-foreground text-sm">
                If you follow this, you are gonna be a developer.. for sure
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <TrophyIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Bonus 1</h3>
              <p className="text-muted-foreground text-sm">
                You will learn Langchain... a language used to build AI tech
                products
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-muted rounded-full p-3 flex items-center justify-center">
              <TrophyIcon className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold">Bonus 2</h3>
              <p className="text-muted-foreground text-sm">
                We teach you to build beautiful websites in less than 20 mins.
                You can sell this to businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CompassIcon(props) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function FlameIcon(props) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function LaptopIcon(props) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
