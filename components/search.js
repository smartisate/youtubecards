import Link from 'next/link';

const Search = () => {
  return (
    <div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i className="bi bi-search"></i>            
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i className="bi bi-mic-fill"></i>
          </button>
        </form>
    </div>
  );
}

export default Search;