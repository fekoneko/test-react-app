import React from 'react';
import { BsXLg } from 'react-icons/bs';

const SearchForm = ({ searchRequest, setSearchRequest }) => {

  const defaultFocusRef = React.useRef();

  return (
    <form
      className='search-form'
      onSubmit={ (e) => e.preventDefault() }
    >
      <label htmlFor='search-field' className='hidden-label'>Search:</label>
      <input
        id='search-field'
        ref={ defaultFocusRef }
        type='text'
        role='searchbox'
        value={ searchRequest }
        placeholder='Start typing to search...'
        onChange={ (e) => setSearchRequest(e.target.value) }
      />
      <button
        className='control-button'
        type='button'
        onClick={ () => {
          setSearchRequest('');
          defaultFocusRef.current.focus();
        } }
      >
        <BsXLg />
      </button>
    </form>
  );
}

export default SearchForm;