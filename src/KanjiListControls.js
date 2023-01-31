import React from 'react';
import AddKanjiForm from './AddKanjiForm';
import { Collapse } from '@mui/material';

const KanjiListControls = ({ kanjiList, setKanjiList }) => {
  
  const [addFormShown, setAddFormShown] = React.useState(false);

  const getCheckedKanjiCount = () => {
    let count = 0;
    kanjiList.forEach((kanji) => {
      if (kanji.checked === true) count++;
    });
    return count;
  }

  const handleSave = () => {
    localStorage.setItem('saved-kanji-list', JSON.stringify(kanjiList));
  }

  const handleLoad = () => {
    setKanjiList(JSON.parse(localStorage.getItem('saved-kanji-list')));
  }

  return (
    <section id='kanji-list-controls'>
      <div className='control-panel'>
        <p>Checked { getCheckedKanjiCount() } of { kanjiList.length } { (kanjiList.length === 1) ?
          'line' : 'lines' }</p>
        <button
          className='control-button'
          onClick={ () => setAddFormShown(!addFormShown) }
          style={ addFormShown ? { backgroundColor: "#e2e2ec" } : {} }
        >Add Kanji</button>
        <button className='control-button' onClick={ handleSave }>Save</button>
        <button className='control-button' onClick={ handleLoad }>Load</button>
      </div>
      <Collapse in={addFormShown}>
        <AddKanjiForm
          kanjiList={ kanjiList }
          setKanjiList={ setKanjiList }
        /> 
      </Collapse>
    </section>
  );
}

export default KanjiListControls;