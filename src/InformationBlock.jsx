import './index.css'
import mailIcon from './assets/Mail.svg'
import linkedinIcon from './assets/linkedin.svg'

export default function InformationBlock() {
  return (
    <>
        <div className="information-text-container">
            <h1>First Last</h1>
            <h3>Job Title</h3>
            <p>website.website.com</p>
        </div>
        <div className="information-buttons">
            <button>
                <img src={mailIcon} alt="email icon" />
                email
                </button> 
                <button>
                    <img src={linkedinIcon} alt="linkedin icon" />
                    linkedin
                </button>
        </div>
    </> 
  ) 
}
