import React from 'react';
// import Table from '../Table/Table';
import { TableHeaderContainer,TableHeader } from './Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import { TableContent,TableData } from './Members.style';

const heading=["Name","Email","Joined At","",]
const content=[{Name:"Rahul",Email:"Email","Joined At":"29 May 2022","":"Remove"}]
function Members() {
  return (
    <div>
       <TableHeaderContainer>
           <TableHeader md>Name</TableHeader>
           <TableHeader md>Email</TableHeader>
           <TableHeader md> Joined At</TableHeader>
           <TableHeader sm></TableHeader>
          
       </TableHeaderContainer>
       <Line/>
       <TableContent>
           <TableData md>Rahul</TableData>
           <TableData md>mouryarahul223@gmail.com</TableData>
           <TableData md>May 5, 2022</TableData>
           <TableData sm> Remove</TableData>

       </TableContent>
       <Line/>
       <TableContent>
           <TableData md>Rahul</TableData>
           <TableData md>mouryarahul223@gmail.com</TableData>
           <TableData md>May 5, 2022</TableData>
           <TableData sm> Remove</TableData>

       </TableContent>

    </div>
  )
}

export default Members