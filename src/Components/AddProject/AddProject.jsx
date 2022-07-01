import React, { useState, useEffect } from "react";
import {
  ModalContainer,
  ModalWrapper,
  FormContainer,
  ButtonGroup,
  Button,
} from "../Setting/Setting.style";
import { InputComponent } from "../Setting/AddUser";
import { AddProjectDiv } from "./AddProject..style";
import AddStages from "./AddStages";
import AddMembers from "./AddMembers";
import { User } from "../../Api/Api";
import axios from "axios";
import { useAuth } from "../../Auth/Auth";
import { Project } from "../../Api/Api";


export const ProjectDetails = (props) => {
  const { setType, setModal, formData, setFormData, members } = props;
  console.log(formData.startDate);
  const { DisplaySnackbar } = useAuth();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheck = () => {
    const { title, description, startDate, endDate, category } = formData;

    if (!title || !description || !startDate || !endDate || !category) {
      DisplaySnackbar("All fields are mandatory", "error");
      return;
    }
    if (!members.length) {
      DisplaySnackbar("Atleast add one member", "error");
      return;
    }
    setType("Stages");
  };

  return (
    <>
      <div className="fDiv">
        <h3>Add Project</h3>
        <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
          𐤕
        </h3>
      </div>
      <FormContainer>
        <AddProjectDiv>
          <InputComponent
            name="title"
            onChange={handleOnChange}
            value={formData.title}
            width="48%"
            type="text"
            label="Project Title"
            placeholder="Your project title"
          />
          <InputComponent
            name="category"
            onChange={handleOnChange}
            value={formData.category}
            width="48%"
            type="text"
            label="Project Category"
            placeholder="Your project category"
          />
        </AddProjectDiv>
        <AddProjectDiv>
          <InputComponent
            name="description"
            onChange={handleOnChange}
            value={formData.description}
            type="text"
            width="100%"
            label="Project Description"
            placeholder="Write About Project"
          />
        </AddProjectDiv>
        <AddProjectDiv>
          <InputComponent
            name="startDate"
            onChange={handleOnChange}
            value={formData.startDate}
            type="date"
            width="48%"
            label="Start Date"
            placeholder="Start Date"
          />
          <InputComponent
            name="endDate"
            onChange={handleOnChange}
            value={formData.endDate}
            type="date"
            width="48%"
            label="End Date"
            placeholder="End date"
          />
        </AddProjectDiv>
        <AddProjectDiv style={{ justifyContent: "flex-end" }}>
          {/* <div >Members</div> */}
          <div onClick={() => setType("members")} className="member">
            Add Members
          </div>
        </AddProjectDiv>
        <AddProjectDiv></AddProjectDiv>
      </FormContainer>

      <ButtonGroup>
        <Button
          onClick={() => setModal(false)}
          color="#fff"
          textColor="#045680"
          border="#045680"
        >
          Cancel
        </Button>
        <Button
          onClick={handleCheck}
          color="#045680"
          border="#045680"
          textColor="#fff"
        >
          Ok
        </Button>
      </ButtonGroup>
    </>
  );
};

function AddProject(props) {
  const { setModal,edit,data,render ,setRender } = props;
  console.log(render);
  
  const {DisplaySnackbar}=useAuth();
  const [type, setType] = React.useState("");
  const [stages, setStages] = React.useState([]);
  const [members, setMembers] = useState([]);
  const [membersId, setMembersId] = useState([]);
  const [allUsers, setAllusers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endData: "",
    category:"",
    companyId: "",
  });
  useEffect(()=>{
    const getData=async()=>{
      console.log("rahul");
      if(edit)
    {
      console.log("hello do edit");
      try{
      const dt=await axios.get(Project.getSingleProject(data),{
        headers:{
         token: localStorage.getItem('token')
        }

      })
      const dta=dt?.data?.data;
      setFormData({
        title:dta?.title,
        description:dta?.description,
        startDate:dta?.startDate.split('T')[0],
        endDate:dta?.endDate.split('T')[0],
        category:dta?.category,
        project_id:dta?._id
      })
      setStages(dta?.stages.map((item)=>{
        return{
          stage_id:item?._id,
          title:item?.title,
          description:item?.description,
          startDate:item?.startDate.split('T')[0],
          endDate:item?.endDate.split('T')[0],
          weight:item?.weight
        }
      }))
      setMembers([...dta?.members]);
      setMembersId(dta.members.map((item)=>item._id));
      }
      catch(err)
      {
        console.log(err);

      }
    }
  }
    getData();
  },[edit])

  const CreateProject=async()=>{
    
    if(!stages.length)
    {
      DisplaySnackbar("Project must have atleast one stage","error");
      return;
    }
    try{
      if(edit)
      {
        const data={
          ...formData,
            members:[...membersId],
            companyId:localStorage.getItem("companyId"),
          stages
        }
        const dt=await axios.patch(Project.updateProject(formData.project_id),data,{
          headers:{
            token:localStorage.getItem('token')
          }
        })
        console.log(dt);
        if(dt?.data?.status==="success")
        {
          setModal(false);
          setRender(!render);
         setTimeout(()=>DisplaySnackbar("Updated Successfully","success"),1000);
        
         
        }
      }
      else
      {
      const data={
        ...formData,
          members:[...membersId],
          companyId:localStorage.getItem("companyId"),
        stages
      }
      const dt=await axios.post(Project.createProject,data,{
        headers:{
          token:`${localStorage.getItem('token')}`
        }
      })
      setModal(false);
      setRender(!render);
     
      setTimeout(()=>DisplaySnackbar("Project created","success"),1000);
      
     
     
    }
      

    }
    catch(err)
    {
      console.log(err);
      DisplaySnackbar(err?.response?.data?.message,"error");

    }


     
  }
  useEffect(() => {
    const alluser = async () => {
      try {
        console.log(localStorage.getItem("companyId"));
        console.log(localStorage);
        const data = await axios.get(
          User.getAllUser(localStorage.getItem("companyId")),
          {
            headers: {
              token: `${localStorage.getItem("token")}`,
            },
          }
        );
        setAllusers(data.data.data);
      } catch (err) {
        DisplaySnackbar(err?.response?.data?.mssg,"error");
      }
    };
    alluser();
  }, []);
  return (
    <ModalWrapper>
      <ModalContainer minHeight="300px" width="500px">
        {type === "" ? (
          <ProjectDetails
            formData={formData}
            setFormData={setFormData}
            members={membersId}
            setModal={setModal}
            setType={setType}
          />
        ) : type === "Stages" ? (
          <AddStages CreateProject={CreateProject} setModal={setModal} stages={stages} setStages={setStages} isEdit={edit} setType={setType} />
        ) : (
          <AddMembers
            membersId={membersId}
            setMembersId={setMembersId}
            allUsers={allUsers}
            members={members}
            setMembers={setMembers}
            setType={setType}
            setModal={setModal}
          />
        )}
      </ModalContainer>
    </ModalWrapper>
  );
}

AddProject.defaultProps={
  edit:false
}
export default AddProject;
