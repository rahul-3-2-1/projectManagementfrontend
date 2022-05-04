import React from 'react';
import {OverViewContainer,OverViewWrapper,OkrStatus,UserLevelScreenContainer} from './OverviewComponent.style';
// import { Title,ProjectsDetails } from '../AllProjects/AllProjects.style';
import { PieChart, Pie, Cell, Label } from 'recharts';
import RequestChart from './RequestChart/RequestChart';


const COLORS = ["#099e60", "#b7b7b7", "#00b8e0", "#e95252"];
const data = [
    { name: 'on Track', count:10 , status: 'T' },
    { name: 'not Started', count: 10, status: 'S' },
    { name: 'Completed', count: 10, status: 'C' },
    { name: 'at Risk', count: 10, status: 'R' }
];
function OverViewComponent() {
  return (
    <OverViewWrapper>
    <OverViewContainer>
        <h3>OverView </h3>

    
   
    <div style={{ margin: "0 auto" ,display:"flex",justifyContent:"center"}}>

<PieChart cx="0%" margin={{ top: 0, left: 0, right: 0, bottom: 0 }} cy="0%" width={200} height={200}>
    <Pie data={data} dataKey="count" outerRadius="80%" innerRadius="60%" fill="grenn">
        {data.map((entry, index) => <Cell  fill={COLORS[index % COLORS.length]} />)}
        <Label width={50} style={{ fontWeight: "500", fontSize: "1.2rem" }} position="center">
            {`${10} ${`projects`}`}
        </Label>
    </Pie>
</PieChart>

</div>
<UserLevelScreenContainer>
                    <OkrStatus border="8px solid #099e60" first>
                        <div className="bodr"></div>
                        <div>{10}</div>
                        <div >on Track</div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #b7b7b7">
                        <div className="bodr"></div>
                        <div>{10}</div>
                        <div >Not Started</div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #00b8e0">
                        <div className="bodr"></div>
                        <div>{10}</div>
                        <div >Completed </div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #e95252">
                        <div className="bodr"></div>
                        <div> {10}</div>
                        <div >OverDue</div>
                    </OkrStatus>
                </UserLevelScreenContainer>
    </OverViewContainer>
    <OverViewContainer style={{marginTop:"20px"}}>
    <RequestChart />
    </OverViewContainer>
    </OverViewWrapper>
  )
}

export default OverViewComponent