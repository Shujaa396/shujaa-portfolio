import { motion } from 'framer-motion'
import { ArrowDownRight, Blocks, Braces, Lightbulb, MonitorSmartphone } from 'lucide-react'

function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME <span className="eyebrow-rule" /></p>
          <h2>Curiosity meets <span className="text-gradient">craft.</span></h2>
        </div>
        <div className="about-grid">
          <motion.div
            className="about-art"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-art-halo" />
            <div className="about-card">
              <div className="about-card-top"><span>MY APPROACH</span><span className="about-card-index">01 — 03</span></div>
              <div className="orbit orbit-outer"><div className="orbit-dot" /></div>
              <div className="orbit orbit-inner"><div className="orbit-dot" /></div>
              <div className="orbit-core"><Braces size={30} /></div>
              <div className="orbit-label label-idea"><Lightbulb size={15} /> Idea</div>
              <div className="orbit-label label-build"><Blocks size={15} /> Build</div>
              <div className="orbit-label label-refine"><MonitorSmartphone size={15} /> Refine</div>
              <div className="about-card-bottom">
                <span>Learn. Build. Improve.</span>
                <ArrowDownRight size={18} />
              </div>
            </div>
            <span className="art-caption">Thoughtful digital craft, from first idea to final detail.</span>
          </motion.div>
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="about-lead">I enjoy turning ideas into useful, clear and well-crafted digital products.</p>
            <p>
              I&apos;m Shujaa, a developer based in Pakistan with an interest in building
              for the web and mobile. I like exploring how thoughtful design and
              reliable code can make everyday experiences easier to use.
            </p>
            <p>
              My approach starts with understanding the problem, then breaking it
              into manageable steps. I focus on responsive interfaces, readable
              implementation and the small details that make a product feel complete.
              I&apos;m always learning and looking for ways to make my work better.
            </p>
            <div className="about-location"><span className="location-pin" /> Based in Pakistan <span className="about-divider" /> Open to meaningful projects</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
