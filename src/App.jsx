import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaTimesCircle,
  FaLaravel,
  FaPhp,
  FaJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaFacebook,
  FaInstagram,
  FaPhone
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiApache } from 'react-icons/si'
import heroImg from './assets/hero.png'
import renz from './assets/images/renz.jpg'
import hr1 from './assets/videos/hr1.mp4'
import hr4 from './assets/videos/hr4.mp4'
import log1 from './assets/videos/log1.mp4'
import hr1Pic1 from './assets/images/hr1-pic1.png'
import hr1Pic2 from './assets/images/hr1-pic2.png'
import hr1Pic3 from './assets/images/hr1-pic3.png'
import hr4Pic1 from './assets/images/hr4-pic1.png'
import hr4Pic2 from './assets/images/hr4-pic2.png'
import hr4Pic3 from './assets/images/hr4-pic3.png'
import log1Pic1 from './assets/images/log1-pic1.png'
import log2Pic2 from './assets/images/log2-pic2.png'
import log2Pic3 from './assets/images/log2-pic3.png'
import comunionLogo from './assets/images/comunion.png'
import comunionPic1 from './assets/images/comunion-pic1.jpg'
import lightweightLogo from './assets/images/lightweight.png'
import lightweightPic1 from './assets/images/lightweight-pic1.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [enlargedImage, setEnlargedImage] = useState(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setEnlargedImage(null)
    document.body.style.overflow = 'auto'
  }

  const openEnlargedImage = (image) => {
    setEnlargedImage(image)
  }

  const closeEnlargedImage = () => {
    setEnlargedImage(null)
  }

  const projects = [
    {
      title: 'HR1 JETLOUGE TRAVELS',
      description: 'HR system for hiring, onboarding, records, and performance tracking processes efficiently.',
      detailedDescription: 'A Human Resource Management System (HRMS) platform developed to manage recruitment workflows, onboarding, performance tracking, employee records, and administrative processes. The system enhances HR efficiency through automation, monitoring, and centralized management tools tailored for travel and corporate business operations.',
      video: hr1,
      images: [hr1Pic1, hr1Pic2, hr1Pic3],
      github: '#',
      demo: 'https://hr1.jetlougetravels-ph.com/login',
      tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'HR4 JETLOUGE TRAVELS',
      description: 'HR system for managing employees, attendance, payroll, and recruitment in one centralized platform.',
      detailedDescription: 'A Human Resource Management System (HRMS) designed to streamline employee management, recruitment, attendance tracking, payroll processing, and internal HR operations. The platform provides a secure and efficient environment for managing workforce data, improving organizational productivity, and supporting employee engagement through a centralized digital system.',
      video: hr4,
      images: [hr4Pic1, hr4Pic2, hr4Pic3],
      github: 'https://github.com/rnzmrk/hr4',
      demo: 'https://hr4.jetlougetravels-ph.com/login',
      tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'LOG1 LUMINO',
      description: 'Smart warehousing system for Monitoring and logging system for tracking activities, records, and administrator operations.',
      detailedDescription: 'A Smart Warehousing Management System (SWMS) logging and monitoring management system built to handle operational records, activity tracking, user authentication logs, and system monitoring processes. The platform provides administrators with organized reporting tools, log management, and centralized access control to support efficient business and technical operations.',
      video: log1,
      images: [log1Pic1, log2Pic2, log2Pic3],
      github: 'https://github.com/rnzmrk/log1-lumino',
      demo: 'https://log1.lumino-ph.com/login',
      tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS']
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-brand-white text-brand-gray-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-brand-white/95 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <motion.div
              className="text-xl font-bold text-brand-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              RM
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item ? 'text-brand-blue-600' : 'text-brand-gray-600 hover:text-brand-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-brand-gray-600 hover:text-brand-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-brand-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                      activeSection === item
                        ? 'bg-brand-blue-50 text-brand-blue-600'
                        : 'text-brand-gray-600 hover:bg-brand-gray-50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex items-center justify-center relative px-4 pt-14">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient cursor-pointer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {['W', 'e', 'l', 'c', 'o', 'm', 'e', '!'].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-gray-600 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My name is{' '}
              {['R', 'e', 'n', 'z', 'e', 'm', 'a', 'r', 'k',  ' ','O', 'l', 'e', 'a'].map((char, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold bg-[length:200%_auto] animate-gradient cursor-pointer inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {char}
                </motion.span>
              ))}
              ! I'm a Web Developer.
            </motion.p>
            <motion.p
              className="text-brand-gray-500 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Laravel Developer specializing in building modern web applications
              with innovative solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[  
                { icon: FaGithub, href: 'https://github.com/rnzmrk' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/renzemark-olea-724271331/' },
                { icon: FaEnvelope, href: 'mailto:olearenzemark@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-600 hover:text-brand-blue-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={renz}
              alt="Renz"
              className="w-full max-w-sm rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-brand-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="bg-brand-white rounded-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-brand-black mb-3">Web  Developer</h3>
              <p className="text-brand-gray-600 leading-relaxed mb-4 text-sm">
                I'm a fresh graduate and passionate Web Application Developer who enjoys
                creating modern, responsive, and user-friendly websites and systems.
                I specialize in building web applications using Laravel,
                PHP, MySQL, Bootstrap, and Tailwind CSS.
              </p>
              <p className="text-brand-g gray-600 leading-relaxed text-sm">
                I love turning ideas into real projects and continuously improving my
                skills in frontend and backend development. I'm eager to learn new
                technologies, solve real-world problems, and grow as a developer while
                creating clean and efficient applications.
              </p>
            </motion.div>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-brand-black mb-4">What I Work With</h3>
              <motion.div
                className="space-y-2"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  'Full Stack Web Development using Laravel',
                  'Responsive and mobile-friendly web applications',
                  'Modern UI design with Tailwind CSS and Bootstrap',
                  'Database management using MySQL',
                  'System development for booking and management platforms',
                  'REST API integration and dynamic functionality',
                  'Clean, user-friendly, and scalable web solutions'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-brand-blue-600 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-brand-gray-600 text-sm">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OJT Training Section */}
      <section id="ojt" className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            On The Job Training
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={comunionPic1}
                alt="OJT Training"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="bg-brand-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={comunionLogo}
                  alt="Comunion"
                  className="h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-4 text-center">What I Do</h3>
              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  'Manage database operations and data integrity',
                  'Support system maintenance and troubleshooting',
                  'Monitor system performance and user activities',
                  'Enhance existing system functionality',
                  'Design and Create login UI/UX',
                  'Create frontend for Smart Warehousing System'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-brand-blue-600 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-brand-gray-600 text-sm">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightweight Solution Section */}
      <section id="lightweight" className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={lightweightPic1}
                alt="Lightweight Solution"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="bg-brand-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={lightweightLogo}
                  alt="Lightweight"
                  className="h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-4 text-center">What I Do</h3>
              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  'Create UI/UX for social marketing sales platform',
                  'Design responsive and user-friendly interfaces',
                  'Develop interactive features for customer engagement',
                  'Implement modern design patterns and best practices'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-brand-blue-600 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-brand-gray-600 text-sm">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-brand-white rounded-xl overflow-hidden transition-all cursor-pointer"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-48 bg-brand-gray-100">
                  <video
                    src={project.video}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{project.title}</h3>
                  <p className="text-brand-gray-600 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="text-xs px-2 py-1 bg-brand-blue-50 text-brand-blue-600 rounded-full border border-brand-blue-200"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-brand-gray-600 hover:text-brand-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-brand-gray-600 hover:text-brand-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-4 bg-brand-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
              { name: 'PHP', icon: FaPhp, color: '#777BB4' },
              { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
              { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
              { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
              { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
              { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
              { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Apache', icon: SiApache, color: '#D22128' },
              { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
              { name: 'Git', icon: FaGitAlt, color: '#F05032' },
              { name: 'GitHub', icon: FaGithub, color: '#181717' }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                variants={fadeInUp}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
                style={{ color: tech.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon size={16} />
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.div
            className="bg-brand-white rounded-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand-blue-600 outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand-blue-600 outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand-blue-600 outline-none transition-colors resize-none text-sm"
                  placeholder="Your message..."
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-2.5 bg-brand-blue-600 text-brand-white rounded-lg font-medium hover:bg-brand-blue-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Social Media & Contact Icons */}
            <motion.div
              className="flex justify-center gap-6 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: FaFacebook, href: 'https://www.facebook.com/wenz0lea', color: '#1877F2' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/renzemark-olea-724271331/', color: '#0A66C2' },
                { icon: FaInstagram, href: 'https://www.instagram.com/rnz.mrk/', color: '#E4405F' },
                { icon: FaPhone, href: 'tel:+639120357998', color: '#25D366', isTel: true },
                { icon: FaEnvelope, href: 'mailto:olearenzemark@email.com', color: '#EA4335', isMail: true },
                { icon: FaGithub, href: 'https://github.com/rnzmrk', color: '#181717' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.isTel || social.isMail ? undefined : '_blank'}
                  rel={social.isTel || social.isMail ? undefined : 'noopener noreferrer'}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-gray-200"
                  style={{ color: social.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto text-center text-brand-gray-600 text-sm">
          <p>&copy; 2026 RM - All rights reserved</p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-4 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-black">{selectedProject.title}</h2>
                <motion.button
                  onClick={closeProjectModal}
                  className="text-gray-600 hover:text-black transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimesCircle size={28} />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Images */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-black">Project Screenshots</h3>
                    <div className="space-y-4">
                      {selectedProject.images?.map((image, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl overflow-hidden cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => openEnlargedImage(image)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Video, Description, Links */}
                  <div className="space-y-6">
                    {/* Video */}
                    <div className="rounded-xl overflow-hidden">
                      <video
                        src={selectedProject.video}
                        className="w-full"
                        controls
                      />
                    </div>

                    {/* Detailed Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">About This Project</h3>
                      <p className="text-gray-800 leading-relaxed text-base">{selectedProject.detailedDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-black text-white rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="inline mr-2" />
                        View on GitHub
                      </motion.a>
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt className="inline mr-2" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnlargedImage}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeEnlargedImage}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimesCircle size={32} />
              </motion.button>
              <img
                src={enlargedImage}
                alt="Enlarged screenshot"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
