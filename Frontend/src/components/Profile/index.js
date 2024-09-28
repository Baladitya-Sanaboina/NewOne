import { useEffect, useState } from "react";
import "./index.css";
import { FaTrophy, FaClipboardList, FaUserEdit, FaLock } from "react-icons/fa"; // Import icons

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Quiz enthusiast and lifelong learner.",
    quizzesTaken: 45,
    achievements: ["Top Scorer", "Science Whiz", "Math Guru"],
  });

  useEffect(() => {
    // Fetch user info (mocked data here)
    // This could come from an API or local storage
  }, []);

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <section className="profile-header">
        <div className="profile-bg"></div>
        <div className="profile-info">
          <img
            className="profile-avatar"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <h1 className="profile-name">{userInfo.name}</h1>
          <p className="profile-email">{userInfo.email}</p>
        </div>
      </section>

      {/* Profile Details */}
      <section className="profile-details">
        <h2 className="details-title">About Me</h2>
        <p className="profile-bio">{userInfo.bio}</p>

        <div className="profile-stats">
          <div className="stat-card">
            <FaClipboardList className="stat-icon" />
            <h3>{userInfo.quizzesTaken}</h3>
            <p>Quizzes Taken</p>
          </div>
          <div className="stat-card">
            <FaTrophy className="stat-icon" />
            <h3>{userInfo.achievements.length}</h3>
            <p>Achievements</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="profile-achievements">
        <h2 className="details-title">Achievements</h2>
        <div className="achievements-list">
          {userInfo.achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Settings or Edit Options */}
      <section className="profile-actions">
        <h2 className="details-title">Profile Settings</h2>
        <div className="action-cards">
          <div className="action-card">
            <button>
              <FaUserEdit /> Edit Profile
            </button>
          </div>
          <div className="action-card">
            <button>
              <FaLock /> Change Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
