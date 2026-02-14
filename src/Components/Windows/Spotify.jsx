import React from 'react'
import MacWindows from './MacWindows';

const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
    <div className='h-full w-full'>
      <iframe className='h-full w-full border-none' data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </MacWindows>
  )
}

export default Spotify;
