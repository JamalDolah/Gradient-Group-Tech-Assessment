import Image from 'next/image';

export default function TheEvent({ eventDetails }) {
  return (
    <section id="the-event" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title - Centered */}
        <h2 className="text-4xl md:text-6xl lg:text-[112px] font-semibold text-black mb-12 text-center font-brsonoma leading-tight">
          The Event
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Introduction */}
          <div>
            {/* Heading with square bullet */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase font-ibmplex">
                INTRODUCTION OF THIS EVENT
              </h3>
            </div>
            {/* Content */}
            {eventDetails?.content && (
              <p className="text-[24px] text-black leading-relaxed font-ibmplex pl-7">
                {eventDetails.content}
              </p>
            )}
          </div>

          {/* Right Column: Past Events Header and Main Image */}
          <div>
            {/* Heading with square bullet */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase font-ibmplex">
                OUR PAST EVENTS
              </h3>
            </div>

            {/* Main large image - Top Right */}
            <div className="relative w-[453px] h-[679px] bg-gray-200 overflow-hidden">
              <Image
                src="/images/guy-on-staircase.png"
                alt="Main event"
                fill
                className="object-cover"
                sizes="453px"
              />
            </div>
          </div>
        </div>

        {/* Three smaller images - Centered below, overlapping and tilted */}
        <div className="flex justify-center items-center relative mb-8">
          {/* Image 1 - Tilted counter-clockwise, leftmost */}
          <div className="relative w-[439px] h-[329px] transform -rotate-2 z-10 -mr-8 overflow-hidden">
            <Image
              src="/images/guy-painting.png"
              alt="Past event 1"
              fill
              className="object-cover"
              sizes="439px"
            />
          </div>

          {/* Image 2 - Tilted counter-clockwise, middle */}
          <div className="relative w-[472px] h-[344.68px] transform -rotate-1 z-20 overflow-hidden">
            <Image
              src="/images/people-talking.png"
              alt="Past event 2"
              fill
              className="object-cover"
              sizes="472px"
            />
          </div>

          {/* Image 3 - Tilted clockwise, rightmost */}
          <div className="relative w-[423px] h-[319.88px] transform rotate-1 z-10 -ml-8 overflow-hidden">
            <Image
              src="/images/woman-painting.png"
              alt="Past event 3"
              fill
              className="object-cover"
              sizes="423px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

