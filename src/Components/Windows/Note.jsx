import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
import MacWindows from './MacWindows';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ windowName, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null)
  useEffect(()=>{
    fetch('/note.txt')
       .then(res => res.text())
       .then(text => setMarkdown(text))
  }, [])
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="note-windows text-white text-xs p-4">
        {markdown ? (
          <Markdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atelierDuneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindows>
  )
}

export default Note;
