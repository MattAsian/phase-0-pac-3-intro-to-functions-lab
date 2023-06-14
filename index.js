 function shout(string) {
    return string.toUpperCase();
  }

  "Hello!".toUpperCase(); // 'HELLO!'

  function whisper(string) {
    return string.toLowerCase();
  }

  "HELLO".toLowerCase();

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  "Hello".toUpperCase();
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  "Hello".toLowerCase();

function sayHiToHeadphonedRoommate(string) {
    var whisper = "I can\'t hear you!"
    var shout = "YES INDEED!"
    var dinner = "I would love to!"
    
    if (string.toLowerCase(string) === string) {
      return whisper;  
    }
    else if (string.toUpperCase(string) === string) {
        return shout;
        }
    else if ("Let\'s have dinner together!" === string) {
        return dinner; 
    }
}