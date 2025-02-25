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
  CheckCircle 
} from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Rocket size={24} /> Abdul Samad Wani
          </div>
          <nav>
            <ul className={styles.nav}>
              <li><Link href="#home"><Zap size={18} /> Home</Link></li>
              <li><Link href="#about"><Users size={18} /> About</Link></li>
              <li><Link href="#services"><Target size={18} /> Services</Link></li>
              <li><Link href="#success"><Award size={18} /> Success Stories</Link></li>
              <li><Link href="#contact"><Globe size={18} /> Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <h1><Target size={48} /> Drive Business Growth with Expert PPC Strategies</h1>
          <p><PieChart size={24} /> Maximize ROI with Google Ads, Analytics, and Data-Driven Insights</p>
          <p className={styles.subtext}>Specializing in high-performance campaigns that deliver measurable results.</p>
          <Link href="#contact" className={styles.cta}><Rocket size={18} /> Get a Free Consultation</Link>
        </div>
      </section>

      {/* Trust Signals */}
      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.trustItem}>
            <Award size={50} />
            <p>Google Ads Certified</p>
          </div>
          <div className={styles.trustItem}>
            <BarChart size={50} />
            <p>Google Analytics Expert</p>
          </div>
          <div className={styles.trustItem}>
            <TrendingUp size={50} />
            <p><strong>30%</strong> Reduction in CPA</p>
          </div>
          <div className={styles.trustItem}>
            <CheckCircle size={50} />
            <p>Proven Track Record</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2><Users size={36} /> About Abdul Samad Wani</h2>
          <p>I’m a seasoned PPC and growth strategy expert with a passion for driving measurable business success. With extensive experience in Google Ads, performance marketing, and data analysis, I craft strategies that maximize ROI and fuel sustainable growth. My commitment to continuous learning—backed by certifications in Google Ads and Analytics—ensures I stay ahead of industry trends.</p>
          <Link href="#contact" className={styles.cta}><Zap size={18} /> Let’s Connect</Link>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2><Search size={36} /> Tailored PPC & Growth Solutions</h2>
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
          <Link href="#contact" className={styles.cta}><Zap size={18} /> Let’s Optimize Your Campaigns</Link>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className={styles.success}>
        <div className={styles.container}>
          <h2><Award size={36} /> Success Stories & Impact</h2>
          <div className={styles.successGrid}>
            <div className={styles.successItem}>
              <TrendingUp size={30} />
              <h3>30% Reduction in CPA</h3>
              <p>Implemented advanced conversion tracking to optimize campaigns, significantly lowering acquisition costs.</p>
            </div>
            <div className={styles.successItem}>
              <BarChart size={30} />
              <h3>Boosted Conversion Rates</h3>
              <p>Refined Google Ads strategies that directly contributed to measurable increases in conversions.</p>
            </div>
            <div className={styles.successItem}>
              <Users size={30} />
              <h3>Client Testimonial</h3>
              <p>“Abdul’s expertise in PPC and analytics transformed our digital strategy, delivering exceptional results.” – Client Name</p>
            </div>
          </div>
          <p className={styles.note}>Detailed case studies available upon request.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2><Rocket size={36} /> Ready to Elevate Your Digital Marketing?</h2>
          <p>Let’s leverage my expertise in PPC, analytics, and growth strategies to achieve remarkable results for your business.</p>
          <Link href="#contact" className={styles.cta}><Zap size={18} /> Get Started Today</Link>
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
    </div>
  );
}