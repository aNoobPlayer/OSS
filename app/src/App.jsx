import { useState } from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import Index from './pages/Index';
import AdminHotelPage from './admin/adminForm';
import EditForm from './admin/editForm'; 
import './index.css'; // Adjust the path if necessary
import './output.css'; // Adjust the path if necessary
import { Route, Routes,BrowserRouter } from 'react-router-dom';
export default function App() {

  return (
    <BrowserRouter> 
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
       
      
      <main className="flex-grow">
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Rooms" element={<Rooms />} />     
      <Route path="/Facilities" element={<Facilities />} />
      <Route path="/Contact" element={<Contact />} />       
      </Routes>
        
      </main>

      <Footer />
    </div>
    </BrowserRouter>
  );
}