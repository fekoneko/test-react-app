import KanjiLine from './KanjiLine';

const KanjiList = ({ kanjiList, setKanjiList, displayedKanjiList }) => {
  return (
    <section id='kanji-list'>
      <ul>
        {
          displayedKanjiList.map((kanji) => (
            <KanjiLine
              key={ kanji.id }
              kanji={ kanji }
              kanjiList={ kanjiList }
              setKanjiList={ setKanjiList }
            />
          ))
        }
      </ul>
    </section>
  );
}

export default KanjiList;