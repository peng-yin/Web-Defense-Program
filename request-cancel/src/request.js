export default function request(url, options = {}, callback) {
  const fetchPromise = fetch(url, options)
    .then(response => response.json());

  let abort;
  const abortPromise = new Promise((resolve, reject) => {
    abort = () => {
      reject(Error('abort'));
    };
  });

  Promise.race([fetchPromise, abortPromise]).then(({ data }) => {
    callback(data);
  }).catch(() => { });

  return abort;
}
