import styles from './page.module.css';
import Link from 'next/link';
import {
  Award,
  BarChart,
  TrendingUp,
  Rocket,
  Target,
  PieChart,
  Users,
  Search,
  Zap,
  Globe,
} from 'lucide-react';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import Navigation from './Navigation';

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={`${styles.logo} uppercase`}>
              <Rocket size={24} />
              <span>Abdul Samad Wani</span>
            </div>
            <Navigation />
          </div>
        </header>


        <div className="h-screen flex flex-col mt-24 md:mt-0">
          {/* Hero Section */}
          <section id="home" className="flex-1 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-wrap items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <Target size={48} /> Drive
                </div>
                <div className="flex items-center">
                  <span className="bg-gradient-to-r from-cyan-600 to-teal-600 text-transparent bg-clip-text">Business Growth</span>
                </div>
                <div className="flex items-center">
                  with Expert PPC Strategies
                </div>
              </h1>
              <p className="text-lg md:text-xl mb-4">
                <PieChart size={24} className="inline-block align-text-bottom mr-2" />
                Maximize ROI with Google Ads, Analytics, and Data-Driven Insights
              </p>
              <p className="text-gray-600 mb-6">
                Specializing in high-performance campaigns that deliver measurable results.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                <Rocket size={18} /> Get a Free Consultation
              </Link>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-center">
                  <Image src="/icons8-google-ads.svg" alt="Google Ads Certified" width={50} height={50} />
                  <p className="font-bold">Google Ads Certified</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src="/icons8-google-tag-manager.svg" alt="Google Tag Manager" width={50} height={50} />
                  <p className="font-bold">Google Tag Manager</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src="/growth.png" alt="Google Tag Manager" width={50} height={50} />
                  <p className="font-bold"><strong className={`${styles.stat} font-bold`}>30%</strong> Reduction in CPA</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src="/google-analytics.svg" alt="Google Analytics" width={50} height={50} />
                  <p className="font-bold">Google Analytics 4</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <h2
              className='font-bold'
            ><Users size={36} /> About Abdul Samad Wani</h2>
            <p>I’m a seasoned PPC and growth strategy expert with a passion for driving measurable business success. With extensive experience in Google Ads, performance marketing, and data analysis, I craft strategies that maximize ROI and fuel sustainable growth. My commitment to continuous learning—backed by certifications in Google Ads and Analytics—ensures I stay ahead of industry trends.</p>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
              <Zap size={18} /> Let’s Connect
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2
              className='font-bold'
            ><Search size={36} /> Tailored PPC & Growth Solutions</h2>
            <p>From campaign creation to real-time optimization, I deliver results-driven solutions tailored to your business goals.</p>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceItem}>
                <h3><Rocket size={22} /> Advanced PPC Management</h3>
                <p>Comprehensive campaign strategies—from setup to optimization—that consistently deliver impressive ROI.</p>
              </div>
              <div className={styles.serviceItem}>
                <h3><Target size={22} /> Strategic Growth Planning</h3>
                <p>Custom plans integrating digital advertising and performance marketing to boost visibility and conversions.</p>
              </div>
              <div className={styles.serviceItem}>
                <h3><PieChart size={22} /> Data-Driven Optimization</h3>
                <p>Using GTM and GA4, I turn data into actionable insights for continuous campaign improvement.</p>
              </div>
              <div className={styles.serviceItem}>
                <h3><Globe size={22} /> Integrated Marketing Solutions</h3>
                <p>Combining creative content and technical expertise to drive traffic and revenue.</p>
              </div>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
              <Zap size={18} /> Let’s Optimize Your Campaigns
            </Link>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success" className={styles.success}>
          <div className={styles.container}>
            <h2
              className='font-bold'
            ><Award size={36} /> Success Stories & Impact</h2>
            <div className={styles.successGrid}>
              <div className={styles.successItem}>
                <h3 className='inline'>
                  <TrendingUp size={30} /> <span className={styles.stat}>30%</span> Reduction in CPA</h3>
                <p>Implemented advanced conversion tracking to optimize campaigns, significantly lowering acquisition costs.</p>
              </div>
              <div className={styles.successItem}>
                <h3 className='inline'><BarChart size={30} /> Boosted Conversion Rates</h3>
                <p>Refined Google Ads strategies that directly contributed to measurable increases in conversions.</p>
              </div>
              <div className={styles.successItem}>
                <h3 className='inline'><Users size={30} /> Client Testimonial</h3>
                <p>“Abdul Samad’s expertise in PPC and analytics transformed our digital strategy, delivering exceptional results.” — <a href='https://fullstacktics.com' target='_blank' className='underline'>Fullstacktics</a></p>
              </div>
            </div>
            <p className={styles.note}>Detailed case studies available upon request.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2
              className='font-bold'
            ><Rocket size={36} /> Ready to Elevate Your Digital Marketing?</h2>
            <p>Let’s leverage my expertise in PPC, analytics, and growth strategies to achieve remarkable results for your business.</p>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
              <Zap size={18} /> Get Started Today
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p><Globe size={18} /> © 2025 Abdul Samad Wani. All rights reserved.</p>
            <p>
              <Link href="#"><Users size={14} /> Privacy Policy</Link> |
              <Link href="#"><Award size={14} /> Terms of Use</Link>
            </p>
            <p>
              <Link href="https://linkedin.com" target="_blank"><Search size={14} /> LinkedIn</Link> |
              <Link href="https://abdulsamadwani.com" target="_blank"><Globe size={14} /> abdulsamadwani.com</Link>
            </p>
          </div>
        </footer>
      </div >
      <WhatsAppButton phoneNumber="+919045925301" />

    </>
  );
}