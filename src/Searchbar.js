import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleSearchChange = e => {
    console.log(e.target.value);
    if (!e.target.value) return setSearchResults(posts);

    const resultArray = posts.filter(
      post =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultArray);
  };

  return (
    <>
      <header>
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            id="search"
            onChange={handleSearchChange}
          />
          <button className="search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
