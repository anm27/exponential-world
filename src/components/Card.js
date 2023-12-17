import { IoPersonCircle } from "react-icons/io5";

function Card(props) {
  return (
    <div className="main">
      <div className="Client-Card" style={{ display: "flex" }}>
        <IoPersonCircle
          // imgProps={{ style: { borderRadius: "50%" } }}
          className=""
          size={123}
          src={props.avatar}
        />
        <p style={{ marginTop: 25 }}>
          <span>&ldquo;</span>
          {props.message}
        </p>
        <p>
          <span className="Name">
            {props.name} , {props.location}
          </span>
        </p>
        <p className="designation">
          <span>{props.designation}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
