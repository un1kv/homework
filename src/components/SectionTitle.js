import React from 'react'

const SectionTitle = ({title,section}) => {
    return (
        <div className='container'>
          <h4>{title}</h4>
          <p>{section}</p>  
        </div>
    )
}

export default SectionTitle
