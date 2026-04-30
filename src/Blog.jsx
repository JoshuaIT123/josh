import React from "react";

function Blog() {
  return (
    <div className="min-h-screen from-green-900 to-black text-white">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">
          ⚽ FOOTBALL ZONE
        </h1>
        <p className="text-gray-300 mt-2">
          Latest news, transfers & match updates
        </p>
      </header>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            alt="Football match"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
            <h2 className="text-3xl font-bold">
              Champions League Nights Are Back
            </h2>
            <p className="text-gray-300 mt-2 max-w-xl">
              Top clubs prepare for thrilling European clashes this week.
            </p>
            <button className="mt-4 w-fit bg-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Transfer Rumors Heat Up",
            image:
              "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
          },
          {
            title: "Premier League Weekend Preview",
            image:
              "https://images.unsplash.com/photo-1517649763962-0c623066013b",
          },
          {
            title: "Rising Young Talents to Watch",
            image:
              "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Stay updated with the latest football insights and breaking news.
              </p>
              <button className="mt-4 text-green-500 font-semibold hover:underline">
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-sm">
        © 2026 Football Zone · All Rights Reserved
      </footer>
    </div>
  );
}

export default Blog;
