import React from 'react'
import './App.css';
import Card from './Components/Card';
const App = () => {
  const jobData = [
    { jobName: 'Software Engineer', salary: 120000 },
    { jobName: 'Web Developer', salary: 90000 },
    { jobName: 'Data Scientist', salary: 130000 },
    { jobName: 'Project Manager', salary: 110000 },
    { jobName: 'UX Designer', salary: 100000 },
  ];



  return (
    
   <>
   <div className='bg-zinc-900 h-full w-full'>
     <div className="flex justify-center bg-zinc-1000">
      <div className='width-50px height-25px text-white text-xl bg-zinc-800 m-10'>
        Trademark
      </div>
    </div>
    <br />
    <br />
    <div className='flex items-center justify-center'>
      {
        jobData.map((job)=>(
          <Card jobName={job.jobName} sal={job.salary} />
        ))
      }
    </div>
   </div>
   </>
  )
}

export default App