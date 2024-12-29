import localFont from "next/font/local"

const font = localFont({
  src: "./BebasNeue.ttf",
})

const delius = localFont({
  src: "./DeliusSwashCaps.ttf",
})

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="w-24 h-24 mb-8">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 uppercase tracking-wider">{title}</h3>
      <p className="leading-relaxed max-w-md" 
        style={delius.style}
      >{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-[#2D2D2D] text-[#DCD7D2] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-4 uppercase tracking-wider">
          More than full-stack inbound marketing
        </h2>
        <p className="text-center italic text-2xl mb-20 max-w-4xl mx-auto leading-relaxed" style={delius.style}>
          Creating data-driven strategies and immersive content for meaningful communities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ServiceCard
            icon={
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <path d="M0 0h12v12H0zM12 12h12v12H12z" />
              </svg>
            }
            title="Digital Strategy"
            description="Holistic digital strategies that maximize the capabilities of new or existing channels. Make your communities and channels work together."
          />
          
          <ServiceCard
            icon={
              <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2" />
              </svg>
            }
            title="Social Media"
            description="Custom social media strategies that help your business grow brand awareness, build trust and convert followers."
          />
          
          <ServiceCard
            icon={
              <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none">
                <path d="M3 3v18h18" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18l6-6 4 4 8-8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
            title="Content"
            description="Data-driven content that doesn't skimp on creativity. Stand out with content your community will remember, talk about and share."
          />
          
          <ServiceCard
            icon={
              <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" />
              </svg>
            }
            title="Copywriting"
            description="SEO-focused copywriting that speaks to the concerns and interests of your community, and mobilizes them to take action."
          />
        </div>
      </div>
    </div>
  );
};


const PortfolioSite = () => {
  return (
    <div className="relative">
      {/* Fixed background */}
      <div
        className="fixed inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/bg.jpg')",
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative">
        {/* First section */}
        <div className="bg-[#2D2D2D]  text-[#DCD7D2]" style={font.style}>
          <nav className="flex justify-between items-center p-8">
            <a href="#about" className="text-lg ">ABOUT</a>
            <a href="#portfolio" className="text-lg ">PORTFOLIO</a>
            <a href="#contact" className="text-lg ">CONTACT</a>
          </nav>

          <header className="px-8 pt-16 pb-8">
            <h1 className="text-[7rem] font-bold text-center tracking-wider text-[#DCD7D2]">
              ABDUL SAMAD WANI
            </h1>
            <div className="flex justify-between items-center mt-4 text-md">
              <p>BASED IN INDIA, WORKING WORLDWIDE</p>
              <div className="flex gap-4">
                <span>PPC SPECIALIST</span>
                <span>|</span>
                <span>ADS ACCOUNT MANAGER</span>
              </div>
              <a href="https://linkedin.com/in/abdulsamadwani" className="">LINKEDIN</a>
            </div>
          </header>
        </div>

        {/* show background image */}
        <div className="min-h-96 backdrop-filter backdrop-blur-sm">
        </div>

        {/* Second section */}
        <div className="min-h-screen bg-[#2D2D2D] text-[#DCD7D2]" style={font.style}>
         
          <ServicesSection />

          <footer className="py-8 px-8 text-center text-md">
            <p>© 2024 Abdul Samad Wani. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSite;