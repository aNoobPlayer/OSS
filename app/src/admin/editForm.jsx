import React, { useState, useEffect } from "react";

const EditForm = () => {
  const [rooms, setRooms] = useState([]);
  const [editRoom, setEditRoom] = useState(null);

  // Fetch rooms from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/phongs")
      .then((response) => response.json())
      .then((data) => setRooms(data));
  }, []);

  // Handle update form submission
  const handleUpdateRoom = (e) => {
    e.preventDefault();

    const updatedRoom = {
      loaip: editRoom.loaiphong,
      tinhtrang: editRoom.tinhtrang,
      giap: parseFloat(editRoom.giaphong),
      sop: editRoom.sophong,
    };

    fetch(`http://localhost:5000/api/phongs/${editRoom.maphong}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRoom),
    })
      .then((response) => response.json())
      .then((updatedRoom) => {
        setRooms(
          rooms.map((room) =>
            room.maphong === updatedRoom.maphong ? updatedRoom : room
          )
        );
        setEditRoom(null);  // Clear the form after successful update
      })
      .catch((error) => console.error("Error updating room:", error));
  };

  // Handle input changes for editing a room
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRoom({
      ...editRoom,
      [name]: value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Manage Hotel Rooms</h1>

      {/* Edit Room Form */}
      {editRoom && (
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-xl font-medium mb-4">Edit Room</h2>
          <form onSubmit={handleUpdateRoom}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="loaip" className="block text-sm font-medium text-gray-700">Room Type</label>
                <input
                  type="text"
                  id="loaip"
                  name="loaiphong"
                  value={editRoom.loaiphong} 
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                  placeholder="Enter Room Type"
                  required
                />
              </div>
              <div>
                <label htmlFor="tinhtrang" className="block text-sm font-medium text-gray-700">Status</label>
                <input
                  type="text"
                  id="tinhtrang"
                  name="tinhtrang"
                  value={editRoom.tinhtrang}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                  placeholder="Available / Occupied"
                  required
                />
              </div>
              <div>
                <label htmlFor="giaphong" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  id="giaphong"
                  name="giaphong"
                  value={editRoom.giaphong}
                  onChange={handleInputChange}
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
                  name="sophong"
                  value={editRoom.sophong}
                  onChange={handleInputChange}
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
              Update Room
            </button>
          </form>
        </div>
      )}

      {/* Room List */}
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
            {rooms.map((room) => (
              <tr key={room.maphong}>
                <td className="px-4 py-2">{room.maphong}</td>
                <td className="px-4 py-2">{room.loaiphong}</td>
                <td className="px-4 py-2">{room.tinhtrang}</td>
                <td className="px-4 py-2">${room.giaphong}</td>
                <td className="px-4 py-2">{room.sophong}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => setEditRoom(room)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditForm;
