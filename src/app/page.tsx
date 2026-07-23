import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  LineChart,
  MousePointerClick,
  SearchCheck,
} from "lucide-react";
import Navigation from "./Navigation";
import styles from "./page.module.css";

const whatsappHref =
  "https://wa.me/919045925301?text=Hello%20Abdul%2C%20I%27d%20like%20to%20discuss%20a%20Google%20Ads%20consultation.";

const services = [
  {
    number: "01",
    title: "Advanced PPC management",
    description:
      "Comprehensive campaign strategies, from setup through optimization, that consistently focus on stronger returns.",
  },
  {
    number: "02",
    title: "Strategic growth planning",
    description:
      "Custom plans that connect digital advertising and performance marketing to visibility, conversions, and revenue.",
  },
  {
    number: "03",
    title: "Data-driven optimization",
    description:
      "GTM and GA4 instrumentation that turns campaign activity into decisions you can act on.",
  },
  {
    number: "04",
    title: "Integrated marketing",
    description:
      "Creative content and technical campaign expertise working together to build qualified traffic.",
  },
];

const process = [
  {
    icon: SearchCheck,
    title: "Audit the signal",
    description:
      "Review campaign structure, conversion tracking, and the decisions your current data can and cannot support.",
  },
  {
    icon: MousePointerClick,
    title: "Build the system",
    description:
      "Align ads, landing intent, GTM, and GA4 around the business outcome that matters.",
  },
  {
    icon: LineChart,
    title: "Optimize the return",
    description:
      "Use measured performance to lower waste, sharpen bids, and compound what converts.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <Link href="#home" className={styles.brand} aria-label="Abdul Samad Wani, home">
              <span className={styles.brandName}>Abdul Samad Wani</span>
              <span className={styles.brandRole}>PPC &amp; growth strategy</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      <section id="home" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroPrimary}>
              <p className={styles.eyebrow}>Independent Google Ads consultancy · India / worldwide</p>
              <h1 id="hero-title">Make paid search answer to the numbers.</h1>
              <p className={styles.heroLead}>
                Maximize ROI with expert Google Ads, analytics, and data-driven insight, built
                around measurable business growth.
              </p>
              <div className={styles.heroActions}>
                <Link href="#contact" className={styles.primaryButton}>
                  Book a free consultation
                  <ArrowDownRight aria-hidden="true" />
                </Link>
                <Link href="#results" className={styles.textLink}>
                  See the evidence
                  <ArrowDownRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className={styles.heroAside} aria-label="Consultancy mandate">
              <p className={styles.asideLabel}>The mandate</p>
              <p>
                High-performance campaigns should make the next decision clearer, not add another
                dashboard to check.
              </p>
              <dl>
                <div>
                  <dt>01</dt>
                  <dd>Find the costly gaps.</dd>
                </div>
                <div>
                  <dt>02</dt>
                  <dd>Instrument what matters.</dd>
                </div>
                <div>
                  <dt>03</dt>
                  <dd>Scale with evidence.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.metricStrip} aria-label="Credentials and outcomes">
        <div className={`${styles.shell} ${styles.metricGrid}`}>
          <div className={styles.metric}>
            <strong>30%</strong>
            <span>reduction in CPA</span>
          </div>
          <div className={styles.metric}>
            <Image src="/icons8-google-ads.svg" alt="" width={36} height={36} />
            <span>Google Ads certified</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricMonogram} aria-hidden="true">G</span>
            <span>GTM + GA4 expertise</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricMonogram} aria-hidden="true">↗</span>
            <span>India based · worldwide</span>
          </div>
        </div>
      </section>

      <section id="expertise" className={styles.section} aria-labelledby="expertise-title">
        <div className={`${styles.shell} ${styles.editorialGrid}`}>
          <div className={styles.sectionMarker} aria-hidden="true">01</div>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Expertise</p>
            <h2 id="expertise-title">One growth system, four exacting disciplines.</h2>
            <p>
              From campaign creation to real-time optimization, each engagement is tailored to the
              business goal, not a reusable playbook.
            </p>
          </div>
          <div className={styles.serviceList}>
            {services.map((service) => (
              <article className={styles.service} key={service.number}>
                <span className={styles.itemNumber} aria-hidden="true">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className={`${styles.section} ${styles.paperSection}`} aria-labelledby="approach-title">
        <div className={`${styles.shell} ${styles.editorialGrid}`}>
          <div className={styles.sectionMarker} aria-hidden="true">02</div>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Approach</p>
            <h2 id="approach-title">Strategy becomes useful when measurement becomes legible.</h2>
            <p>
              The work joins campaign craft and analytics so every recommendation has an observable
              reason behind it.
            </p>
          </div>
          <ol className={styles.processList}>
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className={styles.processIndex}>0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="results" className={styles.section} aria-labelledby="results-title">
        <div className={`${styles.shell} ${styles.editorialGrid}`}>
          <div className={styles.sectionMarker} aria-hidden="true">03</div>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Results</p>
            <h2 id="results-title">Evidence before adjectives.</h2>
            <p>
              Better tracking revealed where budget could work harder, while refined campaign
              strategy improved the path to conversion.
            </p>
          </div>
          <div className={styles.resultsGrid}>
            <article className={styles.featureResult}>
              <p className={styles.resultValue}>30%</p>
              <h3>Reduction in CPA</h3>
              <p>
                Advanced conversion tracking and campaign optimization significantly lowered
                acquisition costs.
              </p>
            </article>
            <article className={styles.secondaryResult}>
              <BarChart3 aria-hidden="true" />
              <h3>Conversion rates, strengthened</h3>
              <p>
                Refined Google Ads strategies contributed directly to measurable increases in
                conversions.
              </p>
            </article>
            <figure className={styles.quote}>
              <blockquote>
                “Abdul Samad’s expertise in PPC and analytics transformed our digital strategy,
                delivering exceptional results.”
              </blockquote>
              <figcaption>
                <span>Fullstacktics</span>
                <a href="https://fullstacktics.com" target="_blank" rel="noreferrer">
                  Visit source <ArrowUpRight aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
            <p className={styles.caseNote}>Detailed case studies are available upon request.</p>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.aboutSection}`} aria-labelledby="about-title">
        <div className={`${styles.shell} ${styles.editorialGrid}`}>
          <div className={styles.sectionMarker} aria-hidden="true">04</div>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>About</p>
            <h2 id="about-title">A specialist who stays close to the work.</h2>
          </div>
          <div className={styles.aboutCopy}>
            <p className={styles.aboutLead}>
              I’m Abdul Samad Wani, a seasoned PPC and growth strategy expert with a passion for
              measurable business success.
            </p>
            <p>
              With extensive experience in Google Ads, performance marketing, and data analysis, I
              craft strategies that maximize ROI and fuel sustainable growth. Continuous
              learning, backed by certifications in Google Ads and Analytics, keeps the work ahead of
              industry shifts.
            </p>
            <Link href="#contact" className={styles.textLink}>
              Let’s connect <ArrowDownRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.shell}>
          <div className={styles.contactGrid}>
            <p className={styles.contactMarker} aria-hidden="true">05</p>
            <div>
              <p className={styles.eyebrow}>Start a conversation</p>
              <h2 id="contact-title">Your next campaign decision can be a better one.</h2>
            </div>
            <div className={styles.contactAction}>
              <p>
                Let’s bring PPC, analytics, and growth strategy into one clear plan for your
                business.
              </p>
              <a href={whatsappHref} className={styles.inverseButton} target="_blank" rel="noreferrer">
                Talk on WhatsApp
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className={styles.contactLink} href="https://abdulsamadwani.com" target="_blank" rel="noreferrer">
                abdulsamadwani.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <p>© 2026 Abdul Samad Wani. Google Ads &amp; growth strategy.</p>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://abdulsamadwani.com" target="_blank" rel="noreferrer">Website</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
