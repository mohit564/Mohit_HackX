import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white ">
      <section className="container mx-auto px-6 py-6">
        <h2 className="text-2xl text-center mb-10">TV Channels</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">
          <div className="hover:bg-gray-800 rounded">
            <img
              className="object-cover object-center"
              src="https://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Max_HD.png"
              alt="Sony Max HD Channel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
