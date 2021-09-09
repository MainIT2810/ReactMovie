import React from "react";
import { Content, Info } from "./style";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TOKEN } from "../../util/settings/config";

const DashBoard = (props) => {
  const { adminLogin } = useSelector((state) => state.LoginReducer);
  const history = useHistory();
  return (
    <Content>
      <div>
        <Card style={{ width: 300 }} className="card-profile">
          <img
            src="https://staticfvvn.s3-ap-southeast-1.amazonaws.com/fv4uploads/uploads/users/le/9ro/i3r/avatar/thumb_356987957833475.jpg"
            alt="avatar"
          />
          <div>
            <h3>Manager</h3>
            <p>{adminLogin?.hoTen}</p>
          </div>
          <button
            onClick={() => {
              history.push("/");
              localStorage.removeItem("login");
              localStorage.removeItem(TOKEN);
            }}
          >
            Log Out
          </button>
        </Card>
      </div>

      <Info>
        <div className="info">
          <p>
            Họ Tên : <span>{adminLogin?.hoTen}</span>
          </p>
          <p>
            Số điện thoại : <span>{adminLogin?.soDT}</span>
          </p>
          <p>
            Email: <span>{adminLogin?.email}</span>
          </p>
          <p>
            Người dùng : <span>{adminLogin?.maLoaiNguoiDung}</span>
          </p>
        </div>
       
      </Info>
    </Content>
  );
};

export default DashBoard;
