import React, { useState,useEffect } from "react";
import './index.css';
import './output.css';
import { createKhachhang, fetchPhong } from "./data/api";

export default function Form({ isOpen, onClose }) {
  const currentDate = new Date();
  const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
  
  const [newPhieuthue, setNewPhieuthue] = useState({
    tenkh: '',
    yeucau: '',
    socccd: '',
    sotiendt: 0,
    ngaylap: formattedDate,
    maphong: '',
    ngaybd: '',
    ngaykt: '',
    song: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPhieuthue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const [phongs,setPhong]=useState([]);
  useEffect(() => {
    fetchPhong().then(setPhong);
  }, []);

  if (!isOpen) return null;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await createKhachhang(newPhieuthue);  // Assuming this is your function that sends data to the server
      setNewPhieuthue({
        tenkh: '',
        yeucau: '',
        socccd: '',
        sotiendt: 0,
        ngaylap: formattedDate,
        maphong: '',
        ngaybd: '',
        ngaykt: '',
        song: ''
      });
      alert("Booking successful!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error occurred while booking. Please try again.");
    }
  };

  // Close overlay when clicked outside of the modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div className="bg-white mt-28 p-4 rounded-lg shadow-lg w-full max-w-sm max-h-[80vh] overflow-y-auto">
        <h1 className="text-xl font-bold mb-4 text-black">Hotel Room Booking</h1>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <label htmlFor="tenkh" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="tenkh"
            name="tenkh"
            value={newPhieuthue.tenkh}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          />

          {/* ID */}
          <label htmlFor="socccd" className="block text-sm font-medium mb-2">
            ID
          </label>
          <input
            type="text"
            id="socccd"
            name="socccd"
            value={newPhieuthue.socccd}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          />

          {/* Check-In Date */}
          <label htmlFor="ngaybd" className="block text-sm font-medium mb-2">
            Check-In Date
          </label>
          <input
            type="date"
            id="ngaybd"
            name="ngaybd"
            value={newPhieuthue.ngaybd}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          />

          {/* Check-Out Date */}
          <label htmlFor="ngaykt" className="block text-sm font-medium mb-2">
            Check-Out Date
          </label>
          <input
            type="date"
            id="ngaykt"
            name="ngaykt"
            value={newPhieuthue.ngaykt}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          />

          {/* Room Type */}
          <label htmlFor="maphong" className="block text-sm font-medium mb-2">
            Room Type
          </label>
          <select
            id="maphong"
            name="maphong"
            value={newPhieuthue.maphong}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          >
            <option value="">Select a room type</option>
            {phongs.map(phong  => (
              <option key={phong.maphong} value={phong.maphong }>
                {phong.loaiphong}
              </option>
            ))}
          </select>

          {/* Number of Guests */}
          <label htmlFor="song" className="block text-sm font-medium mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            id="song"
            name="song"
            value={newPhieuthue.song}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            required
          />

          {/* Special Requests */}
          <label htmlFor="yeucau" className="block text-sm font-medium mb-2">
            Special Requests
          </label>
          <textarea
            id="yeucau"
            name="yeucau"
            value={newPhieuthue.yeucau}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
            placeholder="Enter any special requests"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};
