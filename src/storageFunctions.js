import apiRequest from "./apiRequest";

const SAVE_NAME = 'saved-kanji-list';

const sortKanjiList = (kanjiList) => {
  return kanjiList.sort((first, second) => first.id - second.id);
}

export const localSave = (kanjiList) => {
  localStorage.setItem(SAVE_NAME, JSON.stringify(kanjiList));
  //
  console.log('Saved to LocalStorage');
}

export const localLoad = (setKanjiList) => {
  setKanjiList(JSON.parse(localStorage.getItem(SAVE_NAME)) || []);
  //
  console.log('Loaded from LocalStorage');
}

export const serverSave = async (SERVER_URL, kanjiList) => {
  const getResponse = await apiRequest(`${SERVER_URL}/${SAVE_NAME}`);
  if (!getResponse) {
    console.log('Server save error: cannot get server kanji list!');
    return;
  }
  const serverKanjiList =  sortKanjiList(await getResponse.json());
  kanjiList.forEach((kanji) => {
    if (!serverKanjiList.some((serverKanji) => {
      if (serverKanji.id === kanji.id) {
        if (JSON.stringify(serverKanji) !== JSON.stringify(kanji)) {
          serverUpdate(SERVER_URL, kanji, kanji.id); 
        }
        return true;
      }
      return false;
    })) {
      serverPost(SERVER_URL, kanji);
    }
  });
  serverKanjiList.forEach((serverKanji) => {
    if (serverKanji.id >= kanjiList.length) {
      serverDelete(SERVER_URL, serverKanji.id);
    }
  });

  // Remake this function!
}

export const serverUpdate = async (SERVER_URL, kanjiProps, id) => {
  const optionsObject = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(kanjiProps)
  };
  const response = await apiRequest(`${SERVER_URL}/${SAVE_NAME}/${id}`, optionsObject);
  if (!response) console.log('Server update error!');
  //
  else console.log('Updated kanji on server');
}

export const serverPost = async (SERVER_URL, kanji) => {
  const optionsObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(kanji)
  };
  const response = await apiRequest(`${SERVER_URL}/${SAVE_NAME}`, optionsObject);
  if (!response) console.log('Server post error!');
  //
  else console.log('Posted kanji on server');
}

export const serverDelete = async (SERVER_URL, id) => {
  const optionsObject = {
    method: 'DELETE'
  };
  const response = await apiRequest(`${SERVER_URL}/${SAVE_NAME}/${id}`, optionsObject);
  if (!response) console.log('Server post error!');
  //
  else console.log('Deleted kanji on server');
}

export const serverLoad = async (SERVER_URL, setKanjiList) => {
  const response = await apiRequest(`${SERVER_URL}/${SAVE_NAME}`);
  if (response) setKanjiList(sortKanjiList(await response.json()));
  else console.log('Server load error!');
  //
  if (response) console.log('Loaded from server');
}