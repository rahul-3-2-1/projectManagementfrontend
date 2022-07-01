import React, { useEffect, useState } from "react";
import {
  SingleOkrContainer,
  SingleOKrHeader,
  SingleOkrContent,
  Heading,
  Text,
  Button,
  TabContainer,
  Line,
} from "./SingleProject.style";
import ProjectSvgComponent from "../../Svg/ProjectSvgComponent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Tab } from "./SingleProject.style";
import Members from "../Members/Members";
import { useParams } from "react-router-dom";
import Stages from "../Stages/Stages";
import axios from "axios";
import { Project,Request } from "../../Api/Api";
import Activity from "../Activity/Activity";
import { cyan } from "@material-ui/core/colors";

const tab = ["Members", "Stages", "Activity"];
const TabData = [Members, Stages, Activity];
const getDate = (startDate, endDate) => {
  let sd = new Date(startDate).toUTCString().slice(4, 16);
  let ed = new Date(endDate).toUTCString().slice(4, 16);

  return `${sd} to ${ed}`;
};


const getColor=(st)=>{
    if(st=="In Progress")
    return 'green';
    else if(st=="Not Started")
    return "#ccc";
    else if(st==="completed")
    return cyan;
    else
    return 'red';

}
const getDay=(dt)=>{

    const tm=new Date().getTime()-new Date(dt).getTime();
   

    let tmp= (tm/(24*60*60*1000));
    // console.log(tmp);
    if(tmp>1)
    {
        return `${Math.ceil(tmp)} days ago`;
    }
    if(tmp<1);
    tmp=tmp*24;

    if(tmp<1)
        return `Just Now`;
    else
    return `${Math.ceil(tmp)} hours ago`;

}
function SingleProject() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);
    const [lastUpdated,setLastUpdated]=useState("");
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const dt = await axios.get(Project.getSingleProject(id), {
          headers: {
            token: `${localStorage.getItem("token")}`,
          },
        });

        setData(dt?.data?.data);
        const d=await axios.get(Request.requestByProjectId(dt?.data?.data._id),{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        
        let temp=new Date("10-12-1900");
        d?.data?.data.forEach((item)=>{

            if(new Date(item?.requestedAt)>temp&&item?.approve!=="NA")
            temp=new Date(item?.requestedAt);
        })
        if(temp!=="")
        {
            temp=getDay(temp);
        }
        setLastUpdated(temp);

       
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id, render]);
  return (
    <SingleOkrContainer>
      {!loading && (
        <>
          <SingleOKrHeader>
            <div className="firstDiv">
              <div className="firstDivChild">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ProjectSvgComponent />
                  <h2 style={{ marginLeft: "7px" }}>{data?.title}</h2>
                </div>
              </div>
              <div className="objInfo" style={{ marginTop: "15px" }}>
                <Heading progress>
                  <Text style={{ color: "grey", marginBottom: "10px" }} bold>
                    {" "}
                    Progress
                  </Text>
                  <div
                    style={{
                      height: "150px",
                      position: "relative",
                      width: "150px",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        fontSize: "25px",
                        color: `#000`,
                        fontWeight: "600",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                    >
                      {" "}
                      {data?.progress}%
                    </span>
                    <CircularProgressbar
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.5,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",

                        // Text size
                        textSize: "22px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#00B8E0`,
                        textColor: "#f88",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                      value={data?.progress}
                    />
                  </div>
                </Heading>

                <Heading>
                  <Text style={{ color: "grey" }} bold>
                    {" "}
                    Status
                  </Text>
                  <Button
                    style={{
                      color: `${getColor(data?.status)}`,
                      backgroundColor: "#fff",
                      borderColor: `${getColor(data?.status)}`,
                      borderRadius: "17px",
                      marginTop: "10px",
                      padding: "3px 10px",
                    }}
                  >
                    {data?.status}
                  </Button>
                </Heading>
                <Heading start>
                  <Text style={{ color: "grey", marginBottom: "10px" }} bold>
                    Time Period
                  </Text>
                  {/* <h2></h2> */}
                  <div style={{ display: "flex" }}>
                    {getDate(data?.startDate, data?.endDate)}
                  </div>
                </Heading>

                <Heading start>
                  <Text style={{ color: "grey", marginBottom: "10px" }} bold>
                    {" "}
                    Last updated
                  </Text>

                  <div style={{ display: "flex" }}>{lastUpdated}</div>

                  {/* <div></div> */}
                </Heading>
              </div>
            </div>
            <div className="secondDiv">
              <div style={{ flex: "1" }}>
                <Heading start width>
                  <h2>Category</h2>
                  <div style={{ fontSize: "1.1rem" }}>{data?.category}</div>
                </Heading>
              </div>
              <div style={{ flex: "1" }}>
                <Heading start width>
                  <h2>Member's Count</h2>
                  <div style={{ fontSize: "1.1rem" }}>
                    {data?.members?.length}
                  </div>
                </Heading>
              </div>

              <div style={{ flex: "1" }}>
                <Heading start width>
                  <h2>Total Stages</h2>
                  <div style={{ fontSize: "1.1rem" }}>
                    {data?.stages?.length}
                  </div>
                </Heading>
              </div>
              <div style={{ flex: "1" }}>
                <Heading start width>
                  <h2>Description</h2>
                  <div style={{ fontSize: "1.1rem" }}>{data?.description}</div>
                </Heading>
              </div>
            </div>
          </SingleOKrHeader>

          <SingleOkrContent>
            <TabContainer>
              {tab.map((item, index) => {
                return (
                  <Tab
                    onClick={() => setActive(index)}
                    active={index === active}
                  >
                    {item}
                  </Tab>
                );
              })}
            </TabContainer>
            <Line />
            {TabData.map((Data, index) =>
              index === active ? (
                <Data
                  setRender={setRender}
                  render={render}
                  ProjectId={data?._id}
                  members={data?.members}
                  stages={data?.stages}
                />
              ) : (
                ""
              )
            )}
          </SingleOkrContent>
        </>
      )}
    </SingleOkrContainer>
  );
}

export default SingleProject;
