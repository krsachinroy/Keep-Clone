import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Keep1.css";
import KeepListView from "./KeepList";
import { Modal } from "@material-ui/core";
import KeepModal from "./KeepModal";

const Keep = () => {
  const [keepList, setKeepList] = useState([]);
  const [textArea, settextArea] = useState("");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({});

  const changetextArea = (event) => {
    settextArea(event.target.value);
  };

  const changeKeepSubmit = () => {
    var arr = {
      Id: Number(1 + Math.floor(Math.random() * (100 - 1))),
      Value: textArea,
    };

    setKeepList(() => [arr, ...keepList]);
    settextArea("");
  };

  const DeleteItem = (id) => {
    setKeepList((OldKeepList) => {
      return OldKeepList.filter((x) => {
        return x.Id !== id;
      });
    });
  };

  const EditItem = (id) => {
    setEdit({
      index: id,
      Id: keepList[keepList.length - id].Id,
      data: keepList[keepList.length - id].Value,
    });
    setOpen(true);
  };

  const handleEdit = (UpdatedData) => {
    keepList.find((item) => item.Id === UpdatedData.Id).Value =
      UpdatedData.Value;
    setKeepList(keepList);
    setOpen();
  };

  const handleClose = () => {
    setOpen();
  };

  return (
    <>
      <div className="container" id="container1">
        <div className="row mb-3 pb-5">
          <h1 className="col" id="header">
            Sachin Keep
          </h1>
        </div>
        <div className="row justify-content-around">
          <textarea
            className="col-md-8 pt-xs-3"
            id="textarea"
            value={textArea}
            onChange={changetextArea}
          />
          <button
            className="col-md-2"
            id="btn"
            onClick={() => changeKeepSubmit()}
          >
            Add
          </button>
        </div>
        <div className="row row-cols-3" id="KeepListViewItem">
          {keepList.map((x, index) => (
            <KeepListView
              Data={x}
              Del={DeleteItem}
              Edt={EditItem}
              Key={keepList.length - index}
            />
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <KeepModal ed={edit} hd={handleEdit} />
      </Modal>
    </>
  );
};
export default Keep;
