import React from 'react';
import { AllProjectsContainer,Title,ProjectsDetails,ProjectWrapper } from './AllProjects.style';
import ProjectBox from './ProjectBox';

function AllProjects() {
  return (
    <AllProjectsContainer>
    <Title>
      <h2>Projects</h2>
      <h2>May 7,2022</h2>
    </Title>
    <ProjectsDetails>

    <div className='container'>
      <h2>50</h2>
      <p>In Progress</p>
    </div>
    <div className='container'>
      <h2>50</h2>
      <p>In Progress</p>
    </div>
    <div className='container'>
      <h2>50</h2>
      <p>In Progress</p>
    </div>
    <div className='container'>
      <h2>50</h2>
      <p>In Progress</p>
    </div>

    </ProjectsDetails>

    <ProjectWrapper>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>

    </ProjectWrapper>
    </AllProjectsContainer>
  )
}

export default AllProjects