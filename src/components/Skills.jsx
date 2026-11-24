import { motion } from 'framer-motion'
import { Braces, Code2, Smartphone } from 'lucide-react'

const groups = [
  { title: 'Frontend', description: 'Crafting clean, responsive interfaces for the web.', icon: Code2, skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Programming', description: 'Building a strong foundation in programming concepts.', icon: Braces, skills: ['C++', 'Dart'] },
  { title: 'Mobile development', description: 'Exploring cross-platform apps and mobile experiences.', icon: Smartphone, skills: ['Flutter'] },
]

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">TOOLS OF THE TRADE <span className="eyebrow-rule" /></p>
            <h2>Skills &amp; <span className="text-gradient">technologies.</span></h2>
          </div>
          <p className="section-aside">The technologies I use to explore ideas and bring thoughtful digital experiences to life.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                whileHover={{ y: -4 }}
              >
                <div className="skill-card-head">
                  <span className={`skill-icon skill-icon-${index}`}><Icon size={20} /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
