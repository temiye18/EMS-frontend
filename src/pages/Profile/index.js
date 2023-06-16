import { MaleAvatar, FemaleAvatar } from "assets/images";
import Container from "./styles";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <div className="user--card">
        <div className="header"></div>

        {currentUser?.gender.toLowerCase() === "male" ? (
          <img src={MaleAvatar} alt="user" />
        ) : (
          <img src={FemaleAvatar} alt="user" />
        )}

        <div className="body">
          <h2>Your details</h2>
          <p>
            <span>Name:</span> {currentUser?.name}
          </p>
          <p>
            <span>Name:</span> {currentUser?.gender}
          </p>
          <p>
            <span>Email:</span> {currentUser?.email}
          </p>
          <p>
            <span>Role:</span> {currentUser?.role}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
