import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <Navbar />
        <div className="text-center py-20">
          <Link className="text-orange-500" href="https://github.com/FBManley">
            Project 1
          </Link>
          <Link className="text-orange-500" href="https://github.com/FBManley">
            Project 2
          </Link>
          <Link className="text-orange-500" href="https://github.com/FBManley">
            Project 3
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Projects;
