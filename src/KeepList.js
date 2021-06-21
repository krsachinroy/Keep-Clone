import React from "react";
import { Button } from "@material-ui/core";

function KeepList({ Data, Del, Key, Edt }) {
  return (
    <div className="col-md-3" id="KeepListViewCol">
      <div className="row " id="KeepListViewrow">
        <div className="col-md-8" id="KeepListHeader">
          <h4>KLN: {Key}</h4>
        </div>
        <div className="col-md-4">
          <div className="row" id="KeepListAction">
            <div className="col">
              <Button
                variant="contained"
                color="secondary"
                className="col-md-2"
                id="btn1"
                onClick={() => Del(Data.Id)}
              >
                Delete
              </Button>
            </div>
            <div className="col">
              <Button
                variant="contained"
                color="primary"
                className="col-md-2"
                id="btn1"
                onClick={() => Edt(Key)}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="KeepListData">
        <h5>{Data.Value !== "" ? Data.Value : "No Data Entered"}</h5>
      </div>
    </div>
  );
}

export default KeepList;
