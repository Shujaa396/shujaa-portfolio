import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, LayoutTemplate, MonitorSmartphone, PanelsTopLeft, Wrench } from 'lucide-react'

const services = [
  { title: 'Business website development', description: 'A polished web presence that introduces your business and makes key information easy to find.', icon: PanelsTopLeft },
  { title: 'Responsive website design', description: 'Thoughtful layouts that adapt smoothly across desktop, tablet and mobile screens.', icon: MonitorSmartphone },
  { title: 'Landing page development', description: 'Focused, well-structured pages designed to explain an offer and guide visitors to act.', icon: LayoutTemplate },
  { title: 'React frontend development', description: 'Reusable, interactive frontend experiences built with modern React patterns.', icon: Code2 },
  { title: 'Website maintenance', description: 'Ongoing updates and refinements to help keep your website clear, current and reliable.', icon: Wrench },
]

function Services() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">HOW I CAN HELP <span className="eyebrow-rule" /></p>
          <h2>Thoughtful work, <span className="text-gradient">built around you.</span></h2>
          <p className="services-intro">Practical web development services for ideas at every stage.</p>
        </div>
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.a
                className="service-row"
                href="#contact"
                key={service.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon"><Icon size={19} /></span>
                <span className="service-copy"><b>{service.title}</b><small>{service.description}</small></span>
                <span className="service-arrow"><ArrowUpRight size={18} /></span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
