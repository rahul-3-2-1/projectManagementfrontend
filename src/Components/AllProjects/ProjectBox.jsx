import React, { useEffect } from "react";
import { ProjectBoxContainer, Progress, Line } from "./ProjectBox.style";
import { Title } from "./AllProjects.style";
import {useNavigate} from 'react-router-dom';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Avatar from "@mui/material/Avatar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddProject from "../AddProject/AddProject";

const avatar = [{}, {}, {}];


const calcTime=(time)=>{

  const tm=new Date(time).getTime();
  console.log(tm)
  return Math.ceil((new Date(time).getTime()-new Date().getTime())/(1000*60*60*24*7));
}

function ProjectBox(props) {
  const navigate=useNavigate();
  const [color, setColor] = React.useState("");
  const [modal,setModal]=React.useState(false);

  const {data}=props;
  console.log(data);

  useEffect(() => {
    function getColorCode() {
      setColor("hsl(" + Math.random() * 360 + ", 100%, 75%)");
    }
    getColorCode();
  }, []);
  const randomString1=`${btoa(Math.random().toString()).substring(0, 16)}`;
  const handleEdit=()=>{
    setModal(true);

  }
  return (
    <>
    <ProjectBoxContainer onClick={()=>{navigate(`/project/${data?._id}`)}} >
      <div style={{ backgroundColor: `${color}` }} className="backColor"></div>
      <div style={{ zIndex: "100" }}>
        <Title>
          <h4 style={{ color: "rgb(102 102 102)", zIndex: "2" }}>{new Date(data?.startDate).toUTCString().slice(4,16)}</h4>
          <h2 style={{ zIndex: "2" }}>
          <ContextMenuTrigger id={randomString1}>
            <MoreVertOutlinedIcon />
            </ContextMenuTrigger>
          </h2>

        </Title>
        
        <Title
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            className="category"
            style={{ zIndex: "2", fontSize: "1.2rem", margin: "5px 0px" }}
          >
           {data?.title}
          </h3>
          <div
            className="title"
            style={{
              zIndex: "2",
              color: "rgb(102 102 102)",
              fontWeight: "500",
            }}
          >
            {" "}
            {data?.category||"Category"}
          </div>
        </Title>

        <Title type="progress">
          <h4 style={{ zIndex: "2" }}>Progress</h4>
          <div className="container">
            <Progress color={color} per={data?.progress}></Progress>
          </div>
          <h4 style={{ textAlign: "right", zIndex: "2" }}>{data?.progress}%</h4>
        </Title>
        <Line />
        <Title>
          <div className="ldiv">
            {data?.members?.map((item, index) => {
              return index === 0 ? (
                <Avatar className="sz" />
              ) : index < 4 ? (
                <Avatar
                  style={{ transform: `translateX(-${index * 10}px)` }}
                  className="sz avtr"
                />
              ) : (
                ""
              );
            })}
            <AddCircleOutlinedIcon
              style={{
                zIndex: "5",
                color: `${color}`,
                boxShadow: `1px 2px 10px ${color}`,
                height: "30px",
                width: "30px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div style={{ color: `${color}` }} className="rdiv">
            {calcTime(data?.endDate)} Weeks left
          </div>
        </Title>
      </div>
    </ProjectBoxContainer>
    <ContextMenu style={{
   
    zIndex: "1000"}} id={randomString1}>
      <div   style={{display: "flex",cursor:"pointer",justifyContent: "center"}}>
          <MenuItem >
          {/* <div className="context"> */}
          <EditIcon onClick={()=>handleEdit()} color="primary"/>
          {/* </div> */}
          </MenuItem>
          </div>
          <div style={{display: "flex",cursor:"pointer",justifyContent: "center"}}>
          <MenuItem >
            {/* <div className="context"> */}
            <DeleteIcon color="error"/>
            {/* </div> */}
          </MenuItem>
          </div>
        </ContextMenu>
        {modal&&<AddProject edit={true} data={data?._id} setModal={setModal}/>}
    </>
  );
}

export default ProjectBox;
