import React from 'react'
import SectionTitle from './SectionTitle'

const Section1 = () => {
    return (
        <div id="keta">
      {sections.map((post,i)=>
      <SectionTitle 
      key={i}
      title={post.title}
      section={post.section}/>
      )}     
        </div>
    )
}


let sections=[
    {   title:"EXPERIENCE",
        section:"ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got! ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"FORMATION",
        section:"ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got! ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"HOBBIES",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"PROFILE",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"SKILLE",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"PERSONALITY",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"LANGUAGES",
        section:"Explain the job that you have done and the resiltes that you have got!"
    }
]

export default Section1
