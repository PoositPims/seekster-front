import { Link, NavLink } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./ServiceItem.module.css";

function Serviceitem({ _id, content, image, picture, name, price }) {
  // console.log("id", _id);
  return (
    <li className={classes.item} key={_id}>
      {/* <NavLink to={`/service-detail/${props._id}`}> */}
      <NavLink to={{ pathname: "/service-detail", state: { _id } }}>
        <Card>
          <div className={classes.image}>
            <img src={picture} alt="" />

            {/* <img src="/card-job.png" alt="" /> */}
          </div>
          <div className={classes.content}>
            <p
              style={{
                // marginRight: "30px",
                marginLeft: "10px",
                width: "160px",
              }}
            >
              {name}
            </p>
            {/* <p style={{ marginRight: "30px", marginLeft: "20px" }}>ชื่อ</p> */}
            <div className={classes.contentPrice}>
              <p style={{ marginRight: "20px" }}>
                <span style={{ color: "#FF9900" }}>เริ่มต้น</span>
              </p>
              <p style={{ marginRight: "10px" }}>
                <b style={{ color: "#3F85FD", fontSize: "20px" }}>฿ {price}</b>
              </p>
            </div>
          </div>
        </Card>
      </NavLink>
    </li>
  );
}

export default Serviceitem;
