import React, { useState } from 'react';
import { User, Briefcase, Award, Trophy, Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Home', icon: User },
    { id: 'portfolio', name: 'Portfolio', icon: Briefcase },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'hackathons', name: 'Hackathons', icon: Trophy }
  ];

  const projects = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed an intelligent chatbot using NLP and machine learning to provide customer support with 85% accuracy.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Campus Navigator',
      description: 'Mobile application for campus navigation with real-time location tracking and event notifications.',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'IoT Weather Station',
      description: 'Built an automated weather monitoring system using Arduino and cloud integration for data analytics.',
      tech: ['Arduino', 'IoT', 'Python', 'AWS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology to ensure vote integrity.',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      github: '#',
      demo: '#'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'December 2024',
      credential: 'AWS-CSA-2024-12345'
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      date: 'October 2024',
      credential: 'GCP-PDE-2024-67890'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'August 2024',
      credential: 'AZ-900-2024-11223'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera - deeplearning.ai',
      date: 'June 2024',
      credential: 'DLS-2024-44556'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'April 2024',
      credential: 'CKA-2024-77889'
    }
  ];

  const hackathons = [
    {
      name: 'Smart India Hackathon 2024',
      position: '1st Place',
      score: '98/100',
      prize: '₹1,00,000',
      project: 'Digital Healthcare Platform'
    },
    {
      name: 'HackMIT 2024',
      position: 'Top 10',
      score: '92/100',
      prize: '$5,000',
      project: 'AI Code Review Assistant'
    },
    {
      name: 'Google Solution Challenge',
      position: '2nd Place - India',
      score: '95/100',
      prize: '$3,000',
      project: 'EduConnect - Rural Education Platform'
    },
    {
      name: 'Microsoft Imagine Cup',
      position: 'Finalist',
      score: '89/100',
      prize: '$2,500',
      project: 'Smart Farming IoT Solution'
    },
    {
      name: 'ETHIndia 2023',
      position: 'Best Use of Blockchain',
      score: '91/100',
      prize: '₹50,000',
      project: 'Decentralized Identity System'
    }
  ];

  const HomePage = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl font-bold border-4 border-white/30">
            AS
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Arjun Sharma</h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">Computer Science Engineering Student</p>
            <p className="text-lg text-blue-50">Passionate about AI, Cloud Computing, and Building Innovative Solutions</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <User className="text-blue-600" /> About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a final-year Computer Science Engineering student at the Indian Institute of Technology, Delhi. 
            With a strong foundation in software development and a passion for emerging technologies, I've completed 
            multiple internships and won several national-level hackathons.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My areas of interest include Machine Learning, Cloud Architecture, and Full-Stack Development. I believe 
            in continuous learning and contributing to open-source projects.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science</h3>
              <p className="text-gray-600">Indian Institute of Technology, Delhi</p>
              <p className="text-gray-500">2021 - 2025 (Expected)</p>
              <p className="text-blue-600 font-semibold">CGPA: 9.2/10</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Higher Secondary (XII)</h3>
              <p className="text-gray-600">Delhi Public School, Mumbai</p>
              <p className="text-gray-500">2019 - 2021</p>
              <p className="text-purple-600 font-semibold">Percentage: 96%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {['Python', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 
            'MongoDB', 'PostgreSQL', 'Git', 'Java', 'C++', 'Machine Learning', 'Cloud Computing'].map(skill => (
            <span key={skill} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Connect With Me</h2>
        <div className="flex gap-4">
          <a href="javascript:void(0)" className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            <Github size={20} /> GitHub
          </a>
          <a href="javascript:void(0)" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="javascript:void(0)" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            <Mail size={20} /> Email
          </a>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
        <p className="text-blue-100">Showcasing my technical projects and innovations</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                <Github size={18} /> Code
              </a>
              <a href={project.demo} className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CertificationsPage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Certifications</h1>
        <p className="text-green-100">Professional certifications and achievements</p>
      </div>
      
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Award className="text-green-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>📅 {cert.date}</span>
                  <span>🔖 {cert.credential}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const HackathonsPage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Hackathon Achievements</h1>
        <p className="text-orange-100">Competition wins and recognitions</p>
      </div>
      
      <div className="space-y-4">
        {hackathons.map((hack, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Trophy className="text-orange-600" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{hack.name}</h3>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hack.position}
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">Project: {hack.project}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-blue-600 font-semibold">Score: {hack.score}</span>
                  <span className="text-green-600 font-semibold">Prize: {hack.prize}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'portfolio': return <PortfolioPage />;
      case 'certifications': return <CertificationsPage />;
      case 'hackathons': return <HackathonsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white shadow-xl fixed h-screen">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold">Arjun Sharma</h2>
            <p className="text-sm text-blue-100">Portfolio</p>
          </div>
          <nav className="flex-1 p-4">
            {navigation.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold text-gray-800">Arjun Sharma</h2>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <nav className="border-t">
              {navigation.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 ${
                      currentPage === item.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 md:p-8 mt-16 md:mt-0">
          <div className="max-w-6xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;