import "./App.css";

const Card = ({ user }) => {
  return (
    <div key={user.id} className="UserWrapper">
      <img
        src={`https://robohash.org/${user.id}`}
        alt="profile"
        className="picture"
      />
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
      <p>hehenfe</p>
    </div>
  );
};

export default Card;
