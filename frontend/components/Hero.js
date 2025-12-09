import Image from 'next/image';

export default function Hero({ title, date, location, heroImage }) {
  return (
    <section className="relative w-full min-h-screen bg-gray-900">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        )}
      </div>

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(circle, rgba(30, 0, 255, 0.4) 0%, transparent 100%)'
        }}
      ></div>

      {/* Content Overlay - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full text-center text-white">
          {/* Date - Above title */}
          {date && (
            <p className="text-base md:text-lg lg:text-xl font-ibmplex uppercase tracking-wide mb-6">
              {date}
            </p>
          )}
          
          {/* Main Title - Split at colon */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-brsonoma leading-tight mb-6">
            {title.includes(':') ? (
              <>
                <span className="block">{title.split(':')[0]}:</span>
                <span className="block">{title.split(':')[1].trim()}</span>
              </>
            ) : (
              title
            )}
          </h1>
          
          {/* Location - Below title */}
          {location && (
            <p className="text-base md:text-lg lg:text-xl font-ibmplex uppercase tracking-wide">
              {location}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

