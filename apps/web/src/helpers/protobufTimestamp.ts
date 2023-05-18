/**
 * Converts epoch time stamp in milliseconds into google timestamp protobuf format.
 * Refer to https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp
 * @param epochTimeStampInMilliSeconds Epoch time stamp in milliseconds
 * @returns Google Timestamp protobuf
 */
function convertToProtobufTimestamp(epochTimeStampInMilliSeconds?: number) {
  const seconds = Math.floor(epochTimeStampInMilliSeconds / 1000);
  const remainingMilliSeconds = epochTimeStampInMilliSeconds % 1000;
  const remainingMilliSecondsAtNanoSecondsResolution = remainingMilliSeconds * 1000000;
  return {
    seconds,
    nanos: remainingMilliSecondsAtNanoSecondsResolution
  };
}

const getCurrentProtobufTimeStamp = () => {
  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);
  return protobufTimeStamp;
};

export { convertToProtobufTimestamp, getCurrentProtobufTimeStamp };
