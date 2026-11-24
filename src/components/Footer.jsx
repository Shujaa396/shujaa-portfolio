import { ArrowUpRight, Braces } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Braces size={18} strokeWidth={2.2} /></span>
          <span>SHUJAA<span className="brand-dot">.</span></span>
        </a>
        <p>Shujaa Hussain <span>·</span> Full-Stack Web Developer</p>
        <div className="footer-social">
          <a href="https://github.com/Shujaa396" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub size={17} /></a>
          <a href="https://linkedin.com/in/syed-shujaa-hussain-69113b289" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin size={17} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Shujaa Hussain. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
