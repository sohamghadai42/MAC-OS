import React from 'react'
import MacWindows from './MacWindows';

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
        <div className='h-full overflow-auto'>
            <iframe src="/resume.pdf" frameBorder="0" className='h-full w-full'></iframe>
        </div>
    </MacWindows>
  )
}

export default Resume;
