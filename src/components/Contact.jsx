import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const contactEmail = 'web.shujaa396@gmail.com'

function Contact() {
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const subject = String(data.get('subject')).trim()
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()
    const body = `Hi Shujaa,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFeedback('Your email app should open with your message. If it doesn’t, email me directly using the address below.')
    window.location.href = mailto
  }

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container">
        <div className="contact-banner">
          <div className="contact-banner-glow" />
          <div className="contact-banner-copy">
            <p className="eyebrow">HAVE A PROJECT IN MIND? <span className="eyebrow-rule" /></p>
            <h2>Let&apos;s make something <span className="text-gradient">meaningful.</span></h2>
            <p>Have an idea, a question or a project to discuss? I&apos;d be glad to hear from you.</p>
          </div>
          <a className="button button-primary contact-banner-button" href={`mailto:${contactEmail}?subject=${encodeURIComponent('Project inquiry')}`}>
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-grid">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">GET IN TOUCH <span className="eyebrow-rule" /></p>
            <h3>Let&apos;s talk about what you&apos;re building.</h3>
            <p className="contact-details-copy">Use the form to prepare an email, or reach out through one of these channels.</p>
            <a className="contact-detail" href={`mailto:${contactEmail}`}>
              <span className="detail-icon"><Mail size={18} /></span>
              <span><small>Email me</small><b>{contactEmail}</b></span>
              <ArrowUpRight size={15} />
            </a>
            <div className="contact-detail contact-location">
              <span className="detail-icon"><MapPin size={18} /></span>
              <span><small>Location</small><b>Pakistan</b></span>
            </div>
            <div className="contact-social-links">
              <a href="https://github.com/Shujaa396" target="_blank" rel="noreferrer"><FaGithub size={17} /> GitHub</a>
              <a href="https://linkedin.com/in/syed-shujaa-hussain-69113b289" target="_blank" rel="noreferrer"><FaLinkedin size={17} /> LinkedIn</a>
            </div>
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="form-heading"><span>Send a message</span><span className="form-required">* Required fields</span></div>
            <p className="form-disclaimer">This form opens your email app to send your message; it does not submit to a website backend.</p>
            <div className="form-row">
              <label>Name <span>*</span><input type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength="100" /></label>
              <label>Email <span>*</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength="254" /></label>
            </div>
            <label>Subject <span>*</span><input type="text" name="subject" placeholder="What is this about?" required maxLength="150" /></label>
            <label>Message <span>*</span><textarea name="message" rows="5" placeholder="Tell me a little about your project..." required maxLength="3000" /></label>
            <button type="submit" className="button button-primary form-submit">Prepare email <Send size={16} /></button>
            {feedback && <p className="form-feedback" role="status">{feedback}</p>}
          </motion.form>
        </div>
        <p className="contact-note">No email app configured? Write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a> directly.</p>
      </div>
    </section>
  )
}

export default Contact
