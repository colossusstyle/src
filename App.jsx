import { createRoot } from 'react-dom/client'
import './index.css'
import Headshot from './Headshot.jsx'
import Main from './Main.jsx'

export default function App() {
  return (
    <>
      <Headshot />
      <Main />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)