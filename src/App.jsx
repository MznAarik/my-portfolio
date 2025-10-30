import MainLayout from './templates/MainLayout'
import Navbar from './components/navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { About } from './components/About'
import Skills from './components/Skills'
import Footer from './components/Contact'

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </MainLayout>
  )
}

export default App
