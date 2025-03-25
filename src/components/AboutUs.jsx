import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, HeartHandshake } from 'lucide-react';

const AboutUs = () => {
  const sections = [
    {
      title: 'Our Vision',
      description: 'To create a collaborative platform where innovative startups can thrive by gaining access to resources, mentorship, and community support.',
      icon: <Lightbulb size={40} className="mb-4 text-yellow-400" />
    },
    {
      title: 'Our Mission',
      description: 'Empowering startups by providing essential tools, guidance, and funding opportunities to turn ideas into successful ventures.',
      icon: <Users size={40} className="mb-4 text-blue-400" />
    },
    {
      title: 'Our Values',
      description: 'Integrity, Innovation, and Inclusivity are the core principles driving our commitment to a sustainable future.',
      icon: <HeartHandshake size={40} className="mb-4 text-pink-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center text-blue-200 drop-shadow-xl"
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-purple-700 to-indigo-500 p-6 rounded-2xl shadow-md transition-all backdrop-blur-sm cursor-pointer hover:ring-4 hover:ring-indigo-400"
            >
              {section.icon}
              <h2 className="text-3xl font-bold mb-4 text-white">{section.title}</h2>
              <p className="text-gray-200">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;

