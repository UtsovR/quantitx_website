import { SectionLabel } from '../../components/common/SectionLabel'
import confidenceDesignImage from '../../assets/images/security/cd.png'

export function Security() {
  return (
    <section className="security section" id="security">
      <div className="container security__grid">
        <div className="security__copy">
          <SectionLabel>Security first</SectionLabel>
          <h2>Confidence is designed into every layer.</h2>
          <p>From systems to service, a deliberate security posture keeps your attention where it belongs: on the market ahead.</p>
          <div className="security-points">
            <span>◈ Built for compliance</span>
            <span>◈ Protected infrastructure</span>
          </div>
        </div>

        <div className="security-visual">
          <img className="security-image" src={confidenceDesignImage} alt="Layered security illustration" />
        </div>
      </div>
    </section>
  )
}
