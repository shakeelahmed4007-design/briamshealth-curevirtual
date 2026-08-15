import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import CureVirtual from './pages/CureVirtual'
import SolutionsPage from './pages/SolutionsPage'
import Providers from './pages/Providers'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="curevirtual" element={<CureVirtual />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="providers" element={<Providers />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
