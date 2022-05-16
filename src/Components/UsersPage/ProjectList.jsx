import React from 'react';
import {ProjectListContainer}from './ProjectList.style';
import { TableHeaderContainer,TableHeader,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import { Progress } from '../AllProjects/ProjectBox.style';
const ProjectList=()=>{
    return(
        <ProjectListContainer>
            <h2>Projects List</h2>
            <TableHeaderContainer>
                <TableHeader md>Project Name</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader md>Time Frame</TableHeader>
                <TableHeader lg>Progress</TableHeader>
               
                <TableHeader >Total Stages</TableHeader>
                <TableHeader >Total Members</TableHeader>
                <TableHeader sm>Status</TableHeader>
            </TableHeaderContainer>

            <Line/>
            <TableContent>
                <TableData md>Abc</TableData>
                <TableData>Web Designing</TableData>
                <TableData md>May 5 to Jun 5</TableData>
                <TableData lg style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}} >
                    <div className='container' >
                <Progress color="red"/>
                </div>
                </TableData>
                <TableData >5</TableData>
                <TableData >5</TableData>
                <TableData sm>OverDue</TableData>
            </TableContent>
            <Line/>
            <TableContent>
                <TableData md>Abc</TableData>
                <TableData>Web Designing</TableData>
                <TableData md>May 5 to Jun 5</TableData>
                <TableData lg style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}} >
                    <div className='container' >
                <Progress color="red"/>
                </div>
                </TableData>
                <TableData >5</TableData>
                <TableData >5</TableData>
                <TableData sm>OverDue</TableData>
            </TableContent>
            <Line/>
            

        </ProjectListContainer>
    )
}
export default ProjectList;