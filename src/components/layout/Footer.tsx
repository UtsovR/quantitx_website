const footerGroups = [
  { title: 'Explore', items: ['About us', 'Our services', 'Market insights'] },
  { title: 'Company', items: ['Security', 'Contact', 'Legal'] },
]

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div><a className="brand" href="#home"><img className="brand-logo" src="/images/logo.png" alt="Quantitx" /></a><p>Clarity and confidence for the evolving digital economy.</p></div>
        {footerGroups.map((group) => <div key={group.title}><h2>{group.title}</h2>{group.items.map((item) => <a href="#contact" key={item}>{item}</a>)}</div>)}
        <div><h2>Connect</h2><a href="mailto:hello@quantitx.com">hello@quantitx.com</a><a href="#contact">LinkedIn</a><a href="#contact">X / Twitter</a></div>
      </div>
      <div className="container footer__bottom"><span>© 2026 Quantitx. All rights reserved.</span><span>Built for a clearer market.</span></div>
    </footer>
  )
}
