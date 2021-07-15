import React from "react";

import { Table, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addtogroupe, reject } from "../action/groupeaction";

const Tablegroupeadmin = ({ match }) => {
  const dispatch = useDispatch();

  const gadmin = useSelector((state) => state.gadmin.groupes);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (key) => (
        <Space size="middle">
          <button
            onClick={() =>
              dispatch(
                addtogroupe(
                  newgroupe._id,
                  newgroupe.subvalid[key.key]._id,
                  gadmin[0].groupeAdmin
                )
              )
            }
          >
            accept
          </button>
          <button
            onClick={() =>
              dispatch(
                reject(
                  newgroupe._id,
                  newgroupe.subvalid[key.key]._id,
                  gadmin[0].groupeAdmin,
                )
              )
            }
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const newgroupe =
    gadmin.find((groupe) => groupe._id === match.params.id) || {};

  const data = [];
  for (let i = 0; i < newgroupe.subvalid.length; i++) {
    data.push({
      key: i,
      name: `${newgroupe.subvalid[i].firstname}-${newgroupe.subvalid[i].lastname}`,
      phone: `${newgroupe.subvalid[i].phone}`,
      email: `${newgroupe.subvalid[i].email} `,
    });
  }

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Tablegroupeadmin;
