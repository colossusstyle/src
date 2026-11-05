import { createRoot } from 'react-dom/client'
import './index.css'
import Headshot from './Headshot.jsx'
import Main from './Main.jsx'
import InformationBlock from './InformationBlock.jsx'
import Footer from './Footer.jsx'

export default function App() {
  return (
    <>
    <Headshot />
    <div className="app-body">
      <InformationBlock />
      <Main />
    </div>
    <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)