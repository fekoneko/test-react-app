import KanjiLine from './KanjiLine';

const KanjiList = ({ SERVER_URL, kanjiList, setKanjiList, displayedKanjiList, autoSaveMode }) => {
  return (
    <section id='kanji-list'>
      <ul>
        {
          displayedKanjiList.map((kanji) => (
            <KanjiLine
              SERVER_URL={ SERVER_URL }
              key={ kanji.id }
              kanji={ kanji }
              kanjiList={ kanjiList }
              setKanjiList={ setKanjiList }
              autoSaveMode={ autoSaveMode }
            />
          ))
        }
      </ul>
    </section>
  );
}

export default KanjiList;