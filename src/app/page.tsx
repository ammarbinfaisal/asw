import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, BarChart3, Check, TrendingUp, Users } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const services = [
  ['01', 'Advanced PPC management', 'Campaign setup, bidding, creative testing, and focused weekly optimisation.'],
  ['02', 'Strategic growth planning', 'A practical acquisition plan that connects paid media to the wider growth picture.'],
  ['03', 'Data-driven optimisation', 'GTM and GA4 measurement that turns customer behaviour into useful decisions.'],
  ['04', 'Integrated marketing', 'Advertising, content, and technical work aligned around qualified demand.'],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="#home" aria-label="Abdul Samad Wani home">
          <span>ASW</span><span>Performance / 2026</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className={styles.nav}>
            <li><Link href="#about">Profile</Link></li>
            <li><Link href="#services">Capabilities</Link></li>
            <li><Link href="#success">Results</Link></li>
          </ul>
        </nav>
        <Link className={styles.navCta} href="#contact">Start a conversation <ArrowUpRight size={15} /></Link>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroMeta}><span>Google Ads specialist</span><span>India / Worldwide</span></div>
        <div className={styles.heroTitle}>
          <p className={styles.kicker}>Performance marketing, made legible.</p>
          <h1>Make every<br /><em>click</em> accountable.</h1>
        </div>
        <div className={styles.heroAside}>
          <p>I build PPC systems with a clear line from attention to action—so growth is measurable, not mysterious.</p>
          <Link className={styles.primaryCta} href="#contact">Get a free consultation <ArrowDownRight size={18} /></Link>
        </div>
      </section>

      <section className={styles.proof} aria-label="Credentials and performance signals">
        <div className={styles.proofIntro}><span>Signal / proof</span><strong>Tools are useful only when they clarify the next decision.</strong></div>
        <div className={styles.proofGrid}>
          <div><Image src="/icons8-google-ads.svg" alt="" width={42} height={42} /><span>Google Ads<br />Certified</span></div>
          <div><Image src="/icons8-google-tag-manager.svg" alt="" width={42} height={42} /><span>Google Tag<br />Manager</span></div>
          <div className={styles.metric}><strong>30%</strong><span>reduction in CPA</span></div>
          <div><Image src="/google-analytics.svg" alt="" width={42} height={42} /><span>Google<br />Analytics 4</span></div>
        </div>
      </section>

      <section className={styles.profile} id="about">
        <div className={styles.sectionLabel}>01 / Profile</div>
        <div>
          <h2>Strategy with an<br />operator&apos;s <em>eye.</em></h2>
        </div>
        <div className={styles.profileCopy}>
          <p>I&apos;m Abdul Samad Wani, a PPC and growth strategy specialist. I pair campaign craft with a rigorous measurement practice—so the work compounds into sustainable, visible progress.</p>
          <Link className={styles.textLink} href="#contact">Work together <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.servicesHeading}><span className={styles.sectionLabel}>02 / Capabilities</span><h2>A focused system<br />for paid growth.</h2></div>
        <div className={styles.serviceList}>
          {services.map(([number, name, copy]) => <article className={styles.service} key={number}>
            <span>{number}</span><h3>{name}</h3><p>{copy}</p><ArrowUpRight aria-hidden size={21} />
          </article>)}
        </div>
      </section>

      <section className={styles.results} id="success">
        <div className={styles.resultsTop}><span className={styles.sectionLabel}>03 / Outcomes</span><p>Measured progress over marketing theatre.</p></div>
        <div className={styles.resultFeature}>
          <div className={styles.resultNumber}>30<span>%</span></div>
          <div><h2>Lower acquisition cost through better conversion intelligence.</h2><p>Advanced conversion tracking showed where campaigns were losing momentum—then made optimisation a repeatable practice.</p></div>
          <TrendingUp aria-hidden size={42} />
        </div>
        <div className={styles.resultNotes}>
          <article><BarChart3 aria-hidden size={20} /><h3>More useful reporting</h3><p>Clear measurement turns review meetings into decision time.</p></article>
          <article><Users aria-hidden size={20} /><h3>Client perspective</h3><p>“Abdul Samad&apos;s expertise in PPC and analytics transformed our digital strategy.” — Fullstacktics</p></article>
          <article><Check aria-hidden size={20} /><h3>Built to iterate</h3><p>A disciplined loop of hypotheses, tests, and transparent learning.</p></article>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <span className={styles.sectionLabel}>04 / Contact</span>
        <h2>Ready to turn<br />spend into <em>signal?</em></h2>
        <p>Bring the business question. We&apos;ll make the next move clear.</p>
        <Link className={styles.contactCta} href="https://wa.me/919045925301">Message on WhatsApp <ArrowUpRight size={20} /></Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Abdul Samad Wani</span><span>Google Ads · Analytics · Growth</span><Link href="#home">Back to top ↑</Link>
      </footer>
      <WhatsAppButton phoneNumber="+919045925301" />
    </main>
  );
}
