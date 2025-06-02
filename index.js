// Function 1: shout(string)
// Receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase();
}

// Function 2: whisper(string)
// Receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// Function 3: logShout(string)
// Takes a string argument and logs it in all caps using console.log()
function logShout(string) {
  console.log(string.toUpperCase());
}

// Function 4: logWhisper(string)
// Takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Function 5: sayHiToHeadphonedRoommate(string)
// Returns different responses based on the input:
// - "I can't hear you!" if string is lowercase
// - "YES INDEED!" if string is uppercase
// - "I would love to!" if string is "Let's have dinner together!"
function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
}