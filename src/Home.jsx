import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to Our Travel Page
      </h1>

      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Beautiful mountain landscape"
        className="w-96 rounded-xl mb-6 shadow-lg"
      />

      <p className="text-xl font-medium text-white">
        Fresh air, mountain view
      </p>
    </div>
  );
}

export default Home;
