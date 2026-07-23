import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  LineChart,
  MessageCircle,
} from 'lucide-react';
import styles from './page.module.css';
import Navigation from './Navigation';
import WhatsAppButton from './WhatsAppButton';

const whatsappUrl =
  'https://wa.me/919045925301?text=I%27d%20like%20to%20discuss%20a%20PPC%20growth%20strategy.';

const services = [
  {
    index: '01',
    title: 'Advanced PPC Management',
    description:
      'Comprehensive campaign strategies—from setup to optimization—that consistently deliver impressive ROI.',
  },
  {
    index: '02',
    title: 'Strategic Growth Planning',
    description:
      'Custom plans integrating digital advertising and performance marketing to boost visibility and conversions.',
  },
  {
    index: '03',
    title: 'Data-Driven Optimization',
    description:
      'Using GTM and GA4, I turn data into actionable insights for continuous campaign improvement.',
  },
  {
    index: '04',
    title: 'Integrated Marketing Solutions',
    description:
      'Combining creative content and technical expertise to drive traffic and revenue.',
  },
];

const credentials = [
  {
    image: '/icons8-google-ads.svg',
    label: 'Google Ads Certified',
    alt: 'Google Ads',
  },
  {
    image: '/icons8-google-tag-manager.svg',
    label: 'Google Tag Manager',
    alt: 'Google Tag Manager',
  },
  {
    image: '/google-analytics.svg',
    label: 'Google Analytics 4',
    alt: 'Google Analytics',
  },
];

