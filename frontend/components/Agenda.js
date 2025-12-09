export default function Agenda({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section id="agenda" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-[112px] font-semibold text-black mb-12 text-center font-brsonoma leading-tight">
          Agenda
        </h2>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-8"
            >
              {/* Vertical black line - timeline marker */}
              <div className="w-[7px] h-[72px] bg-black flex-shrink-0"></div>
              
              {/* Left Column: Time and Title */}
              <div className="flex-shrink-0 w-80 min-w-[320px]">
                <p className="text-[24px] text-black font-ibmplex mb-1 whitespace-nowrap">{item.time}</p>
                <p className="text-[24px] text-black font-ibmplex uppercase whitespace-nowrap">{item.title}</p>
              </div>
              
              {/* Middle Column: Description */}
              <div className="flex-1 max-w-2xl">
                {item.description && (
                  <p className="text-[24px] text-black font-ibmplex leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              
              {/* Right Column: Location */}
              {item.location && (
                <div className="flex-shrink-0 w-48 min-w-[192px] text-right">
                  <p className="text-[24px] text-black font-ibmplex uppercase whitespace-nowrap">
                    {item.location}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

