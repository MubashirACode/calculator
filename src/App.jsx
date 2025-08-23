import { Route, Routes } from "react-router-dom"


import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { BasicCalculator } from "./pages/BasicCalculator"
import { Footer } from "./components/Footer"
import { ScientificCalculator } from "./pages/ScientificCalculator"
import { CurrencyConverter } from "./pages/CurrencyConverter"
import { UnitConverter } from "./pages/UnitConverter"
import { PercentageCalculator } from "./pages/PercentageCalculator"
import { GraphingCalculator } from "./pages/GraphingCalculator"
import { FinancialCalculator } from "./pages/FinancialCalculator"
import { BMICalculator } from "./pages/BMICalculator"
import { AboutUspage } from "./pages/AboutUspage"
import { Calculatorspage } from "./pages/Calculatorspage"
import { Testimonialsapge } from "./pages/Testimonialsapge"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"
import { TermsOfService } from "./pages/TermsOfService"
import { CookiePolicy } from "./pages/CookiePolicy"
import { Disclaimer } from "./pages/Disclaimer"


function App() {


  return (
    <>
      <Navbar />



      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUspage />} />
        <Route path="/all-calculator" element={<Calculatorspage />} />
        <Route path="/all-testimonials" element={<Testimonialsapge />} />
        <Route path="/basic" element={<BasicCalculator />} />
        <Route path="/scientific" element={<ScientificCalculator />} />
        <Route path="/currceny" element={<CurrencyConverter />} />
        <Route path="/unit" element={<UnitConverter />} />
        <Route path="/percent" element={<PercentageCalculator />} />
        <Route path="/graph" element={<GraphingCalculator />} />
        <Route path="/financial" element={<FinancialCalculator />} />
        <Route path="/bmical" element={<BMICalculator />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/disclamir" element={<Disclaimer />} />

      </Routes >

      <Footer />
    </>
  )
}

export default App
