import { BsXLg } from 'react-icons/bs';

const SearchForm = ({ searchRequest, setSearchRequest }) => {

  return (
    <form
      className='search-form'
      onSubmit={ (e) => e.preventDefault() }
    >
      <input
        id='search-field'
        type='text'
        role='searchbox'
        value={ searchRequest }
        placeholder='Start typing to search...'
        onChange={ (e) => setSearchRequest(e.target.value) }
      />
      <button
        className='control-button'
        onClick={ () => setSearchRequest('') }
      >
        <BsXLg />
      </button>
    </form>
  );
}

export default SearchForm;