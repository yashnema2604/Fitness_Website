export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '69dac17873mshb9104214f181070p1366b3jsn5c6718c400fa',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '69dac17873mshb9104214f181070p1366b3jsn5c6718c400fa',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
