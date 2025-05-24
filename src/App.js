import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router } from 'react-router-dom'
import './stylesheet/style.css'
import './stylesheet/navigationBar.css'
import './stylesheet/footer.css'
import './stylesheet/home.css'
import './stylesheet/skills.css'
import './stylesheet/about.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Particle from './components/Particle'

const App = () => {
  return (
    <Router>
      <div >
        <NavigationBar />
        <Particle />
      </div>
    </Router>
  )
}

export default App
