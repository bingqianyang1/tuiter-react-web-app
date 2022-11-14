import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({tuit}) => {

  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }


    return (
      <li className="list-group-item">
            <div className="row">

              <div className="col-auto">
                <img src={tuit.avatarIcon} width={50} className="float-start rounded-circle"/>
              </div>

              <div className="col-10">
                 <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                 <span className="fw-bold">{tuit.userName} </span>
                 <i className="bi bi-patch-check-fill text-primary"> </i>
                 <span className="text-secondary"> {tuit.handle}</span>
                 <span className="text-secondary"> · {tuit.time}</span>

                 <p className="mt-2">{tuit.tuit}</p>

                 <TuitStats tuit={tuit}/>
              </div>

            </div>
      </li>

      )
  };

  export default TuitItem;