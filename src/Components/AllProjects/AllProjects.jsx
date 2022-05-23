import React,{useEffect,useState} from 'react';
import { AllProjectsContainer,Title,ProjectsDetails,ProjectWrapper } from './AllProjects.style';
import ProjectBox from './ProjectBox';

function AllProjects({allProjects}) {
  
  console.log(allProjects);
  return (
    <AllProjectsContainer>
    <Title>
      <h2>Projects</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
    </Title>

    <ProjectWrapper>
      {allProjects&&allProjects.length&&allProjects.map((item)=><ProjectBox data={item}/>)}
      
    </ProjectWrapper>
    </AllProjectsContainer>
  )
}

export default AllProjects