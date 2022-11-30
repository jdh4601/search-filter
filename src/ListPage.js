import Post from './Post';

const ListPage = ({ searchResults }) => {
  const results = searchResults.map(post => <Post key={post.id} post={post} />);

  const content = results?.length ? results : <p>No Matching Posts</p>;

  return (
    <>
      <main>{content}</main>
    </>
  );
};

export default ListPage;
