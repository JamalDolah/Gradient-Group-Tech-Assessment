export default function Introduction({ heading, content }) {
  return (
    <section id="intro" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading with square bullet */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase font-ibmplex">
            {heading}
          </h2>
        </div>
        <p className="text-lg md:text-xl lg:text-[24px] text-black leading-relaxed font-ibmplex pl-7">
          {content}
        </p>
      </div>
    </section>
  );
}

