const client = new WebSocket('ws://localhost:8080');


client.onopen = () => {
  console.log('WebSocket Client Connected');
};

client.onmessage = (message) => {
  console.log('Message received from server', message);
};

client.onerror = function () {
  console.log('Connection Error');
};

export default client