function SectionIndex({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className={styles.sectionIndex} aria-hidden="true">
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link className={styles.logo} href="#home" aria-label="Abdul Samad Wani, home">
              <span className={styles.logoMark}>ASW</span>
              <span className={styles.logoCopy}>
                <strong>Abdul Samad Wani</strong>
                <small>Performance command</small>
              </span>
            </Link>
            <Navigation />
            <a className={styles.headerAction} href={whatsappUrl}>
              <span>Start a conversation</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </header>

        <main id="main-content">
          <section id="home" className={`${styles.section} ${styles.hero}`}>
            <div className={styles.gridFrame}>
              <SectionIndex number="01" label="Orient" />

              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>
                  <span className={styles.signalSquare} aria-hidden="true" />
                  Independent PPC / Growth Strategy
                </p>
                <h1>
                  Turn campaign data into{' '}
                  <span>profitable decisions.</span>
                </h1>
                <p className={styles.heroLead}>
                  Drive business growth with expert PPC strategies. Maximize ROI
                  with Google Ads, Analytics, and data-driven insights.
                </p>
                <p className={styles.heroSupport}>
                  Specializing in high-performance campaigns that deliver
                  measurable results.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryAction} href="#contact">
                    Get a Free Consultation
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className={styles.secondaryAction} href="#success">
                    Inspect the evidence
                  </Link>
                </div>
                <dl className={styles.heroMeta}>
                  <div>
                    <dt>Platforms</dt>
                    <dd>Google Ads / GTM / GA4</dd>
                  </div>
                  <div>
                    <dt>Operating mode</dt>
                    <dd>Strategy to optimization</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.commandPanel}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.panelKicker}>Campaign signal</span>
                    <strong>Efficiency trajectory</strong>
                  </div>
                  <span className={styles.illustrativeLabel}>
                    Illustrative / not live
                  </span>
                </div>

                <div className={styles.chartStage}>
                  <svg
                    className={styles.signalChart}
                    viewBox="0 0 640 330"
                    role="img"
                    aria-labelledby="signal-title signal-desc"
                  >
                    <title id="signal-title">
                      Illustrative campaign efficiency trend
                    </title>
                    <desc id="signal-desc">
                      An abstract line rises across a grid toward a highlighted
                      terminal decision point. It does not represent live
                      account data.
                    </desc>
                    <g className={styles.chartGrid} aria-hidden="true">
                      <path d="M0 55H640M0 130H640M0 205H640M0 280H640" />
                      <path d="M90 0V330M210 0V330M330 0V330M450 0V330M570 0V330" />
                    </g>
                    <path
                      className={styles.referenceLine}
                      d="M0 246H640"
                      aria-hidden="true"
                    />
                    <path
                      className={styles.trendShadow}
                      d="M22 272C90 256 111 276 168 238C225 200 259 226 311 190C367 151 397 183 458 128C508 82 563 112 618 51"
                      aria-hidden="true"
                    />
                    <path
                      className={styles.trendLine}
                      d="M22 272C90 256 111 276 168 238C225 200 259 226 311 190C367 151 397 183 458 128C508 82 563 112 618 51"
                      aria-hidden="true"
                    />
                    <g className={styles.endPoint} aria-hidden="true">
                      <circle cx="618" cy="51" r="14" />
                      <circle cx="618" cy="51" r="4" />
                    </g>
                  </svg>

                  <div className={styles.resultCallout}>
                    <span>Confirmed outcome</span>
                    <strong>30%</strong>
                    <small>reduction in CPA</small>
                  </div>
                  <div className={styles.chartAxis} aria-hidden="true">
                    <span>Measure</span>
                    <span>Interpret</span>
                    <span>Optimize</span>
                  </div>
                </div>

                <div className={styles.panelFooter}>
                  <span>
                    <Check size={15} aria-hidden="true" />
                    Conversion tracking
                  </span>
                  <span>
                    <Check size={15} aria-hidden="true" />
                    Decision-ready analysis
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.credentialBand} aria-label="Credentials and result">
            <div className={styles.credentialGrid}>
              {credentials.map((credential) => (
                <div className={styles.credential} key={credential.label}>
                  <span className={styles.credentialIcon}>
                    <Image
                      src={credential.image}
                      alt={credential.alt}
                      width={34}
                      height={34}
                    />
                  </span>
                  <span>{credential.label}</span>
                </div>
              ))}
              <div className={`${styles.credential} ${styles.credentialResult}`}>
                <span className={styles.miniResult}>30%</span>
                <span>Reduction in CPA</span>
              </div>
            </div>
          </section>

          <section id="about" className={`${styles.section} ${styles.about}`}>
            <div className={styles.gridFrame}>
              <SectionIndex number="02" label="Profile" />
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Operator profile</p>
                <h2>Expertise built for accountable growth.</h2>
              </div>
              <div className={styles.aboutCopy}>
                <p>
                  I’m a seasoned PPC and growth strategy expert with a passion
                  for driving measurable business success. With extensive
                  experience in Google Ads, performance marketing, and data
                  analysis, I craft strategies that maximize ROI and fuel
                  sustainable growth. My commitment to continuous
                  learning—backed by certifications in Google Ads and
                  Analytics—ensures I stay ahead of industry trends.
                </p>
                <Link className={styles.textAction} href="#contact">
                  Let’s Connect
                  <ArrowDownRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section id="services" className={`${styles.section} ${styles.services}`}>
            <div className={styles.gridFrame}>
              <SectionIndex number="03" label="Systems" />
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Tailored PPC &amp; Growth Solutions</p>
                <h2>A connected operating system for paid growth.</h2>
                <p>
                  From campaign creation to real-time optimization, I deliver
                  results-driven solutions tailored to your business goals.
                </p>
              </div>

              <div className={styles.serviceMatrix}>
                {services.map((service) => (
                  <article className={styles.serviceRow} key={service.index}>
                    <span className={styles.serviceNumber}>{service.index}</span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <ArrowUpRight
                      className={styles.serviceArrow}
                      size={20}
                      aria-hidden="true"
                    />
                  </article>
                ))}
              </div>

              <div className={styles.sectionAction}>
                <Link className={styles.secondaryAction} href="#contact">
                  Let’s Optimize Your Campaigns
                </Link>
              </div>
            </div>
          </section>

          <section id="success" className={`${styles.section} ${styles.success}`}>
            <div className={styles.gridFrame}>
              <SectionIndex number="04" label="Evidence" />
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Success Stories &amp; Impact</p>
                <h2>Evidence before adjectives.</h2>
              </div>

              <div className={styles.proofGrid}>
                <article className={`${styles.proofItem} ${styles.primaryProof}`}>
                  <span className={styles.proofIcon}>
                    <LineChart size={22} aria-hidden="true" />
                    Acquisition efficiency
                  </span>
                  <strong>30%</strong>
                  <h3>Reduction in CPA</h3>
                  <p>
                    Implemented advanced conversion tracking to optimize
                    campaigns, significantly lowering acquisition costs.
                  </p>
                </article>

                <article className={styles.proofItem}>
                  <span className={styles.proofIcon}>
                    <BarChart3 size={22} aria-hidden="true" />
                    Conversion quality
                  </span>
                  <h3>Boosted Conversion Rates</h3>
                  <p>
                    Refined Google Ads strategies that directly contributed to
                    measurable increases in conversions.
                  </p>
                </article>

                <article className={styles.proofItem}>
                  <span className={styles.proofIcon}>
                    <MessageCircle size={22} aria-hidden="true" />
                    Client testimonial
                  </span>
                  <blockquote>
                    “Abdul Samad’s expertise in PPC and analytics transformed
                    our digital strategy, delivering exceptional results.”
                  </blockquote>
                  <a
                    className={styles.sourceLink}
                    href="https://fullstacktics.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fullstacktics
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              </div>
              <p className={styles.note}>
                Detailed case studies available upon request.
              </p>
            </div>
          </section>

          <section id="contact" className={`${styles.section} ${styles.contact}`}>
            <div className={styles.gridFrame}>
              <SectionIndex number="05" label="Decide" />
              <div className={styles.contactBody}>
                <p className={styles.eyebrow}>Ready for the next move?</p>
                <h2>Ready to Elevate Your Digital Marketing?</h2>
                <p>
                  Let’s leverage my expertise in PPC, analytics, and growth
                  strategies to achieve remarkable results for your business.
                </p>
              </div>
              <a className={styles.signalAction} href={whatsappUrl}>
                <span>Get Started Today</span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p>© 2026 Abdul Samad Wani. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <Link href="#home">Privacy Policy</Link>
              <Link href="#home">Terms of Use</Link>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a
                href="https://abdulsamadwani.com"
                target="_blank"
                rel="noreferrer"
              >
                abdulsamadwani.com
              </a>
            </div>
          </div>
        </footer>
      </div>

      <WhatsAppButton
        phoneNumber="+919045925301"
        message="I’d like to discuss a PPC growth strategy."
      />
    </>
  );
}
