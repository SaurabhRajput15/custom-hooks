import useFetch from "../customHooks/useFetch";

function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul style={{listStyle:"none"}}>
      {data.map(user => 
         <li 
           key={user.id}
           style={{textAlign:"center"}}
         >
          <div style={{border:"2px solid gray", margin:"10px", borderRadius:"5px"}}>
            <h2 style={{fontWeight:"bold", fontSize:"20px"}}>{user.title}</h2>
            <span>{user.body}</span>
          </div>
        </li>
      )}
    </ul>
  );
}

export default Users