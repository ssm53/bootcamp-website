export default function TwoFooter() {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-6 flex justify-between items-center">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter">
        <span className="text-blue-500">Hey</span>
        <span className="text-white">Learn</span>
        <span className="text-blue-500">2</span>
        <span className="text-white">Code</span>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="mailto:shaun@heylearn2code.com"
          className="hover:text-blue-500"
        >
          shaun@heylearn2code.com
        </a>
        <a href="https://wa.me/+60123397028" className="hover:text-blue-500">
          +6 012 339 7028
        </a>
      </div>
    </footer>
  );
}
