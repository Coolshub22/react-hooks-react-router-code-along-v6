

function UserCard({user}) {
  return (
    <div>
    <h2>{user.name}</h2>
    <Link to={`/profile/${user.id}`}>View Profile</Link>
  </div>
  );
};

export default UserCard;