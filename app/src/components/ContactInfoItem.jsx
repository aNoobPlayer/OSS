export function ContactInfoItem({ icon, text, alt }) {
    return (
      <div className="flex gap-9 mt-8 first:mt-16 max-sm:mx-auto">
        <img
          loading="lazy"
          src={icon}
          alt={alt}
          className="object-contain shrink-0 rounded-none aspect-square w-[66px]"
        />
        <div className="my-auto basis-auto">{text}</div>
      </div>
    );
  }