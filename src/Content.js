import React from 'react';
import KanjiList from './KanjiList';
import KanjiListControls from './KanjiListControls';
import SearchForm from './SearchForm';
import { localSave, serverSave } from './storageFunctions'

const Content = ({ SERVER_URL }) => {

  const [kanjiList, setKanjiList] = React.useState([]);
  const [displayedKanjiList, setDisplayedKanjiList] = React.useState(kanjiList);
  const [searchRequest, setSearchRequest] = React.useState('');
  const [autoSaveMode, setAutoSaveMode] = React.useState('off');

  React.useEffect(() => {
    if (autoSaveMode === 'local') localSave(kanjiList);
    else if (autoSaveMode === 'server-update-all') serverSave(SERVER_URL, kanjiList);
  }, [autoSaveMode, kanjiList, SERVER_URL]);

  React.useEffect(() => {

    const updateSearchResults = () => {
      if (searchRequest === '') {
        setDisplayedKanjiList(kanjiList);
        return;
      };
      const resultList = kanjiList.filter((kanji) => (
        searchRequest.replaceAll(', ', '　').replaceAll(',', '　').replaceAll(' ',
          '　').replaceAll('、').split('　').map((requestPart) => (
          
          requestPart && (kanji.id === +requestPart || kanji.writing === requestPart ||
          kanji.meaning.toLowerCase().includes(requestPart.toLowerCase()) ||
            kanji.onReadings.some((reading) => reading === requestPart) ||
            kanji.kunReadings.some((reading) => reading === requestPart))
        )).some((meetRequestParts) => meetRequestParts)
      ));
      setDisplayedKanjiList(resultList);
    }

    updateSearchResults();
  }, [kanjiList, searchRequest]);

  return (
    <main>
      <SearchForm
        searchRequest={ searchRequest }
        setSearchRequest={ setSearchRequest }
      />
      <KanjiList
        SERVER_URL={ SERVER_URL }
        kanjiList={ kanjiList }
        setKanjiList={ setKanjiList }
        displayedKanjiList={ displayedKanjiList }
        autoSaveMode={ autoSaveMode }
      />
      <KanjiListControls
        SERVER_URL={ SERVER_URL }
        kanjiList={ kanjiList }
        setKanjiList={ setKanjiList }
        autoSaveMode={ autoSaveMode }
        setAutoSaveMode={ setAutoSaveMode }
      />
    </main>
  );
}

export default Content;