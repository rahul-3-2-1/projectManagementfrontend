import React,{useState} from 'react';
import { SingleOkrContainer, SingleOKrHeader, SingleOkrContent, Heading,Text,Button,TabContainer,Line } from './SingleProject.style';
import ProjectSvgComponent from '../../Svg/ProjectSvgComponent';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Tab } from './SingleProject.style';
import Members from '../Members/Members';
import Stages from '../Stages/Stages';

const tab=["Members","Stages","Activity"];
const TabData=[Members,Stages];
function SingleProject() {

    const [active,setActive]=useState(0);
  return (
    <SingleOkrContainer>

    <SingleOKrHeader>
        <div className='firstDiv'>
            <div className="firstDivChild">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ProjectSvgComponent />
                    <h2 style={{ marginLeft: "7px" }}>Project Title</h2>
                </div>
                
            </div>
            <div className="objInfo" style={{ marginTop: "15px" }}>
                <Heading progress>
                    <Text style={{ color: "grey", marginBottom: "10px" }} bold> Progress</Text>
                    <div style={{ height: "150px", position: "relative", width: "150px" }}>
                        <span style={{ position: "absolute", top: "50%", fontSize: "25px", color: `#000`, fontWeight: "600", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}> 60%</span>
                        <CircularProgressbar styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.50,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',

                            // Text size
                            textSize: '22px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `#00B8E0`,
                            textColor: '#f88',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })}
                            value={60} />
                    </div >
                </Heading>
              
                <Heading>
                    <Text style={{ color: "grey" }} bold> Status</Text>
                    <Button style={{ color: `red`,backgroundColor:"#fff", borderColor: `red`, borderRadius: "17px", marginTop: "10px", padding: "3px 10px" }}>In Progress</Button>
                </Heading>
                <Heading start >
                <Text style={{ color: "grey",marginBottom: "10px" }} bold>Time Period</Text>
                    {/* <h2></h2> */}
                    <div style={{ display: "flex", }}>
                          May 2022 to  May 2022
                        </div>
                </Heading>

                <Heading start>
                    <Text style={{ color: "grey", marginBottom: "10px" }} bold> Last updated</Text>
                   
                        <div style={{ display: "flex", }}>
                           3 days ago
                        </div>
                        
                
                    {/* <div></div> */}
                </Heading>

            </div>
        </div>
        <div className='secondDiv'>
        <div style={{ flex: "1" }}>
                <Heading start width>
                    <h2>Category</h2>
                    <div style={{ fontSize: "1.1rem" }}>web design</div>
                </Heading>
        </div>
            <div style={{ flex: "1" }}>
                <Heading start width>
                    <h2>Member's Count</h2>
                    <div style={{ fontSize: "1.1rem" }}>10</div>
                </Heading>
            </div>

            
          
            <div style={{ flex: "1" }}>
                <Heading start width>
                    <h2>Total Stages</h2>
                    <div style={{ fontSize: "1.1rem" }}>5</div>
                </Heading>
            </div>
            <div style={{ flex: "1" }}>
                <Heading start width>
                    <h2>Description</h2>
                    <div style={{ fontSize: "1.1rem" }}>Project's Discription</div>
                </Heading>
            </div>
          
        </div>
    </SingleOKrHeader>
    
    <SingleOkrContent >
        
    
        <TabContainer>
            {tab.map((item,index)=>{
                return <Tab onClick={()=>setActive(index)} active={index===active}>{item}</Tab>
            })}
        </TabContainer>
        <Line/>
        {
            TabData.map((Data,index)=>index===active?<Data/>:"")
        }


        
    </SingleOkrContent>

    
    
</SingleOkrContainer>
  )
}

export default SingleProject