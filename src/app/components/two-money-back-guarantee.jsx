/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
export default function TwoMoneyBackGuarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter text-gray-200">
            Our 100% Money-Back Guarantee
          </h2>
          <p className="font-bold md:text-xl text-gray-200">
            We win only if you win
          </p>
        </div>
        <div>
          <p className="md:text-xl text-gray-200">
            We believe in our program so strongly that we're offering an
            incredible money-back guarantee.
          </p>
          <br />
          <p className="text-gray-200 md:text-xl">
            To qualify, you'll need to meet the following criteria:
          </p>
          <br />
          <p className="text-gray-200 md:text-xl">
            Successfully graduate from our bootcamp and receive your
            certificate.
          </p>
          <p className="text-gray-200 md:text-xl">
            Be of legal working age and hold the necessary rights to work in
            your country.
          </p>
          <p className="text-gray-200 md:text-xl">
            Actively pursue job opportunities and complete the tasks set by our
            career support team.
          </p>
          <br />
          <p className="text-gray-200 md:text-xl">
            If you meet these requirements and still don't land a job in tech,
            we'll refund you in full!
          </p>
          <br />
          <p className="text-gray-200 md:text-xl">
            It's completely risk-free for you.
          </p>
          <br />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" />
        <div className="flex items-center justify-center">
          <a href="https://forms.gle/Kyz6t3iFxqzPNWYm8" target="_blank">
            <Button
              variant="outline"
              className="hover:bg-blue-900 hover:text-white px-8 py-3 text-base"
            >
              APPLY NOW
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
