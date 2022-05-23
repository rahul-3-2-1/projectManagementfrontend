import React from 'react';
import {ProjectListContainer}from './ProjectList.style';
import { TableHeaderContainer,TableHeader,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import { Progress } from '../AllProjects/ProjectBox.style';
const ProjectList=(props)=>{
    const {allProjects}=props;
    return(
        <ProjectListContainer>
            <div className='content'>
                <div className='contentChild'>
            <h2>Projects List</h2>
            
            <TableHeaderContainer>
                <TableHeader md>Project Name</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader md>Time Frame</TableHeader>
                <TableHeader lg>Progress</TableHeader>
               
                <TableHeader>Total Stages</TableHeader>
                <TableHeader >Total Members</TableHeader>
                <TableHeader sm>Status</TableHeader>
            </TableHeaderContainer>

            <Line/>
            {allProjects?.map((item)=>{
                return(<>
                <TableContent>
                <TableData md>{item?.title}</TableData>
                <TableData>{item?.category}</TableData>
                <TableData md>{new Date(item?.endDate).toUTCString().slice(4,16)} to {new Date(item?.startDate).toUTCString().slice(4,16)}</TableData>
                <TableData lg style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                    <div className='container' >
                <Progress per={item?.Progress} style={{height:"20px"}} color="red"/>
                </div>
                </TableData>
                <TableData >{item?.stages?.length}</TableData>
                <TableData >{item?.members?.length}</TableData>
                <TableData sm>{item?.status}</TableData>
            </TableContent>
            <Line/>
            </>)
                
            })}
            </div>
            </div>
            
            
            

        </ProjectListContainer>
    )
}
export default ProjectList;