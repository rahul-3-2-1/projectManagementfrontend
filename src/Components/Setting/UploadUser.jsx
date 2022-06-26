import { ButtonGroup } from "@mui/material";
import React from "react";
import {
  ModalWrapper,
  ModalContainer,
  FormContainer,
  Button,
} from "./Setting.style";
import CSVtoJSON from "../Functions/CSVtoJSON";
import { useAuth } from "../../Auth/Auth";
import exportFromJSON from "export-from-json";
import axios from "axios";
import { User } from "../../Api/Api";
import * as XLSX from "xlsx";

function UploadUser(props) {
  const { setModal } = props;
  const { DisplaySnackbar } = useAuth();
  const [file, setFile] = React.useState();
  const uploadCSV = (e) => {
    if (!file.length) {
      return;
    }

    //To upload csv-to-json file to the server
    const reader = new FileReader();

    // function read() {

    //Extract contents of the CSV file
    let type = file[0].name.split(".")[1];
   
    if (type === "csv") {
      const csv = file[0];
      reader.readAsText(csv);
      reader.onload = async function (e) {
        let emailList = [];

        let errorMessages = [];

        //Convert CSV content to JSON
        const jsonContent = CSVtoJSON(e.target.result, emailList);
        console.log(jsonContent);

        //che4ck for number of entries present in the csv file
        if (jsonContent.length > 100) {
          DisplaySnackbar("Only 100 entries allowed per file", "error");
          // clearFileInput()
          return;
        }

        if (jsonContent.length === 0) {
          DisplaySnackbar("CSV file is empty", "error");
          // clearFileInput()
          return;
        }

        //Validate content of JSON
        let validated = false,
          allCorrect = true;
        // jsonContent.forEach((student,index) => {
        //     validated = ValidateStudent(student)
        //     if(!validated) {
        //         allCorrect = false
        //         toast.error(`Invalid entry at ${index+1}`,{autoClose:false})
        //         clearFileInput()
        //         return
        //     }
        // })

        if (emailList.length !== new Set(emailList).size) {
          DisplaySnackbar(`Duplicated emails found`, "error");
          allCorrect = false;

          return;
        }

        if (allCorrect) {
          axios
            .post(
              User.uploadUser,
              {
                docs: jsonContent,
                companyId: localStorage.getItem("companyId"),
              },
              {
                headers: {
                  token: localStorage.getItem("token"),
                },
              }
            )
            .then((res) => {
              if (res.data.status === "error" || res.data.status === "fail") {
                DisplaySnackbar(res.data.message, "error");

                return;
              } else {
                DisplaySnackbar("user Uploaded", "success");
              }
            })
            .catch((err) => {
              if (err.response) {
                DisplaySnackbar(err.response.data.message, "error");
              }
            });
        }
      };
    } else {
      const jsonContent = [];
      let emailList = [];
      let allCorrect = true;
      reader.onload = async (e) => {
        var data = e.target.result;
        let readedData = await XLSX.read(data, { type: "binary" });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = await XLSX.utils.sheet_to_json(ws, { header: 1 });
        const header = dataParse[0];

        for (let i = 1; i < dataParse.length; i++) {
          let obj = {};
          for (let j = 0; j < dataParse[i].length; j++) {
            obj[header[j]] = dataParse[i][j];
            if (header[j] === "email") emailList.push(dataParse[i][j]);
          }
          jsonContent.push(obj);
          console.log(jsonContent);
          console.log(obj);
        }
        if (emailList.length !== new Set(emailList).size) {
          DisplaySnackbar(`Duplicated emails found`, "error");
          allCorrect = false;

          return;
        }

        console.log("RAHUL");
        if (allCorrect) {
          axios
            .post(
              User.uploadUser,
              {
                docs: jsonContent,
                companyId: localStorage.getItem("companyId"),
              },
              {
                headers: {
                  token: localStorage.getItem("token"),
                },
              }
            )
            .then((res) => {
              console.log(res);
              if (res.data.status === "error" || res.data.status === "fail") {
                DisplaySnackbar(res.data.message, "error");

                return;
              } else {
                DisplaySnackbar("user Uploaded", "success");
              }
            })
            .catch((err) => {
              if (err.response) {
                DisplaySnackbar(err.response.data.message, "error");
              }
            });
        }
      };
      reader.readAsBinaryString(file[0]);
    }
  };
  console.log(file);
  return (
    <ModalWrapper>
      <ModalContainer width={"300px"}>
        <div className="fDiv">
          <h3>Upload User</h3>
          <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
            𐤕
          </h3>
        </div>
        <FormContainer
          style={{
            minHeight: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className="file" for="file">
            {file ? file[0].name : "Browse File"}
          </label>
          <input
            onChange={(e) => setFile(e.target.files)}
            style={{ display: "none" }}
            type="file"
            id="file"
          />
        </FormContainer>
        <ButtonGroup
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => setModal(false)}
            color="#fff"
            textColor="#045680"
            border="#045680"
          >
            Cancel
          </Button>
          <Button
            onClick={() => uploadCSV()}
            color="#045680"
            border="#045680"
            textColor="#fff"
          >
            Upload
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default UploadUser;
