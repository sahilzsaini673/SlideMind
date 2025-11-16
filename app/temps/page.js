// components/Sidebar.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold">Sidebar Menu</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="block text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-500">About</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-500">Services</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
