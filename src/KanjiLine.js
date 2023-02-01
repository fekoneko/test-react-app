import { BsXLg } from 'react-icons/bs';
import { serverUpdate, serverDelete } from './storageFunctions'

const KanjiLine = ({ SERVER_URL, kanji, kanjiList, setKanjiList, autoSaveMode }) => {

  const handleKanjiCheck = (id) => {
    const newKanjiList = kanjiList.map((kanji) => {
      if (kanji.id === id) {
        const newKanji = {...kanji, checked: !kanji.checked};
        if (autoSaveMode === 'server') serverUpdate(SERVER_URL, { checked: newKanji.checked }, id);
        return newKanji;
      }
      else {
        return kanji;
      }
  });
    setKanjiList(newKanjiList);
  }

  const handleDelete = (id) => {
    const newKanjiList = kanjiList.filter((kanji) => (kanji.id !== id));
    setKanjiList(newKanjiList);
    if (autoSaveMode === 'server') serverDelete(SERVER_URL, id);
  }

  return (
    <li>
      <button
        onClick={ () => handleKanjiCheck(kanji.id) }
        style={ kanji.checked ? {borderColor: '#b9b9c0'} : {} }  
      >
        <h1>{ kanji.writing }</h1>
        <p>{ kanji.meaning }</p>
        <p>{ kanji.onReadings.join('、') }</p>
        <p>{ kanji.kunReadings.join('、') }</p>
      </button>
      <button
        className='delete-button'
        onClick={ () => handleDelete(kanji.id) }
      >
        <BsXLg />
      </button>
    </li>
  );
}

export default KanjiLine;