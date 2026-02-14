import React from 'react'
import MacWindows from './MacWindows';
import Terminal from 'react-console-emulator';

const Cli = ({ windowName, setWindowState }) => {
  const commandList = [
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'contact',
    'socials',
    'resume',
    'whoami',
    'date',
    'echo'
  ];

  const welcomeMessage = [
    'Welcome to Soham\'s portfolio terminal.',
    '',
    'Available commands:',
    commandList.join(', '),
    '',
    'Tip: Run "help" to see command descriptions.'
  ].join('\n');

  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
        <div className='h-full wfull'>
            <Terminal className="h-full w-full"
              commands={{
                about: {
                  description: 'Quick intro about Soham.',
                  usage: 'about',
                  fn: () =>
                    'Full-stack developer focused on React, Node.js, and building polished product experiences.'
                },
                skills: {
                  description: 'Show core tech stack.',
                  usage: 'skills',
                  fn: () =>
                    'Frontend: React, Next.js, Tailwind | Backend: Node.js, Express, PostgreSQL | Tools: Git, Docker, AWS'
                },
                projects: {
                  description: 'Show featured portfolio projects.',
                  usage: 'projects',
                  fn: () =>
                    '1) Mac-OS Portfolio UI\n2) AI Resume Analyzer\n3) Real-time Chat App\n4) E-commerce Dashboard'
                },
                experience: {
                  description: 'Show a short experience summary.',
                  usage: 'experience',
                  fn: () =>
                    'Built and shipped multiple production web apps with focus on performance, UX, and clean architecture.'
                },
                education: {
                  description: 'Show education details.',
                  usage: 'education',
                  fn: () =>
                    'BCA(AI & ML) in Information Technology. Strong foundation in DSA, web systems, and software engineering.'
                },
                contact: {
                  description: 'Show contact details.',
                  usage: 'contact',
                  fn: () => 'Email: soham@example.com | Location: India | Availability: Open to opportunities'
                },
                socials: {
                  description: 'Show social links.',
                  usage: 'socials',
                  fn: () =>
                    'GitHub: github.com/your-handle\nLinkedIn: linkedin.com/in/your-handle\nPortfolio: soham.dev'
                },
                resume: {
                  description: 'How to access the resume window.',
                  usage: 'resume',
                  fn: () => 'Open the Resume app from the desktop/dock to view or download the latest CV.'
                },
                whoami: {
                  description: 'Print terminal user.',
                  usage: 'whoami',
                  fn: () => 'sohamghadai'
                },
                date: {
                  description: 'Show current local date and time.',
                  usage: 'date',
                  fn: () => new Date().toString()
                },
                echo:{
                    description: 'Echo a passed string.',
                    usage: 'echo <string>',
                    fn: (...args)=> args.join(' ')
                }
              }}
              welcomeMessage = {welcomeMessage}
              promptLabel = {'sohamghadai:~$'}
              promptLabelStyle = {{color: '#00ff00'}} 
            />
        </div>
    </MacWindows>
  )
}

export default Cli;
