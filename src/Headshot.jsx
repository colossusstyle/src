import './index.css'
import babyYoda from './assets/babyyoda.png'

export default function Headshot() {
    return (
        <>
            <img src={babyYoda} className="headshot" alt="Baby yoda with fitted hat" />
        </>
    )
}
