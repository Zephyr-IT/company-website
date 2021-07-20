import ReactRoundedImage from "react-rounded-image";

import "./team.css";
import baseAvatar from "../../../images/avatarPlaceholder.jpg";

const Team = () => {
  return (
    <div className="team-bg">
      <h1 className="teamUpper">Our Team</h1>
      <h4 className="teamSub">Take a look at our team</h4>
      <div className="staffTables">
        <table className="staff">
          <tr>
            <ReactRoundedImage
              image={baseAvatar}
              borderRadius="100"
              roundedSize="0"
            />
          </tr>
          <tr>
            <h5 className="staffUpper">Connor van Wissen</h5>
            <p className="staffSub">Web designer</p>
          </tr>
        </table>
        <table className="staff">
          <tr>
            <ReactRoundedImage
              image={baseAvatar}
              borderRadius="100"
              roundedSize="0"
            />
          </tr>
          <tr>
            <h5 className="staffUpper">Dave Wolfs</h5>
            <p className="staffSub">Full Stack Developer</p>
          </tr>
        </table>
        <table className="staff">
          <tr>
            <ReactRoundedImage
              image={baseAvatar}
              borderRadius="100"
              roundedSize="0"
            />
          </tr>
          <tr>
            <h5 className="staffUpper">Max Smeets</h5>
            <p className="staffSub">Full Stack Developer</p>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Team;
