import React from "react";
import "./index.scss";
import Input from "../Input";
import FileUpload from "../../assets/images/Inbox.png";

const UploadFiles = ({ uploadFile }) => {
  const processFiles = (files) => {
    console.log(files);
    const file = files.target.files[0].name;
    const extension = file.split(".");
    uploadFile(files);
  };

  return (
    <div
      className="upload-file-div"
      onClick={() => document.getElementById("getfile").click()}
    >
      <img src={FileUpload} alt="i" height="50px" />
      <Input
        type="file"
        id="getfile"
        className={"upload-input"}
        onChange={processFiles}
      />
      <div>
        <span>Click or Drag file to this area to upload</span>
      </div>
      <div className="sub-text">
        <span>Only files with json format are supported</span>
      </div>
    </div>
  );
};

export default UploadFiles;
