import React, { useState, useEffect } from "react";
import { fetchPhong, createPhong, editPhong } from '../data/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import editForm from '../admin/editForm'
import { useNavigate } from 'react-router-dom';

const AdminHotelPage = () => {
  const [phongs, setPhong] = useState([]);
  useEffect(() => {
    fetchPhong().then(setPhong);
  }, []);
  const navigate = useNavigate();

  const Card = ({ maphong, loaiphong, tinhtrang, giaphong, sophong, onDelete }) => {
    return (
      <tr>
        <td className="px-4 py-2">{maphong}</td>
        <td className="px-4 py-2">{loaiphong}</td>
        <td className="px-4 py-2">{tinhtrang}</td>
        <td className="px-4 py-2">${giaphong}</td>
        <td className="px-4 py-2">{sophong}</td>
        <td className="px-4 py-2">
          <button className="text-blue-500 hover:underline mr-2"
                    onClick={() => navigate(`/edit/${maphong}`)}>
          Edit</button>
          <button
            className="text-red-500 hover:underline"
            onClick={() => onDelete(maphong)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  const [loaiphong, setLoaiphong] = useState('');
  const [tinhtrang, setTinhtrang] = useState('');
  const [maphong, setMaphong] = useState('');
  const [giaphong, setGiaphong] = useState('');
  const [sophong, setSophong] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhong = {
        loaiphong,
        tinhtrang,
        maphong,
        giaphong,
        sophong
    };

    try {
        await createPhong(newPhong);
        alert('Room added successfully');
        // Optionally, fetch updated room list
        setPhong(await fetchPhong());
    } catch (err) {
        alert('Error adding room. Please try again.');
    }
};


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Manage Hotel Rooms</h1>

      {/* Form for Adding New Room */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-medium mb-4">Add New Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="loaiphong" className="block text-sm font-medium text-gray-700">Room Type</label>
              <input
                type="text"
                id="loaiphong"
                value={loaiphong}
                onChange={(e) => setLoaiphong(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Enter Room Type"
                required
              />
            </div>
            <div>
              <label htmlFor="tinhtrang" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="tinhtrang"
                value={tinhtrang}
                onChange={(e) => setTinhtrang(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Choose status</option>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
              </select>
            </div>
            <div>
              <label htmlFor="maphong" className="block text-sm font-medium text-gray-700">Room Code</label>
              <input
                type="text"
                id="maphong"
                value={maphong}
                onChange={(e) => setMaphong(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Room Code"
                required
              />
            </div>
            <div>
              <label htmlFor="giaphong" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                id="giaphong"
                value={giaphong}
                onChange={(e) => setGiaphong(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label htmlFor="sophong" className="block text-sm font-medium text-gray-700">Room Number</label>
              <input
                type="text"
                id="sophong"
                value={sophong}
                onChange={(e) => setSophong(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Room Number"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Room
          </button>
        </form>
      </div>

      {/* List of Rooms */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-medium mb-4">Room List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Room Code</th>
              <th className="px-4 py-2 text-left">Room Type</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Room Number</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {phongs.map((room) => (
              <Card key={room.maphong} {...room} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHotelPage;
