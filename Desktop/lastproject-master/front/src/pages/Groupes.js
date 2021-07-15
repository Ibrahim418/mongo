import React from "react";
import GroupesList from "./GroupesList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addsub } from "../action/groupeaction";
import "./Groupes.css";

const Groupes = ({ groupe }) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handlesub = () => {
    dispatch(addsub(groupe._id, user._id));
  };

  return (
    <div className="wrapper">
      <div className="cardgr">
        <img src="/images/camp1.jpg" />
        <div className="info">
          <h1 className='textr'>{groupe.theme} </h1>

          {groupe.subscribe.includes(auth.user._id) ? (
            <Link to={`/groupe/${groupe._id}`}>
              <div>
                <h2 className='textr'>join</h2>
              </div>
            </Link>
          ) : groupe.subvalid.includes(auth.user._id) ? (
            <button>waiting...</button>
          ) : (
            <button onClick={handlesub}>subscribe</button>
          )}
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Groupes;
