import React from 'react';
import projectdata from '../data/propject.json';
import CardProject from '../components/projects/cardProject';

function ProjectList() {
  return (
    <div className='projectt_content'>
      {
        projectdata && projectdata.map(({id, name, createdate, images, type}) =>{
          return(
            <CardProject key={id} name={name} type={type} createdate={createdate} images={images} />
          )
        })
      }
    </div>
  )
}

export default ProjectList;
