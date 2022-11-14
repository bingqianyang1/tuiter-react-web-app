import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();


  return (

    <div className="row mt-2 mb-2 text-secondary">
      <div className="col-auto">
        <i className="bi bi-chat me-1" /> {tuit.replies}
      </div>
      <div className="col-auto">
        <i className="bi bi-arrow-repeat me-1" /> {tuit.retuits}
      </div>

     <div className="col-auto">
       <i onClick={() => dispatch(updateTuitThunk({
         ...tuit,
         likes: tuit.likes + 1
       }))} className="bi bi-heart-fill me-2 text-danger"></i> {tuit.likes}
     </div>

     <div className="col-auto">
       <i onClick={() => dispatch(updateTuitThunk({
         ...tuit,
         dislikes: tuit.dislikes + 1
       }))} className="bi bi-hand-thumbs-down me-2"></i> {tuit.dislikes}
     </div>

      <div className="col-auto">
        <i className="bi bi-upload" />
      </div>
    </div>

  );
};
export default TuitStats;