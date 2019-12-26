type Callback = (data: any) => void;

/**
 * Делает GET-запрос к серверу
 */
export default (
  path: string,
  successCallback: Callback,
  errorCallback: Callback = null,
) => {
  fetch(`http://localhost:2008${path}`)
    .then(res => {
      res.json().then(successCallback);
    })
    .catch(rej => {
      if (errorCallback) {
        errorCallback(rej);
      }
    })
};
