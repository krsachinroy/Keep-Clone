import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./KeepModalCss.css";

export default function KeepModal({ ed, hd }) {
  const [edData, setedData] = useState(ed.data);

  const changeEdit = (event) => {
    setedData(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col" id="ModalHeader">
          <h3>Edit Keep Id - {ed.index} </h3>
        </div>
      </div>
      <div className="row">
        <textarea
          className="col"
          id="Modaltextarea"
          value={edData}
          defaultValue={ed.data}
          onChange={changeEdit}
        ></textarea>
      </div>
      <div className="row justify-content-end">
        <Button
          className="col-md-2"
          variant="contained"
          color="secondary"
          id="Updatebtn"
          onClick={() => hd({ Id: ed.Id, Value: edData })}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
