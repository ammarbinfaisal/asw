import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BadgeCheck,
  CircleDot,
  LineChart,
  Search,
  Target,
  Workflow,
} from "lucide-react";
import Navigation from "./Navigation";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./page.module.css";

const whatsappUrl =
  "https://wa.me/919045925301?text=Hi%20Abdul%2C%20I%27d%20like%20to%20discuss%20my%20Google%20Ads%20campaigns.";

const services = [
  {
    number: "01",
    icon: Target,
    title: "Advanced PPC management",
    text: "Campaign strategy, setup, and hands-on optimization designed to turn spend into measurable returns.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Strategic growth planning",
    text: "A focused plan connecting digital advertising, performance marketing, and the goals that matter to your business.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Data-driven optimization",
    text: "GTM and GA4 instrumentation that turns campaign behavior into clear, actionable decisions.",
  },
  {
    number: "04",
    icon: Search,
    title: "Integrated marketing",
    text: "Creative thinking and technical execution working together to grow qualified traffic and revenue.",
  },
];

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#home" aria-label="Abdul Samad Wani, home">
            <span className={styles.brandMark} aria-hidden="true">
              ASW
            </span>
            <span className={styles.brandCopy}>
              <strong>Abdul Samad Wani</strong>
              <span>PPC &amp; growth strategy</span>
            </span>
          </a>
          <Navigation />
        </div>
      </header>

      <main id="main-content">
        <section id="home" className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <CircleDot size={14} aria-hidden="true" />
                Google Ads · Analytics · Growth
              </p>
              <h1>
                Turn ad spend into{" "}
                <span className={styles.heroAccent}>accountable growth.</span>
              </h1>
              <p className={styles.heroIntro}>
                Expert PPC strategy, sharper tracking, and continuous optimization
                for businesses that want measurable progress—not marketing fog.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Get a free consultation
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className={styles.textLink} href="#success">
                  See the impact
                  <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              </div>
              <p className={styles.locationLine}>
                Based in India <span aria-hidden="true">↗</span> working worldwide
              </p>
            </div>

            <div className={styles.metricStage} aria-label="Featured performance result">
              <span className={styles.registrationLabel}>Performance note / 01</span>
              <article className={styles.metricCard}>
                <div className={styles.metricTopline}>
                  <Image
                    src="/growth.png"
                    alt=""
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                  <span>Documented campaign impact</span>
                </div>
                <p className={styles.metricFigure}>
                  <span>−</span>30%
                </p>
                <h2>Reduction in CPA</h2>
                <p>
                  Advanced conversion tracking gave campaign decisions a clearer
                  signal and helped lower acquisition costs.
                </p>
                <div className={styles.metricRule} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.proofRail} aria-label="Credentials and capabilities">
          <div className={`${styles.container} ${styles.proofGrid}`}>
            <div className={styles.proofItem}>
              <Image
                src="/icons8-google-ads.svg"
                alt=""
                width={38}
                height={38}
                aria-hidden="true"
              />
              <span>Google Ads certified</span>
            </div>
            <div className={styles.proofItem}>
              <Image
                src="/icons8-google-tag-manager.svg"
                alt=""
                width={38}
                height={38}
                aria-hidden="true"
              />
              <span>Google Tag Manager</span>
            </div>
            <div className={styles.proofItem}>
              <Image
                src="/google-analytics.svg"
                alt=""
                width={38}
                height={38}
                aria-hidden="true"
              />
              <span>Google Analytics 4</span>
            </div>
            <div className={styles.proofItem}>
              <BadgeCheck size={34} aria-hidden="true" />
              <span>Measurement first</span>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div className={styles.sectionMarker}>
              <span>01</span>
              <p>The strategist</p>
            </div>

            <div className={styles.portraitFrame}>
              <Image
                src="/pic.jpeg"
                alt="Abdul Samad Wani"
                width={400}
                height={400}
                sizes="(min-width: 62rem) 25vw, (min-width: 44rem) 40vw, 82vw"
              />
              <span className={styles.portraitCaption}>PPC specialist · India / worldwide</span>
            </div>

            <div className={styles.aboutCopy}>
              <p className={styles.eyebrow}>A clear-eyed growth partner</p>
              <h2>Strategy that stays close to the numbers.</h2>
              <p>
                I’m a seasoned PPC and growth strategy expert with a passion for
                driving measurable business success. Across Google Ads,
                performance marketing, and data analysis, I build strategies that
                maximize ROI and support sustainable growth.
              </p>
              <p>
                Continuous learning—backed by Google Ads and Analytics
                certifications—keeps the work current. The aim is simple: make
                every campaign decision easier to understand and improve.
              </p>
              <a className={styles.inlineArrow} href="#contact">
                Let’s connect
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div className={styles.sectionMarker}>
                <span>02</span>
                <p>The work</p>
              </div>
              <div>
                <p className={styles.eyebrow}>Tailored PPC &amp; growth solutions</p>
                <h2>From campaign setup to the next useful signal.</h2>
              </div>
              <p className={styles.sectionIntro}>
                Practical services built around your business goals, from first
                setup through real-time optimization.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className={styles.serviceCard} key={service.number}>
                    <div className={styles.serviceMeta}>
                      <span>Service / {service.number}</span>
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                );
              })}
            </div>

            <a className={styles.primaryButton} href="#contact">
              Let’s optimize your campaigns
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="success" className={styles.results}>
          <div className={styles.container}>
            <div className={styles.resultsHeading}>
              <div className={styles.sectionMarker}>
                <span>03</span>
                <p>The impact</p>
              </div>
              <div>
                <p className={styles.eyebrow}>Success stories &amp; impact</p>
                <h2>Proof should be specific, not theatrical.</h2>
              </div>
            </div>

            <div className={styles.resultGrid}>
              <article className={`${styles.resultCard} ${styles.resultPrimary}`}>
                <span className={styles.cardLabel}>Cost efficiency</span>
                <p className={styles.resultFigure}>30%</p>
                <h3>Reduction in CPA</h3>
                <p>
                  Advanced conversion tracking helped expose stronger campaign
                  signals and reduce acquisition costs.
                </p>
              </article>

              <article className={styles.resultCard}>
                <LineChart size={34} aria-hidden="true" />
                <span className={styles.cardLabel}>Conversion quality</span>
                <h3>Boosted conversion rates</h3>
                <p>
                  Refined Google Ads strategies contributed directly to measurable
                  increases in conversions.
                </p>
              </article>

              <figure className={`${styles.resultCard} ${styles.quoteCard}`}>
                <blockquote>
                  “Abdul Samad’s expertise in PPC and analytics transformed our
                  digital strategy, delivering exceptional results.”
                </blockquote>
                <figcaption>
                  <span>Client testimonial</span>
                  <a
                    href="https://fullstacktics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fullstacktics
                  </a>
                </figcaption>
              </figure>
            </div>
            <p className={styles.resultNote}>Detailed case studies are available upon request.</p>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={`${styles.container} ${styles.contactPanel}`}>
            <div>
              <p className={styles.eyebrow}>Free consultation</p>
              <h2>Bring the campaign. Leave with a clearer next step.</h2>
            </div>
            <div className={styles.contactAction}>
              <p>
                Let’s look at your PPC, analytics, and growth goals—and find the
                most useful place to begin.
              </p>
              <a
                className={styles.contactButton}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start on WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerGrid}`}>
          <p>© 2026 Abdul Samad Wani.</p>
          <p>Google Ads specialist based in India, working worldwide.</p>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://abdulsamadwani.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              abdulsamadwani.com
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppButton
        phoneNumber="+919045925301"
        message="Hi Abdul, I'd like to discuss my Google Ads campaigns."
      />
    </>
  );
}
