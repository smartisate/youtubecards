import Link from 'next/link';

const Search = () => {
  return (
      <div className='ycSearchContainer'>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 ycSearchItem"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />          
        </form>
        <button id="ycBtnSearchItemSubtitle" className='ycSearchItem'>
        </button>
        <button id="ycBtnSearchItemLegacy" className="ycSearchItem">
          <i className="bi bi-search"></i>
        </button>
        <button id="ycBtnSearchItemVoice" className="ycSearchItem">
          <i className="bi bi-mic-fill"></i>
        </button>
    </div>
  );
}

export default Search;