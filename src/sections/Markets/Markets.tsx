import { SectionLabel } from '../../components/common/SectionLabel'
import selectedAssetsImage from '../../assets/images/markets/1.png'

export function Markets() {
  return (
    <section className="markets section" id="markets">
      <div className="container markets__grid">
        <div className="market-panel">
          <div className="market-panel__heading">
            <div>
              <span>Market overview</span>
              <strong>Selected assets</strong>
            </div>
            <button type="button">24H ▾</button>
          </div>
          <div className="selected-assets-image-wrapper">
            <img
              src={selectedAssetsImage}
              alt="Selected digital asset market overview"
              className="selected-assets-image"
            />
          </div>
        </div>

        <div className="markets__copy">
          <SectionLabel>Market insights</SectionLabel>
          <h2>A signal is only valuable when it is understood.</h2>
          <p>Our market perspective connects movement, context, and opportunity in one calm, continuously evolving view.</p>
          <a className="text-link" href="#security">Explore the market view <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
