import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Event Landing Pages
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Select an event to view its details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/events/1">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                The BluePrint Series: A Fireside Chat with Rich Tu
              </h2>
              <p className="text-gray-500 text-sm mb-2">MAY 14, 2025</p>
              <p className="text-gray-500 text-sm mb-4">SOHO HOUSE, NEW YORK</p>
              <p className="text-gray-600 mb-4">
                Join us for the premier technology conference bringing together industry leaders, innovators, and visionaries.
              </p>
              <div className="text-blue-600 font-semibold">
                View Event →
              </div>
            </div>
          </Link>
          <Link href="/events/2">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                The BluePrint Series: A Fireside Chat with Rich Tu
              </h2>
              <p className="text-gray-500 text-sm mb-2">MAY 14, 2025</p>
              <p className="text-gray-500 text-sm mb-4">SOHO HOUSE, NEW YORK</p>
              <p className="text-gray-600 mb-4">
                Join us for the premier technology conference bringing together industry leaders, innovators, and visionaries.
              </p>
              <div className="text-blue-600 font-semibold">
                View Event →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

