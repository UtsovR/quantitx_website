import bitcoinVideo from '../../assets/images/bitcoin/BitcoinGIF.mp4'
import { Button } from '../../components/buttons/Button'
import { SectionLabel } from '../../components/common/SectionLabel'
import './Hero.css'

export function Hero() {
  return <section className="hero" id="home">
    <div className="container hero__grid">
      <div className="hero__content">
        <SectionLabel>Institutional intelligence, made clear</SectionLabel>
        <h1>Move through digital markets with <em>clarity.</em></h1>
        <p>Quantitx brings market intelligence, secure infrastructure, and disciplined insight into one refined experience.</p>
        <div className="hero__actions"><Button href="#services">Explore our platform <span aria-hidden="true">→</span></Button><Button href="#markets" variant="secondary">View market outlook</Button></div>
        <div className="hero__trust"><span className="trust-dot">✓</span><span>Built with a compliance-first mindset</span></div>
      </div>
      <div className="hero__visual" aria-label="Bitcoin market visualization">
        <div className="visual-grid" aria-hidden="true" />
        <div className="hero-bitcoin-visual">
          <div className="hero-bitcoin-glow" aria-hidden="true" />
          <video className="hero-bitcoin-animation" autoPlay muted loop playsInline aria-label="Animated Bitcoin market visualization"><source src={bitcoinVideo} type="video/mp4" /></video>
        </div>
      </div>
    </div>
  </section>
}
