import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

const FormWrapper = styled(Stack)`
  margin: auto;
  border: 2px solid red;
  width: fit-content;
  align-items: center;
`;
const TextInputContainers = styled(Stack)`
  flex-direction: row;
`;
const StackRow = styled(Stack)`
  flex-direction: row;
`;
const StackCol = styled(Stack)``;

export default function Form() {
  const [date, setDate] = useState("");
  const [boardPn, setBoardPn] = useState("");
  const [boardSn, setBoardSn] = useState("");
  const [techName, setTechName] = useState("");
  const [boardData, setBoardData] = useState("");
  const [causeFailure, setCauseFailure] = useState("");
  const [solution, setSolution] = useState("");
  const [files, setFiles] = useState<any | null>(null);

  function addDataToLocalStorage(data: any) {
    let dataFromLocalStorage = localStorage.getItem("data") || "[]";
    let parsedData = JSON.parse(dataFromLocalStorage);
    parsedData.push(data);
    localStorage.setItem("data", JSON.stringify(parsedData));
  }

  function submit() {
    // TODO: validate data
    const dataFromInputs = composeInputs(
      date,
      boardPn,
      boardSn,
      techName,
      boardData,
      causeFailure,
      solution,
      files
    );
    addDataToLocalStorage(dataFromInputs);
    clearInputs();
    window.location.reload();
  }
  function clearInputs() {
    setDate("");
    setBoardPn("");
    setBoardSn("");
    setTechName("");
    setBoardData("");
    setCauseFailure("");
    setSolution("");
    setFiles("");
  }

  function composeInputs(
    date: string,
    boardPn: string,
    boardSn: string,
    techName: string,
    boardDataBaseName: string,
    causeFailure: string,
    solution: string,
    linkForFile: string
  ) {
    return {
      date,
      boardPn,
      boardSn,
      techName,
      boardDataBaseName,
      causeFailure,
      solution,
      linkForFile,
    };
  }

  function handleChangeText(e: any) {
    const { id, value } = e.target;

    switch (id) {
      case "date":
        setDate(value);
        break;
      case "board-pn":
        setBoardPn(value);
        break;
      case "board-sn":
        setBoardSn(value);
        break;
      case "tech-name":
        setTechName(value);
        break;
      case "board-data":
        setBoardData(value);
        break;
      case "cause-failure":
        setCauseFailure(value);
        break;
      case "solution":
        setSolution(value);
        break;
      case "link-files":
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log(reader.result);
          setFiles(reader.result);
        };
        reader.readAsDataURL(file);

       
        break;
    }
  }

  return (
    <FormWrapper spacing={8}>
      <TextInputContainers>
        <StackCol>
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="board-pn"
            label="Board PN"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="board-sn"
            label="Board SN"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="tech-name"
            label="TECH Name"
            variant="outlined"
          />
        </StackCol>
        <StackCol>
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="board-data"
            label="Board Data Base Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="cause-failure"
            label="Cause Failur"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChangeText(e)}
            id="solution"
            label="Solution"
            variant="outlined"
          />
        </StackCol>
      </TextInputContainers>
      <StackRow>
        <TextField
          onChange={(e) => handleChangeText(e)}
          id="date"
          variant="outlined"
          type="date"
        />
        <input
          onChange={(e) => handleChangeText(e)}
          id="link-files"
          type="file"
          accept="image/* , application/pdf"
        />
      </StackRow>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
        }}
        onClick={() => submit()}
      >
        Save
      </Button>
    </FormWrapper>
  );
}
