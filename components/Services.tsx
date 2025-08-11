'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Users, 
  Database, 
  Shield,
  Zap,
  Settings,
  BookOpen,
  Headphones
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Django, and Node.js. From simple websites to complex enterprise solutions.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development',
        'Database Design',
        'Performance Optimization'
      ],
      price: 'From $2,000',
      duration: '2-8 weeks'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Beautiful, responsive user interfaces that provide exceptional user experience across all devices and browsers.',
      features: [
        'React.js Applications',
        'Responsive Design',
        'UI/UX Implementation',
        'Progressive Web Apps',
        'Cross-browser Compatibility',
        'Performance Optimization'
      ],
      price: 'From $1,500',
      duration: '1-4 weeks'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side applications with secure APIs, database design, and scalable architecture.',
      features: [
        'Python/Django Applications',
        'Node.js/Express APIs',
        'Database Design & Optimization',
        'Authentication & Security',
        'Third-party Integrations',
        'Server Deployment'
      ],
      price: 'From $1,800',
      duration: '2-6 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Responsive web applications optimized for mobile devices with touch-friendly interfaces and fast loading times.',
      features: [
        'Mobile-Responsive Design',
        'Touch-Optimized UI',
        'Progressive Web Apps',
        'Mobile Performance',
        'Cross-platform Compatibility',
        'App-like Experience'
      ],
      price: 'From $1,200',
      duration: '1-3 weeks'
    },
    {
      icon: Users,
      title: 'Computer Training',
      description: 'Comprehensive computer programming and computer packages training for individuals and organizations.',
      features: [
        'Programming Fundamentals',
        'Web Development Courses',
        'Computer Packages Training',
        'One-on-One Mentoring',
        'Corporate Training',
        'Curriculum Development'
      ],
      price: 'From $50/hour',
      duration: 'Flexible'
    },
    {
      icon: Settings,
      title: 'Technical Consulting',
      description: 'Expert advice on technology choices, architecture decisions, and development best practices.',
      features: [
        'Technology Stack Selection',
        'Architecture Planning',
        'Code Review & Audits',
        'Performance Analysis',
        'Security Assessment',
        'Development Strategy'
      ],
      price: 'From $100/hour',
      duration: 'As needed'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive software development and computer training services designed to help 
            businesses and individuals achieve their technology goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Duration */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <div className="text-lg font-bold text-primary-600">{service.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</div>
                </div>
                <motion.button
                  className="btn-primary text-sm py-2 px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose <span className="text-gradient">Me</span>?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I combine technical expertise with a passion for delivering exceptional results and 
              helping clients achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising quality'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and best practices implementation'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Ongoing support and maintenance after delivery'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Transfer',
                description: 'Comprehensive documentation and training provided'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
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
            Ready to start your project or need training?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Training
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 