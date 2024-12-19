import * as React from "react";
import RoomCard from "../components/RoomCard";
import { roomData } from "../data/roomData";

export default function Rooms() {
  return (
    <main className="flex flex-col">
      <section className="self-start max-md:max-w-full" aria-label="Hero section">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e4404c0069919ec1ca0ad32eac8f2c161f2c06aa05b9800d2fc27f0d96ca59?placeholderIfAbsent=true&apiKey=69b090b19e3a45eaa7b94492d5c1e0b6"
              alt="Hotel exterior view"
              className="object-contain grow w-full aspect-[1.83] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <h1 className="px-12 py-24 mt-20 w-full text-6xl font-semibold text-center text-white bg-zinc-800 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              We have amazing rooms browse your favorite
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center self-end mt-24 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full" aria-label="Room selection">
        <div className="flex flex-col self-stretch px-20 pt-20 pb-48 bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
            <h2 className="text-4xl font-bold text-zinc-800 max-md:max-w-full">
              Choose The Best Place For Your Vacation
            </h2>
            <p className="mt-4 text-lg leading-8 text-center text-black w-[464px] max-md:max-w-full">
              We have prepared several hotels, villas and apartments to enjoy
              your vacation with your family.
            </p>
          </div>
        </div>

        <div className="z-10 mt-0 ml-4 w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {roomData.map((room) => (
              <RoomCard key={`bottom-${room.id}`} {...room} />
            ))}
          </div>
        </div>

        <nav className="flex gap-5 justify-between mt-16 mb-10 ml-4 max-w-full w-[140px] max-md:mt-10" aria-label="Room navigation">
          <button className="flex shrink-0 w-5 h-5 rounded-full bg-slate-900" aria-label="Page 1" />
          <button className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" aria-label="Page 2" />
          <button className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" aria-label="Page 3" />
        </nav>
      </section>
    </main>
  );
}