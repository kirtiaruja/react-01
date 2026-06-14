import {Bookmark} from 'lucide-react'
import './index.css'


function App() {

  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
          <img src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-icon-4.png' />
          <button>Save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
