import React, { useEffect, useState } from "react";
import {
  ModalWrapper,
  ModalContainer,
  FormContainer,
  Button,
  ButtonGroup,
} from "../Setting/Setting.style";
import { InputComponent } from "../Setting/AddUser";
import { AddProjectDiv, RenderStage } from "./AddProject..style";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const StageDetails = (props) => {
  const {
    stages,
    setStages,
    stage,
    setStage,
    edit,
    setEdit,
    editId,
    
  } = props;
  console.log(edit);

  const handleOnChange = (e) => {
    setStage({ ...stage, [e.target.name]: e.target.value });
  };

  const AddStage = () => {
    if (edit) {
      setStages(stages.map((item, idx) => (idx === editId ? stage : item)));
      setEdit(false);
    } else {
      setStages([...stages, stage]);
    }
    setStage(() => {
      return {
        title: "",
        weight: "",
        description: "",
        startDate: "",
        endDate: "",
      };
    });
  };
  return (
    <>
      <FormContainer>
        <AddProjectDiv>
          <InputComponent
            onChange={handleOnChange}
            name="title"
            value={stage.title}
            width="48%"
            type="text"
            label="Stage Title"
            placeholder="Your stage title"
          />
          <InputComponent
            onChange={handleOnChange}
            name="weight"
            value={stage.weight}
            width="48%"
            type="number"
            label="Weight"
            placeholder="Stage Weight"
          />
        </AddProjectDiv>
        <AddProjectDiv>
          <InputComponent
            onChange={handleOnChange}
            name="description"
            value={stage.description}
            type="textarea"
            width="100%"
            label="Stage Description"
            placeholder="Write About Stage"
          />
        </AddProjectDiv>
        <AddProjectDiv>
          <InputComponent
            onChange={handleOnChange}
            name="startDate"
            value={stage.startDate}
            type="date"
            width="48%"
            label="Start Date"
            placeholder="Start Date"
          />
          <InputComponent
            onChange={handleOnChange}
            name="endDate"
            value={stage.endDate}
            type="date"
            width="48%"
            label="End Date"
            placeholder="End date"
          />
        </AddProjectDiv>
      </FormContainer>
      <ButtonGroup style={{ justifyContent: "flex-end" }}>
        <Button
          onClick={AddStage}
          style={{ display: "flex", alignItems: "center", padding: "5px 15px" }}
          color="#045680"
          border="#045680"
          textColor="#fff"
        >
          {edit ? "Edit" : "Add"}
        </Button>
      </ButtonGroup>
    </>
  );
};

export const RenderStages = (props) => {
  const { stages, handleEdit, handleDelete } = props;
  console.log(stages);
  return (
    <>
      {stages.map((item, idx) => {
        return (
          <RenderStage key={idx}>
            <div className="fDiv">{item.title}</div>
            <div className="sDiv">
              <EditIcon
                onClick={() => handleEdit(item, idx)}
                style={{ margin: "0px 5px", cursor: "pointer" }}
                color="primary"
              />

              <DeleteIcon
                onClick={() => handleDelete(idx)}
                style={{ margin: "0px 5px", cursor: "pointer" }}
                color="error"
              />
            </div>
          </RenderStage>
        );
      })}
    </>
  );
};

function AddStages(props) {
  const { setModal, setType, setStages, stages ,CreateProject,} = props;
  // const [stages,setStages]=React.useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [stage, setStage] = useState({
    title: "",
    weight: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const handleEdit = (data, idx) => {
    console.log(data);
    setStage({ ...data });
    setEdit(true);
    setId(idx);
  };
  const handleDelete = (id) => {
    setStages(stages.filter((item, idx) => idx !== id));
  };
  return (
    <>
      <div className="fDiv">
        <ArrowBackIcon
          onClick={() => setType("")}
          style={{ color: "grey", cursor: "pointer" }}
        />
        <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
          𐤕
        </h3>
      </div>
      <div className="fDiv">
        <h3>Add Stages</h3>
      </div>

      <RenderStages
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        stages={stages}
      />
      <StageDetails
        edit={edit}
        setEdit={setEdit}
        editId={id}
        stages={stages}
        setStages={setStages}
        stage={stage}
        setStage={setStage}
      />
      <ButtonGroup>
        <Button
          onClick={() => setModal(false)}
          color="#fff"
          textColor="#045680"
          border="#045680"
        >
          Cancel
        </Button>
        <Button onClick={()=>CreateProject()} color="#045680" border="#045680" textColor="#fff">
          Create Project
        </Button>
      </ButtonGroup>
    </>
  );
}

export default AddStages;
