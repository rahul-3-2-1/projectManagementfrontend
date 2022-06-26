import React from 'react';
// import Table from '../Table/Table';
import { TableHeaderContainer,TableHeader } from './Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import { TableContent,TableData } from './Members.style';
// import 

const heading=["Name","Email","Joined At","",]
const content=[{Name:"Rahul",Email:"Email","Joined At":"29 May 2022","":"Remove"}]
function Members(props) {
  const {members}=props;
  console.log(members);

  return (
    <div>
       <TableHeaderContainer>
           <TableHeader md>Name</TableHeader>
           <TableHeader md>Email</TableHeader>
           {/* <TableHeader md> Joined At</TableHeader> */}
           {/* <TableHeader sm></TableHeader> */}
          
       </TableHeaderContainer>
       <Line/>
       {props?.members?.map((item)=>{
         return(
           <div key={item._id}>
          <TableContent>
          <TableData md>{item?.name}</TableData>
          <TableData md>{item?.email}</TableData>
          {/* <TableData md>{}</TableData> */}
          {/* <TableData sm> Remove</TableData> */}

      </TableContent>
      <Line/>
      </div>
         )
       })}
       
     

    </div>
  )
}

export default Members