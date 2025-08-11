'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield,
  Zap,
  Layers
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'SQL', level: 88, color: 'from-green-500 to-emerald-500' }
      ]
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 92, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 88, color: 'from-gray-800 to-black' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-600' },
        { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'AJAX', level: 87, color: 'from-green-400 to-blue-500' }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Django', level: 90, color: 'from-green-600 to-green-700' },
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 83, color: 'from-gray-600 to-gray-700' },
        { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-500' },
        { name: 'PostgreSQL', level: 82, color: 'from-blue-500 to-blue-600' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & Full-Stack',
      skills: [
        { name: 'MERN Stack', level: 88, color: 'from-green-500 to-blue-500' },
        { name: 'Responsive Design', level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Progressive Web Apps', level: 80, color: 'from-blue-500 to-purple-500' },
        { name: 'RESTful APIs', level: 90, color: 'from-indigo-500 to-purple-500' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-red-500' }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'from-gray-700 to-gray-800' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS Basics', level: 70, color: 'from-orange-500 to-yellow-500' },
        { name: 'CI/CD', level: 78, color: 'from-green-500 to-blue-500' },
        { name: 'Linux/Ubuntu', level: 85, color: 'from-orange-600 to-red-600' }
      ]
    },
    {
      icon: Shield,
      title: 'Computer Training',
      skills: [
        { name: 'Programming Basics', level: 95, color: 'from-green-500 to-emerald-500' },
        { name: 'Computer Packages', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'Curriculum Development', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Student Mentoring', level: 92, color: 'from-yellow-500 to-orange-500' },
        { name: 'Technical Documentation', level: 88, color: 'from-gray-500 to-gray-600' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive set of technical skills and expertise developed over 4+ years of hands-on experience 
            in software development and computer training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Additional <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Agile Methodologies',
              'Test-Driven Development',
              'Performance Optimization',
              'Security Best Practices',
              'Code Review',
              'Team Collaboration',
              'Problem Solving',
              'Technical Writing'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill}
                  </span>
                </div>
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
            Looking for a developer with these skills?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 