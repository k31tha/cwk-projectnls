export async function getMessageStub() {
  await fetch('http://cwknls.localhost/message')
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)));
}

export async function getMessageStub2() {
  const response = await fetch('http://cwknls.localhost/message');
  const json = await response.json();
  return {
    json: json,
    response: response,
  };
}

export async function getMessageStub500Err() {
  const response = await fetch('http://cwknls.localhost/message?fail=500');
  const json = await response.json();
  return {
    json: json,
    response: response,
  };
}
