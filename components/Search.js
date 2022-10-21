import Link from 'next/link';

const Search = () => {
  return (
      <div className='d-flex justify-content-center'>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 yc-search-items"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />          
        </form>
        <button className="btn btn-outline-success my-2 my-sm-0 yc-search-items" type="submit">
          <i className="bi bi-search yc-icon-search"></i>            
        </button>
        <button className="btn btn-outline-success my-2 my-sm-0 yc-search-items" type="submit">
          <i className="bi bi-mic-fill yc-icon-search"></i>
        </button>
    </div>
  );
}

export default Search;