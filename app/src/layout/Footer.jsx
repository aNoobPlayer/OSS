export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (

<footer className="flex flex-wrap items-end w-full bottom-0 left-0">
  <div className="flex grow shrink-0 bg-red-400 h-[62px] max-md:mt-10"></div>

  <div className="flex overflow-hidden flex-col self-stretch bg-slate-100 w-full">
    <div className="h-px border border-solid bg-zinc-300 border-zinc-300"></div>
    <div className="flex flex-col pt-11 w-full bg-white">
      <div className="flex flex-col ml-36 w-[743px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-normal text-zinc-800">Kijiji Beach</h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Southeast Asia's travel unicorn start-up, Traveloka, is a leading travel and lifestyle booking platform.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-bold text-zinc-800">Links</h3>
            <nav className="flex flex-col space-y-3 text-sm text-stone-500">
              <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-red-400 transition-colors">Services</a>
              <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-red-400 transition-colors">About us</a>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-bold text-zinc-800">About</h3>
            <nav className="flex flex-col space-y-3 text-sm text-stone-500">
              <a href="#partners" className="hover:text-red-400 transition-colors">Partners</a>
              <a href="#careers" className="hover:text-red-400 transition-colors">Careers</a>
              <a href="#press" className="hover:text-red-400 transition-colors">Press</a>
              <a href="#community" className="hover:text-red-400 transition-colors">Community</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-14 h-px border-t border-neutral-400 opacity-20"></div>
    </div>

    <div className="flex flex-row flex-wrap gap-5 justify-between px-14 py-5 w-full text-sm leading-none text-white bg-red-400">
      <div>
        © <span id="year"></span> Kijiji Beach All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="#facebook" aria-label="Visit our Facebook page">
          <img loading="lazy" src="http://b.io/social-fb" alt="" className="w-6 h-6 hover:opacity-80 transition-opacity" />
        </a>
        <a href="#twitter" aria-label="Visit our Twitter page">
          <img loading="lazy" src="http://b.io/social-twitter" alt="" className="w-6 h-6 hover:opacity-80 transition-opacity" />
        </a>
        <a href="#instagram" aria-label="Visit our Instagram page">
          <img loading="lazy" src="http://b.io/social-instagram" alt="" className="w-6 h-6 hover:opacity-80 transition-opacity" />
        </a>
      </div>
    </div>
  </div>

  <div className="flex grow shrink-0 bg-red-400 h-[62px] max-md:mt-10"></div>
</footer>

    );
}