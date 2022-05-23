import React,{useState,useEffect} from 'react';
import {OverViewContainer,OverViewWrapper,OkrStatus,UserLevelScreenContainer} from './OverviewComponent.style';
// import { Title,ProjectsDetails } from '../AllProjects/AllProjects.style';
import { PieChart, Pie, Cell, Label } from 'recharts';
import RequestChart from './RequestChart/RequestChart';


const COLORS = ["#099e60", "#b7b7b7", "#00b8e0", "#e95252"];

function OverViewComponent({allProjects}) {
    const [data,setData]=useState([ { name: 'In Progress', count:0 , status: 'T' },
    { name: 'not Started', count: 0, status: 'S' },
    { name: 'Completed', count: 0, status: 'C' },
    { name: 'Over Due', count: 0, status: 'R' }])
    useEffect(()=>{
        if(allProjects)
        {
            let ns=0,ip=0,od=0,c=0;

            allProjects.forEach((item)=>{
                if(item.status==="Not Started")
                ns++;
                else if(item.status==="In Progress")
                ip++;
                else if(item.status==="Completed")
                c++;
                else
                od++;
            })
            setData([
                { name: 'In Progress', count:ip, status: 'T' },
    { name: 'not Started', count: ns, status: 'S' },
    { name: 'Completed', count: c, status: 'C' },
    { name: 'Over Due', count: od, status: 'R' }

            ])

        }
    },[allProjects])
  return (
    <OverViewWrapper>
    <OverViewContainer>
        <h3>OverView </h3>

    
   
    <div style={{ margin: "0 auto" ,display:"flex",justifyContent:"center"}}>

<PieChart cx="0%" margin={{ top: 0, left: 0, right: 0, bottom: 0 }} cy="0%" width={200} height={200}>
    <Pie data={data} dataKey="count" outerRadius="80%" innerRadius="60%" fill="grenn">
        {data.map((entry, index) => <Cell  fill={COLORS[index % COLORS.length]} />)}
        <Label width={50} style={{ fontWeight: "500", fontSize: "1.2rem" }} position="center">
            {`${allProjects?.length} ${`projects`}`}
        </Label>
    </Pie>
</PieChart>

</div>
<UserLevelScreenContainer>
                    <OkrStatus border="8px solid #099e60" first>
                        <div className="bodr"></div>
                        <div>{data[0]?.count}</div>
                        <div >on Track</div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #b7b7b7">
                        <div className="bodr"></div>
                        <div>{data[1]?.count}</div>
                        <div >Not Started</div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #00b8e0">
                        <div className="bodr"></div>
                        <div>{data[2]?.count}</div>
                        <div >Completed </div>
                    </OkrStatus>
                    <OkrStatus border="8px solid #e95252">
                        <div className="bodr"></div>
                        <div> {data[3]?.count}</div>
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