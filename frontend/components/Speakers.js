import Image from 'next/image';

export default function Speakers({ speakers }) {
  if (!speakers || speakers.length === 0) {
    return null;
  }

  // Limit to 3 speakers as per requirements
  const displaySpeakers = speakers.slice(0, 3);

  return (
    <section id="speakers" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-[112px] font-semibold text-gray-900 mb-12 text-center font-brsonoma leading-tight">
          Featured Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displaySpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="flex flex-col items-center"
            >
              {/* Speaker Image - Circular */}
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48 relative rounded-full overflow-hidden bg-gray-200">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold">
                        {speaker.name.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Text block - 302px width, 93px height for name + profession */}
              <div className="w-[302px] text-center">
                <h3 className="text-lg md:text-xl lg:text-[24px] font-bold text-gray-900 mb-2 font-ibmplex">
                  {speaker.name}
                </h3>
                <p className="text-lg md:text-xl lg:text-[24px] text-gray-500 font-ibmplex uppercase">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

