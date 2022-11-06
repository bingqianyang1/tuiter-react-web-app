import React from "react";
import { useDispatch } from "react-redux";


const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

    const likeTuit = () => {
      dispatch({ type: "like-tuit", tuit });
    };


  return (


    <div className="row mt-2 mb-2 text-secondary">
      <div className="col-3">
        <i className="bi bi-chat me-1" /> {tuit.replies}
      </div>
      <div className="col-3">
        <i className="bi bi-arrow-repeat me-1" /> {tuit.retuits}
      </div>
      <div onClick={likeTuit} className="col-3">
        {tuit.liked && (
          <i className="bi bi-heart-fill me-1" style={{ color: "red" }} />
        )}
        {!tuit.liked && <i className="bi bi-heart me-1" />}
        {tuit && tuit.likes}
      </div>
      <div className="col-3">
        <i className="bi bi-upload" />
      </div>
    </div>
  );
};
export default TuitStats;