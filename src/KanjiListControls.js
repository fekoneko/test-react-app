import React from 'react';
import AddKanjiForm from './AddKanjiForm';
import { Collapse } from '@mui/material';
import { localSave, localLoad, serverSave, serverLoad } from './storageFunctions'

const KanjiListControls = ({ SERVER_URL, kanjiList, setKanjiList, autoSaveMode, setAutoSaveMode }) => {
  
  const [autoSaveSwitchState, setAutoSaveSwitchState] = React.useState(autoSaveMode);
  const [addFormShown, setAddFormShown] = React.useState(false);

  const getCheckedKanjiCount = () => {
    let count = 0;
    kanjiList.forEach((kanji) => {
      if (kanji.checked === true) count++;
    });
    return count;
  }

  const switchAutoSaveMode = () => {
    const modeList = [ 'off', 'local', 'server', 'server-update-all' ];
    const newModeIndex = (modeList.findIndex((mode) => mode === autoSaveSwitchState) + 1) % 4;
    setAutoSaveSwitchState(modeList[newModeIndex]);
  }

  const applyAutoSaveMode = () => {
    setAutoSaveMode(autoSaveSwitchState);
    if (autoSaveSwitchState === 'server') serverSave(SERVER_URL, kanjiList);
  }

  return (
    <section id='kanji-list-controls'>
      <p style={ {textAlign: 'center'} }>
        Checked { getCheckedKanjiCount() } of { kanjiList.length } {
          (kanjiList.length === 1) ? 'line' : 'lines' }
      </p>
      <div className='control-panel'>
        <button className='control-button'
          onClick={ () => localSave(kanjiList) }>Save (Local)</button>
        <button className='control-button'
          onClick={ () => localLoad(setKanjiList) }>Load (Local)</button>
        <button className='control-button'
          onClick={ () => serverSave(SERVER_URL, kanjiList) }>Save (Server)</button>
        <button className='control-button'
          onClick={ () => serverLoad(SERVER_URL, setKanjiList) }>Load (Server)</button>
      </div>
      <div className='control-panel'>
        <button className='control-button'
            onClick={ () => setAddFormShown((prev) => !prev) }
            style={ addFormShown ? { backgroundColor: "#e2e2ec" } : {} }
          >Add Kanji</button>
        <button className='control-button'
          onClick={ switchAutoSaveMode }
        >Autosave Mode: ({ autoSaveSwitchState })</button>
        <button className='control-button'
          onClick={ applyAutoSaveMode }
          style={ (autoSaveSwitchState === autoSaveMode) ? { backgroundColor: "#e2e2ec" } : {} }
        >Apply Autosave Mode</button>
      </div>
      <Collapse in={addFormShown}>
        <AddKanjiForm
          SERVER_URL={ SERVER_URL }
          kanjiList={ kanjiList }
          setKanjiList={ setKanjiList }
          autoSaveMode={ autoSaveMode }
        /> 
      </Collapse>
    </section>
  );
}

export default KanjiListControls;