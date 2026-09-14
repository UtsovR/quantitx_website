import { SectionLabel } from '../../components/common/SectionLabel'

export function About() {
  return <section className="about section" id="about"><div className="container about__grid"><div><SectionLabel>Who we are</SectionLabel><h2>Built for the discipline behind every decision.</h2></div><div className="about__copy"><p>Quantitx exists for investors and institutions who value rigorous thinking over noise. We make a complex market feel legible, measured, and ready for action.</p><a className="text-link" href="#services">Our approach <span aria-hidden="true">→</span></a></div><div className="about__metrics"><div><strong>12+</strong><span>years of market<br />experience</span></div><div><strong>24/7</strong><span>intelligence<br />coverage</span></div><div><strong>99.99%</strong><span>infrastructure<br />uptime</span></div></div></div></section>
}
