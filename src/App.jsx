import MainLayout from './templates/MainLayout'
import Navbar from './components/navbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </MainLayout>
  )
}

export default App
