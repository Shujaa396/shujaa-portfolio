import { motion } from 'framer-motion'
import { ArrowUpRight, BatteryCharging, GitBranch, ShoppingBag, Waypoints } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

const projects = [
  {
    number: '01',
    title: 'Shopping Cart Management System',
    description: 'A C++ project focused on managing a shopping cart and its items, with an emphasis on object-oriented structure and file-based data handling.',
    tags: ['C++', 'OOP', 'File handling'],
    type: 'cart',
    icon: ShoppingBag,
  },
  {
    number: '02',
    title: 'Smart Traffic System',
    description: 'A traffic-system concept exploring how core data structures can represent road connections and help organize traffic-related logic.',
    tags: ['C++', 'Data structures', 'Queues · Graphs · Arrays'],
    type: 'traffic',
    icon: Waypoints,
  },
  {
    number: '03',
    title: 'Phone Power Monitor',
    description: 'An Android battery-monitoring concept built with Flutter and Dart, exploring useful ways to surface device power information.',
    tags: ['Flutter', 'Dart', 'Android concept'],
    type: 'power',
    icon: BatteryCharging,
  },
]

function ProjectVisual({ type, Icon }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-grain" />
      {type === 'cart' && (
        <>
          <div className="cart-window">
            <div className="mini-window-head"><i /><i /><i /></div>
            <div className="cart-body">
              <div className="cart-bag"><ShoppingBag size={26} /></div>
              <span className="cart-line long" /><span className="cart-line short" />
              <div className="cart-button-mock"><span /> <b /> <b /></div>
            </div>
          </div>
          <div className="visual-float visual-float-cart"><Icon size={20} /></div>
        </>
      )}
      {type === 'traffic' && (
        <>
          <div className="traffic-map">
            <svg viewBox="0 0 360 180" role="presentation">
              <path d="M22 133 91 89l71 25 74-61 99 30M44 38l53 51-4 57 62 12 81-55 30 43" />
              <path d="M22 133 44 38m118 76 8-66m66 5 51 24m-71 37 37 41" />
            </svg>
            <span className="map-node node-a" /><span className="map-node node-b" /><span className="map-node node-c" /><span className="map-node node-d" />
          </div>
          <div className="visual-float visual-float-traffic"><Icon size={20} /></div>
        </>
      )}
      {type === 'power' && (
        <>
          <div className="phone-mock">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <span className="phone-time">9:41</span>
              <span className="phone-label">Battery level</span>
              <div className="battery-ring"><div><b>82</b><small>%</small></div></div>
              <div className="battery-caption"><span /><i>Power status</i></div>
            </div>
          </div>
          <div className="visual-float visual-float-power"><Icon size={20} /></div>
        </>
      )}
      <span className="visual-number">{type === 'cart' ? '01' : type === 'traffic' ? '02' : '03'}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="section-shell projects-section" id="projects">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">SELECTED WORK <span className="eyebrow-rule" /></p>
            <h2>Ideas made <span className="text-gradient">practical.</span></h2>
          </div>
          <a className="text-link" href="https://github.com/Shujaa396" target="_blank" rel="noreferrer">
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="projects-intro">A few projects that reflect what I&apos;ve been learning and building.</p>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.48, delay: index * 0.09 }}
                whileHover={{ y: -5 }}
              >
                <ProjectVisual type={project.type} Icon={Icon} />
                <div className="project-content">
                  <div className="project-meta"><span>PROJECT {project.number}</span><GitBranch size={14} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href="https://github.com/Shujaa396" target="_blank" rel="noreferrer">
                    <FaGithub size={16} /> View on GitHub <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
        <p className="project-link-note">Project buttons link to my GitHub profile; individual repository URLs have not been provided.</p>
      </div>
    </section>
  )
}

export default Projects
