import React from 'react'
import MacWindows from './MacWindows'
import gitData from '../../assets/github.json'
import '../../index.css'

const GitCard = ({data = {id:1, image:"", title:"", description:"", tags:[], repoLink:"", demoLink:"" }})=>{
  return <div className="card flex flex-col gap-4 max-w-85 px-4 py-3 bg-[#1c1c1c] rounded-lg text-white grow basis-xs">
    <img src={data.image} alt="" className='w-full rounded-2xl' />
    <h1 className='text-[1.5rem] font-bold'>{data.title}</h1>
    <p className=' opacity-[0.7] break-normal leading-4'>{data.description}</p>
    <div className="tags flex flex-wrap gap-3">
      {
        data.tags.map(tag=><p className='bg-[#353735] w-fit px-5 py-3 rounded-xl whitespace-nowrap'>{tag}</p>)
      }
    </div>
    <div className="urls flex gap-3">
      <a href={data.repoLink}>Repository</a>
      {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
    </div>
  </div>
}

const Github = ({windowState, windowName, setWindowState}) => {
  return (
    <MacWindows windowState={windowState} setWindowState={setWindowState} windowName={windowName}>
        <div className="cards flex flex-wrap gap-4 justify-center pb-40">
          {gitData.map(project =>{
            return <GitCard data={project}/>
          })}
        </div>
    </MacWindows>
  )
}

export default Github
