import React from 'react';
import KanjiList from './KanjiList';
import KanjiListControls from './KanjiListControls';
import SearchForm from './SearchForm';

const Content = () => {

  const [kanjiList, setKanjiList] = React.useState([
    {
      id: 0,
      checked: false,
      writing: '人',
      onReadings: [ 'ニン', 'ジン' ],
      kunReadings: [ 'ひと'],
      meaning: 'human',
    },
    {
      id: 1,
      checked: false,
      writing: '人',
      onReadings: [ 'ニン', 'ジン' ],
      kunReadings: [ 'ひと'],
      meaning: 'human',
    },
    {
      id: 2,
      checked: false,
      writing: '人',
      onReadings: [ 'ニン', 'ジン' ],
      kunReadings: [ 'ひと'],
      meaning: 'human',
    },
  ]);
  const [displayedKanjiList, setDisplayedKanjiList] = React.useState(kanjiList);
  const [searchRequest, setSearchRequest] = React.useState('');

  const updateSearchResults = (newKanjiList, newSearchRequest) => {
    if (newSearchRequest === '') {
      setDisplayedKanjiList(newKanjiList);
      return;
    }
    const resultList = newKanjiList.filter((kanji) => (
      kanji.id === +newSearchRequest || kanji.writing === newSearchRequest || kanji.meaning === newSearchRequest ||
        kanji.onReadings.some((reading) => reading === newSearchRequest) ||
        kanji.kunReadings.some((reading) => reading === newSearchRequest)
    ));
    setDisplayedKanjiList(resultList);
  }

  const setKanjiListAndUpdate = (newKanjiList) => {
    setKanjiList(newKanjiList);
    updateSearchResults(newKanjiList, searchRequest);
  }

  const setSearchRequestAndUpdate = (newSearchRequest) => {
    setSearchRequest(newSearchRequest);
    updateSearchResults(kanjiList, newSearchRequest);
  }

  return (
    <main>
      <SearchForm
        searchRequest={ searchRequest }
        setSearchRequest={ setSearchRequestAndUpdate }
      />
      <KanjiList
        kanjiList={ kanjiList }
        setKanjiList={ setKanjiListAndUpdate }
        displayedKanjiList={ displayedKanjiList }
      />
      <KanjiListControls
        kanjiList={ kanjiList }
        setKanjiList={ setKanjiListAndUpdate }
      />
    </main>
  );
}

export default Content;