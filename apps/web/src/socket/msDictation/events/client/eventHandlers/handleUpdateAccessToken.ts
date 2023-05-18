import _isNil from "lodash/isNil";

function handleUpdateAccessToken(payload: any, { socket }: any) {
  // Handles updation of access token whenever client refreshes token on expiration
  const { data } = payload;
  if (!_isNil(data)) {
    socket.data.accessToken = data;
  }
}
export { handleUpdateAccessToken };
