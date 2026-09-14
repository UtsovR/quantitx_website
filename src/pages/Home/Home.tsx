import { Footer } from '../../components/layout/Footer'
import { Navbar } from '../../components/navigation/Navbar'
import { About } from '../../sections/About/About'
import { Cta } from '../../sections/CTA/Cta'
import { Hero } from '../../sections/Hero/Hero'
import { Markets } from '../../sections/Markets/Markets'
import { Security } from '../../sections/Security/Security'
import { Services } from '../../sections/Services/Services'
import { Statistics } from '../../sections/Statistics/Statistics'

export function Home() { return <><Navbar /><main><Hero /><About /><Services /><Markets /><Security /><Statistics /><Cta /></main><Footer /></> }
