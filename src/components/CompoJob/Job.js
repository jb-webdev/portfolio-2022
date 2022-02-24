import React from 'react'
/* import DATA */
import { jobData } from '../../assets/data/jobData';
/* import CSS */
import './Job.scss';

const Job = () => {
  return (
    <>
        {jobData.map((JOB) => {
            return (
                <div className="jobs">
                    <div className="box-job">
                        <p className="job-date">{JOB.date}</p>
                        <h3 className="job-entreprise">{JOB.entreprise}</h3>
                        <p className="job-poste">{JOB.poste}</p>
                        <p className="job-description">{JOB.descritpion} </p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Job