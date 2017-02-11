import getEnvironment from '../constants/environment';

const ENV = getEnvironment();
export default function callApi(endpoint,
                                method = 'get',
                                headers = { 'content-type': 'application/json' },
                                body) {
  console.log(endpoint);
  console.log(method);
  console.log(headers);
  console.log(body);
  return fetch(`${ENV.BASE_URL_WS}${endpoint}`, {
    headers,
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => ({ error }));
}
