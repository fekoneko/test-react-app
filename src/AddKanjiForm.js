import React from 'react'
import FormFieldArray from './FormFieldArray';
import FormFieldText from './FormFieldText';
import { serverPost } from './storageFunctions'

const AddKanjiForm = ({ SERVER_URL, kanjiList, setKanjiList, autoSaveMode}) => {

  const [writing, setWriting] = React.useState('');
  const [meaning, setMeaning] = React.useState('');
  const [onReadings, setOnReadings] = React.useState([]);
  const [kunReadings, setKunReadings] = React.useState([]);

  const addKanji = () => {
    const id = kanjiList.length ? kanjiList[kanjiList.length - 1].id + 1 : 1;
    const newKanji = { id, checked: false, writing, onReadings, kunReadings, meaning };
    setKanjiList([...kanjiList, newKanji]);
    if (autoSaveMode === 'server') serverPost(SERVER_URL, newKanji);
  }

  const handleSubmit = (e) => {
    if (!writing || !meaning) return; 
    e.preventDefault();
    addKanji();
    setWriting('');
    setMeaning('');
    setOnReadings([]);
    setKunReadings([]);
  }

  return (
    <form className='add-kanji-form' onSubmit={ handleSubmit }>
      <FormFieldText
        fieldId='writing-field'
        fieldLabel='Kanji:'
        fieldPlaceholder='e.g. 人'
        text={ writing }
        setText={ setWriting }
      />
      <FormFieldText
        fieldId='meaning-field'
        fieldLabel='Meaning:'
        fieldPlaceholder='enter kanji meaning...'
        text={ meaning }
        setText={ setMeaning }
      />
      <FormFieldArray
        fieldId='onreadings-field'
        fieldLabel='On-Readings:'
        fieldPlaceholderPrefix={`on-reading #`}
        array={ onReadings }
        setArray={ setOnReadings }
      />
      <FormFieldArray
        fieldId='kunreadings-field'
        fieldLabel='Kun-Readings:'
        fieldPlaceholderPrefix={`kun-reading #`}
        array={ kunReadings }
        setArray={ setKunReadings }
      />
      <button className='control-button' type='submit'>
        Add
      </button>
    </form>
  );
}

export default AddKanjiForm;