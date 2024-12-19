import '../index.css'; 
import RoomCard from '../components/RoomCard';
import TestimonialCard from '../components/TestimonialCard';
import { useEffect,useState } from 'react';
import { testimonialData } from '../data/testimonialData';
import Background from '../pic/background.jpg';
import { roomData } from '../data/roomData.js';
// import Form  from '../FormThue';
export default function Index() {
  const [phongs, setPhong] = useState([]);
  // useEffect(() => {
  //   fetchPhong().then(setPhong);
  // }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhong(await fetchPhong());
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(prevState => !prevState);

  return (
        <div>
    <section id="hero" className="relative h-[884px] bg-cover bg-center" style={{backgroundImage: "url(" + Background + ")"}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-0 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Experience Luxury at Kijiji Beach</h1>
            <p className="text-xl mb-8">Discover paradise on Earth with our world-class accommodations and services.</p>
            <button className="px-8 py-4 bg-red-400 text-white rounded-xl hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={openModal}>
              Book Your Stay
            </button>
            {/* <Form isOpen={isModalOpen} onClose={openModal}/> */}
          </div>
        </div>
      </section>

      <section id="rooms" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-zinc-800 mb-4">
            Choose The Best Place For Your Vacation
          </h2>
          <p className="text-lg text-center text-zinc-600 mb-16 max-w-2xl mx-auto">
            We have prepared several hotels, villas and apartments to enjoy
            your vacation with your family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomData.map(room => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-zinc-800 mb-16">
            Our Customer Said
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialData.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-red-400 font-medium hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded-md px-4 py-2">
              View all reviews
            </button>
          </div>
        </div>
      </section>

      <section id="cta" className="relative py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/d0739da255984f2fcc0b742c9b108da1078b164ef0f8064f7cc2d4f9338e842b?placeholderIfAbsent=true&apiKey=69b090b19e3a45eaa7b94492d5c1e0b6)'}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-0 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Do you want to rent out the hotel?
            </h2>
            <p className="text-lg mb-8">
              We prepare the best choice of places with high quality that is
              guaranteed by the hotel assessment agency.
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={openModal}>
              Book now
            </button>
            {/* <Form isOpen={isModalOpen} onClose={openModal}/> */}
          </div>
        </div>
      </section> </div>
      );
}