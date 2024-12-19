export function ContactForm() {
    return (
      <form className="flex flex-col w-full text-sm font-medium text-neutral-300 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <div className="grow">
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-7 py-5 bg-white rounded-lg shadow-[0px_4px_35px_rgba(235,235,235,0.25)]"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="grow">
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-7 py-5 bg-white rounded-lg shadow-[0px_4px_35px_rgba(235,235,235,0.25)]"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="mt-11">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            className="w-full px-7 py-5 bg-white rounded-lg shadow-[0px_4px_35px_rgba(235,235,235,0.25)]"
            placeholder="Your email address"
            aria-label="Your email address"
          />
        </div>
        <div className="mt-11">
          <label htmlFor="subject" className="sr-only">Message subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-7 py-5 bg-white rounded-lg shadow-[0px_4px_35px_rgba(235,235,235,0.25)]"
            placeholder="Your message subject"
            aria-label="Your message subject"
          />
        </div>
        <div className="mt-11">
          <label htmlFor="message" className="sr-only">Message description</label>
          <textarea
            id="message"
            className="w-full px-7 pt-8 pb-40 bg-white rounded-lg shadow-[0px_4px_35px_rgba(235,235,235,0.25)]"
            placeholder="Your message description"
            aria-label="Your message description"
          />
        </div>
        <button
          type="submit"
          className="self-start px-8 py-3.5 mt-11 mb-10 text-base font-semibold text-center text-white bg-red-400 rounded-xl max-md:px-5 max-md:mt-10 max-sm:self-center max-sm:mb-10"
        >
          Send Message
        </button>
      </form>
    );
  }