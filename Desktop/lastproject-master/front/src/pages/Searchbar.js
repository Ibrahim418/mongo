import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Space } from "antd";
import { getUsersList } from "../action/useraction";
import { Link } from "react-router-dom";
import "./Searchbar.css";


const { Search } = Input;

const Searchbar = () => {
  const [filterdata, setFilterdata] = useState([]);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const hundlefilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = users.filter((value) => {
      return value.firstname.includes(searchWord);
    });
    if (searchWord === "") {
      setFilterdata([]);
    } else {
      setFilterdata(newFilter);
    }
  };
  return (
    <div>
      <li className="search-Item">
        <Space style ={{display:'flex', flexDirection : 'row' , flexWrap:'wrap'}}>
          <Search
            placeholder="input search text"
            allowClear
             onChange={hundlefilter}
       
          />
          {filterdata.length != 0 && (
            <div  className="dataresulat">
              {filterdata &&
                filterdata.map((userprof, i) => {
              
                  return (
                    <ul>
                    <li>
                    <Link
                      to={`/Profile/${userprof._id}`}
                      className="dataItem"
                      key={i}
                   >
                      {userprof.firstname + " " + userprof.lastname}
                    </Link>
                    </li>
                    </ul>
                  );
                })}
            </div>
          )}
        </Space>
      </li>
    </div>
  );
};

export default Searchbar;
