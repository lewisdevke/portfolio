'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, Users, Code2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: '2023 - Present',
      title: 'Senior Software Developer',
      company: 'Tech Solutions Kenya',
      location: 'Nairobi, Kenya',
      description: 'Leading development teams in creating scalable web applications using Python, Django, and React. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led development of 3 major client projects',
        'Improved team productivity by 40%',
        'Implemented CI/CD pipelines',
        'Reduced bug reports by 60%'
      ],
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      period: '2021 - 2023',
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Ltd',
      location: 'Nairobi, Kenya',
      description: 'Developed and maintained multiple web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built 5+ client websites',
        'Integrated payment gateways',
        'Optimized database performance',
        'Implemented responsive designs'
      ],
      technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'JavaScript', 'Bootstrap']
    },
    {
      period: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Startup Hub Africa',
      location: 'Nairobi, Kenya',
      description: 'Started as a junior developer, quickly learning modern web technologies and contributing to various projects.',
      achievements: [
        'Learned React and Node.js',
        'Contributed to 3 startup projects',
        'Gained experience with Git workflows',
        'Participated in code reviews'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Git', 'Bootstrap', 'jQuery']
    },
    {
      period: '2019 - 2020',
      title: 'Computer Programming Trainer',
      company: 'Pearl Training Institute',
      location: 'Ndenderu - Kiambu, Kenya',
      description: 'Began teaching computer programming basics to beginners, developing curriculum and mentoring students.',
      achievements: [
        'Trained 50+ students',
        'Developed beginner curriculum',
        'Improved student success rate',
        'Created learning materials'
      ],
      technologies: ['Python', 'HTML/CSS', 'JavaScript', 'Computer Basics']
    }
  ]

  const education = [
    {
      period: '2022 - 2025',
      title: 'Diploma in Information Communication Technology',
      institution: 'Kiambu National Polytechnic',
      location: 'Kiambu, Kenya',
      description: 'Studied Information Communication Technology (ICT) with focus on software engineering, algorithms, and web development.',
      achievements: ['2nd best in world skills competition', '1st best in regional and national skills competition', 'Dean\'s List', 'Best Final Year Project']
    },
    {
      period: '2020 - 2021',
      title: 'Certificate in Computer Programming and Web Development',
      institution: 'Mt Kenya University',
      location: 'Thika, Kenya',
      description: 'Studied Computer Programming and Web Development with focus on software engineering, algorithms, and web development.',
      achievements: ['Distinction', 'Dean\'s List', 'Best Final Year Project']
    },
    {
      period: '2019 - 2020',
      title: 'Computer Programming Certification',
      institution: 'Online Courses',
      location: 'Online', 
      description: 'Intensive programming bootcamp covering web development fundamentals and modern frameworks.',
      achievements: ['Full-Stack Development', 'Agile Methodologies', 'Project Management']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey of continuous growth and learning in software development and computer training, 
            with a track record of delivering successful projects and empowering others.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            Work Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 relative"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-8 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2"></div>
                
                <div className="ml-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-primary-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary-600" />
                      Key Achievements
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Code2 className="w-4 h-4 mr-2 text-primary-600" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            Education & Training
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center text-primary-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{edu.period}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {edu.title}
                </h4>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <Building className="w-4 h-4 mr-2" />
                  <span>{edu.institution}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {edu.description}
                </p>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-primary-600" />
                    Achievements
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready to leverage this experience for your project?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 