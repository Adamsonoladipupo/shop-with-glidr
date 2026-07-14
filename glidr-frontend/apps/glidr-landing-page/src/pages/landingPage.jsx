import "../styles/landingPage.css"
import CallToAction from "../components/CallToAction/CallToAction"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import OurFeatures from "../components/OurFeatures/OurFeatures"
import ProvenMetrics from "../components/ProvenMetrics/ProvenMetrics"
import ShopSmarter from "../components/ShopSmarter/ShopSmarter"

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProvenMetrics />
            <OurFeatures />
            <ShopSmarter />
            <CallToAction />
            <Footer />
        </>
    )
}
export default LandingPage