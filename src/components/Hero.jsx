import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const lines = [
  <><span className="code-purple">const</span> developer = {'{'}</>,
  <>&nbsp;&nbsp;name: <span className="code-green">&apos;Shujaa Hussain&apos;</span>,</>,
  <>&nbsp;&nbsp;role: <span className="code-green">&apos;Full-Stack Developer&apos;</span>,</>,
  <>&nbsp;&nbsp;focus: [<span className="code-green">&apos;web&apos;</span>, <span className="code-green">&apos;mobile&apos;</span>],</>,
  <>&nbsp;&nbsp;basedIn: <span className="code-green">&apos;Pakistan&apos;</span>,</>,
  <>{'}'}</>,
]

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="availability"><span className="availability-dot" /> Project inquiries welcome</div>
          <p className="eyebrow">FULL-STACK WEB DEVELOPER <span className="eyebrow-rule" /></p>
          <h1>Building digital experiences that <span className="text-gradient">make an impact.</span></h1>
          <p className="hero-intro">
            I&apos;m Shujaa Hussain, a Full-Stack Web Developer. I build modern,
            responsive and user-focused digital experiences for businesses.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Contact me <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span>Find me on</span>
            <a href="https://github.com/Shujaa396" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub size={17} /> GitHub
            </a>
            <i />
            <a href="https://linkedin.com/in/syed-shujaa-hussain-69113b289" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="visual-glow" />
          <div className="editor-card">
            <div className="editor-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span className="editor-tab"><span className="tab-indicator" /> profile.js</span>
              <span className="editor-menu">•••</span>
            </div>
            <div className="editor-content">
              <div className="editor-gutter" aria-hidden="true">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09</div>
              <pre aria-label="Developer profile code"><code>
                <span className="code-comment">// a little about me</span>{'\n'}
                {lines.map((line, index) => <span className="code-line" key={index}>{line}{'\n'}</span>)}
                {'\n'}<span className="code-purple">export default</span> developer;
              </code></pre>
            </div>
            <div className="editor-status">
              <span><i /> Ready to build</span>
              <span>JavaScript&nbsp;&nbsp; UTF-8</span>
            </div>
          </div>
          <motion.div
            className="floating-note note-top"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="note-icon">&lt;/&gt;</span><span>Thoughtful code<br /><b>Built with care</b></span>
          </motion.div>
          <motion.div
            className="floating-note note-bottom"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="note-spark">✳</span><span>Design-minded<br /><b>Developer</b></span>
          </motion.div>
          <div className="hero-scroll"><ArrowDown size={14} /> SCROLL TO EXPLORE</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
