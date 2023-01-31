import { BsXLg } from 'react-icons/bs';

const KanjiLine = ({ kanji, kanjiList, setKanjiList }) => {

  const handleKanjiCheck = (id) => {
    const newKanjiList = kanjiList.map((kanji) => (
      (kanji.id === id) ?
      {...kanji, checked: !kanji.checked} :
      kanji
    ));
    setKanjiList(newKanjiList);
  }

  const handleDelete = (id) => {
    const newKanjiList = kanjiList.filter((kanji) => (kanji.id !== id));
    setKanjiList(newKanjiList);
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