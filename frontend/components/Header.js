import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200" style={{ height: '111px' }}>
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo - Left with same spacing as Hero section */}
        <div className="flex items-center justify-start pl-8 md:pl-12">
          <Image
            src="/images/header-img.png"
            alt="BluePrint Series"
            width={477}
            height={70.28}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation - Right, matching Figma spacing */}
        <nav className="flex items-center mr-8 md:mr-12" style={{ height: '40px' }}>
          <a href="#intro" className="text-sm font-ibmplex font-bold text-black uppercase hover:underline" style={{ marginRight: '24px' }}>
            INTRO
          </a>
          <a href="#agenda" className="text-sm font-ibmplex font-bold text-black uppercase hover:underline" style={{ marginRight: '24px' }}>
            AGENDA
          </a>
          <a href="#speakers" className="text-sm font-ibmplex font-bold text-black uppercase hover:underline" style={{ marginRight: '24px' }}>
            SPEAKERS
          </a>
          <a href="#the-event" className="text-sm font-ibmplex font-bold text-black uppercase hover:underline" style={{ marginRight: '34px' }}>
            THE EVENT
          </a>
          <button 
            className="text-sm font-brsonoma text-black uppercase bg-white hover:bg-black hover:text-white transition-colors"
            style={{ 
              width: '173.2px', 
              height: '40.48px',
              padding: 0,
              borderRadius: 0,
              borderTop: 'none',
              borderRight: 'none',
              borderLeft: '2px solid black',
              borderBottom: '2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '0'
            }}
          >
            GET TICKETS
          </button>
        </nav>
      </div>
    </header>
  );
}

