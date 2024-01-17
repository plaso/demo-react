import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import './App.css'

const className = 'mainn';

// Element
const paragraphElement = <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odit vitae maiores blanditiis magni nulla, non laborum iusto hic? Atque harum accusantium amet quas quasi doloremque debitis reprehenderit iste qui!</p>

// Component
function App() {


  return (
    <div id="home" className={className}>
      <Navbar />
      <h1>Hello world</h1>
      <hr />

      {/* <img src="https://vitejs.dev/logo.svg" alt="" />
      <img src="/vite.svg" alt="" />
      <img src={logo} alt="" /> */}

      {paragraphElement}

      <List />
    </div>
  )
}

export default App
