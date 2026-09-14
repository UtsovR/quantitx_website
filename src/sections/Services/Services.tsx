import { SectionLabel } from '../../components/common/SectionLabel'
import marketIntelligenceImage from '../../assets/images/services/mi.png'
import secureExecutionImage from '../../assets/images/services/se.png'
import portfolioInsightImage from '../../assets/images/services/pi.png'

const services = [
  ['01', 'Market intelligence', 'A clearer read on the signals that matter across digital markets.'],
  ['02', 'Secure execution', 'Protection-conscious infrastructure designed around confidence.'],
  ['03', 'Portfolio insight', 'A considered view of exposure, opportunity, and momentum.'],
]

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-intro">
          <SectionLabel>Our services</SectionLabel>
          <h2>Insight that stays<br />ahead of the market.</h2>
          <p>Every capability is designed to make complex decisions feel more deliberate.</p>
        </div>

        <div className="service-grid">
          {services.map(([number, title, copy], index) => (
            <article className={`service-card service-card--${index + 1}`} key={number}>
              {index === 0 ? (
                <img className="service-card__image" src={marketIntelligenceImage} alt="Market intelligence dashboard" loading="lazy" />
              ) : (
                <>
                  {index === 1 && (
                    <img className="service-card__background-image" src={secureExecutionImage} alt="" aria-hidden="true" loading="lazy" />
                  )}
                  {index === 2 && (
                    <img className="service-card__background-image" src={portfolioInsightImage} alt="" aria-hidden="true" loading="lazy" />
                  )}
                  <span>{number}</span>
                  <div className="service-card__visual">
                    <div className="service-icon" aria-hidden="true">{index === 1 ? '◇' : '↗'}</div>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a href="#markets" aria-label={`Learn more about ${title}`}>Learn more <b aria-hidden="true">→</b></a>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
