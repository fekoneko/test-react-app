const apiRequest = async (url, optionsObject = null) => {
  try {
    const response = await (optionsObject ? fetch(url, optionsObject) : fetch(url));
    if (!response.ok) throw new Error('Incorrect response!');
    return await response;
  } catch (err) {
    return null;
  }
}

export default apiRequest;