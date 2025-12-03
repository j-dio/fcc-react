import useFetch from "../../hooks/useFetch";

const FetchPosts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <h3 style={{color: "black", fontWeight: "1"}} key={post.id}>{post.title}</h3>
        ))}
      </ul>
    </>
  );
};

export default FetchPosts;
