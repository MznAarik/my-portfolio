import MainLayout from './templates/MainLayout'
import Navbar from './components/navbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import Skills from './pages/Skills'
import Footer from './pages/Contact'

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </MainLayout>
  )
}

export default App
