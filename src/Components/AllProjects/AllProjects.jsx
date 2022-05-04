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