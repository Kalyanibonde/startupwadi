import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, HeartHandshake } from 'lucide-react';

const GetInvolved = () => {
  const [hovered, setHovered] = useState('');

  const handleMouseEnter = (involvement) => {
    setHovered(involvement);
  };

  const handleMouseLeave = () => {
    setHovered('');
  };

  const involvementOptions = [
    { title: 'Volunteer', description: 'Join our volunteer team to help animals in need.', icon: <Users size={40} className="mb-4 text-blue-400" /> },
    { title: 'Partner with Us', description: 'Collaborate with us for campaigns and events.', icon: <HeartHandshake size={40} className="mb-4 text-pink-400" /> },
    { title: 'Donate', description: 'Support us with your generous contributions.', icon: <Lightbulb size={40} className="mb-4 text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-center text-blue-200 drop-shadow-xl"
        >
          Get Involved
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl mb-12 text-center text-gray-200"
        >
          Join us in making a difference! Whether you want to volunteer, partner, or donate, your support helps us achieve our mission.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-tr from-blue-700 to-blue-500 p-6 rounded-2xl shadow-md transition-all backdrop-blur-sm cursor-pointer transform ${hovered === option.title ? 'ring-4 ring-blue-400 scale-105 shadow-xl' : 'hover:scale-105 hover:shadow-xl'}`}
              onMouseEnter={() => handleMouseEnter(option.title)}
              onMouseLeave={handleMouseLeave}
            >
              {option.icon}
              <h2 className="text-2xl font-bold mb-4 text-white">{option.title}</h2>
              <p className="text-gray-200">{option.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;




