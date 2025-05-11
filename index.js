export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: "url('/bus-bg.jpg')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          WELCOME TO BSBDOMG OFFICIAL SITE!
        </h1>
        <p className="text-center max-w-xl mb-6">
          This is the official website of Bus Simulator Bangladesh Official Multiplayer Group. 
          This site is run by BSBDOMG Admin Panel. This site helps players to enjoy the game 
          by serving all resources at one place.
        </p>
        <div className="flex gap-4 mb-8">
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Join Us
          </button>
          <button className="bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600">
            See Top Players!
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <a href="#" className="bg-gray-800 px-4 py-2 rounded">Play Store</a>
          <a href="#" className="bg-gray-800 px-4 py-2 rounded">FB Page</a>
          <a href="#" className="bg-gray-800 px-4 py-2 rounded">FB Group</a>
          <a href="#" className="bg-gray-800 px-4 py-2 rounded">Discord</a>
          <a href="#" className="bg-gray-800 px-4 py-2 rounded">YouTube</a>
        </div>

        <footer className="text-sm text-center">
          © 2025 BSBDOMG | All rights reserved. <br />
          Total Visitors: 118
        </footer>
      </div>
    </div>
  );
}
