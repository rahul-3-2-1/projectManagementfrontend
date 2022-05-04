import React from 'react';
import { TableHeaderContainer,TableHeader,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';


function Stages() {
  return (
   <div>
       <TableHeaderContainer>
           <TableHeader md>Title</TableHeader>
           <TableHeader lg>Description</TableHeader>
           <TableHeader md>TimeFrame</TableHeader>
           <TableHeader sm>Weight</TableHeader>
           <TableHeader md>Status</TableHeader>
       </TableHeaderContainer>
       <Line/>
       <TableContent>
        <TableData md>Stage 1</TableData>
        <TableData lg>Finish Dashboard</TableData>
        <TableData md>May 5,2022 to May 29,2022</TableData>
        <TableData sm>1</TableData>
        <TableData md>Uncompleted</TableData>
       </TableContent>

   </div>
  )
}

export default Stages