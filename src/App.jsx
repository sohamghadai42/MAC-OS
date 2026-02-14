import { useState } from 'react'
import Dock from './Components/Dock'
import './index.css';
import Nav from './Components/Nav';
import MacWindows from './Components/Windows/MacWindows';
import Github from './Components/Windows/Github';
import Note from './Components/Windows/Note';
import Resume from './Components/Windows/Resume';
import Spotify from './Components/Windows/Spotify';
import Cli from './Components/Windows/Cli';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <>
    <main className='h-full w-full bg-[url("./public/bg.avif")] bg-no-repeat bg-center bg-cover'>
      <Dock windowState={windowState} setWindowState={setWindowState}/>
      <Nav/>
      {windowState.github && <Github windowName='github' windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.note && <Note windowName='note' windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.resume && <Resume windowName='resume' windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.spotify && <Spotify windowName='spotify' windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.cli && <Cli windowName='cli' windowState={windowState} setWindowState={setWindowState}/>}
      
    </main>
    </>
  )
}

export default App
