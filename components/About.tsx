'use client'

import { motion } from 'framer-motion'
import { Code, Users, BookOpen, Award, Globe, Heart } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in both frontend and backend technologies with modern frameworks and tools.'
    },
    {
      icon: Users,
      title: 'Computer Training',
      description: 'Experienced trainer in computer programming and computer packages for all skill levels.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and industry best practices.'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Committed to delivering high-quality, scalable, and maintainable code solutions.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding of international development standards and cross-cultural collaboration.'
    },
    {
      icon: Heart,
      title: 'Passion for Tech',
      description: 'Genuine enthusiasm for technology and helping others succeed in their digital journey.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate software developer and computer trainer with a mission to create innovative solutions 
            and empower others through technology education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              My Journey in Technology
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I started my programming journey in 2019, driven by curiosity and a desire to solve real-world 
                problems through technology. What began as a hobby quickly evolved into a passion and profession.
              </p>
              <p>
                Over the years, I've developed expertise in modern web technologies including Python, Django, 
                React, and the MERN stack. I've also mastered frontend frameworks like Tailwind CSS and Bootstrap 
                to create beautiful, responsive user interfaces.
              </p>
              <p>
                As a computer trainer, I've had the privilege of teaching both computer programming and computer 
                packages to students of all skill levels. This experience has not only enhanced my communication 
                skills but also deepened my understanding of how people learn and adapt to new technologies.
              </p>
              <p>
                I believe in continuous learning and staying updated with industry trends. Every project is an 
                opportunity to grow, and every challenge is a chance to innovate.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Ready to work together on your next project?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 