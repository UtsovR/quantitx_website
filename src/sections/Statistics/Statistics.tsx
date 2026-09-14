const statistics = [['42', 'markets observed'], ['18k+', 'signals analyzed daily'], ['140+', 'global data sources'], ['24/7', 'operational focus']]
export function Statistics() { return <section className="statistics"><div className="container statistics__grid">{statistics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section> }
