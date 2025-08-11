'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code2, Globe, Smartphone } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Django and React. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'Full-Stack',
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/lewismwaura/ecommerce',
      features: ['User Authentication', 'Product Management', 'Payment Integration', 'Admin Dashboard', 'Responsive Design']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking. Built using MERN stack with Socket.io for real-time features.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Socket.io', 'JWT'],
      category: 'Full-Stack',
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/lewismwaura/task-app',
      features: ['Real-time Updates', 'Team Collaboration', 'Progress Tracking', 'User Management', 'Mobile Responsive']
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and SEO optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      category: 'Frontend',
      liveUrl: 'https://lewismwaura.com',
      githubUrl: 'https://github.com/lewismwaura/portfolio',
      features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'SEO Optimized', 'Fast Loading']
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform for computer training with course management, student progress tracking, and interactive lessons. Built with Django and Bootstrap.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'Bootstrap', 'PostgreSQL', 'Celery', 'Redis'],
      category: 'Backend',
      liveUrl: 'https://lms-demo.com',
      githubUrl: 'https://github.com/lewismwaura/lms',
      features: ['Course Management', 'Student Tracking', 'Interactive Lessons', 'Progress Reports', 'Admin Panel']
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts. Integrates with multiple weather APIs and provides location-based services.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'JavaScript', 'Weather API', 'Geolocation', 'Chart.js'],
      category: 'Frontend',
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/lewismwaura/weather-app',
      features: ['Current Weather', 'Forecasts', 'Location Services', 'Interactive Charts', 'Responsive Design']
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory management solution for small businesses. Features include stock tracking, supplier management, and reporting tools.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'Bootstrap', 'SQLite', 'Chart.js', 'Pandas'],
      category: 'Full-Stack',
      liveUrl: 'https://inventory-demo.com',
      githubUrl: 'https://github.com/lewismwaura/inventory',
      features: ['Stock Tracking', 'Supplier Management', 'Reporting Tools', 'Barcode Scanning', 'Data Export']
    }
  ]

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating expertise in full-stack development, 
            modern web technologies, and creative problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary-600" />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Have a project in mind? Let's bring your ideas to life!
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 