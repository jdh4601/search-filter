import './App.css';
import { getPosts } from './api/axios';
import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import ListPage from './ListPage';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts() // get method로 데이터 조회, 요청
      .then(json => {
        setPosts(json);
        setSearchResults(json); // searchResult state에 넣음
      });
  }, []);

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;
