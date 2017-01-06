function words_array(words) {
  this.words = words;
  this.random_word = function () {
    return this.words[Math.floor(Math.random() * words.length)];
  };
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function generate_phrase() {
  var verbs = new words_array(
    [
      "galloping", "crying", "elightening", "fly", "rise",
      "reflects", "climb", "burn", "redeem", "power", "guide",
      "standing", "blazing", "reaching", "searching"
    ]
  );

  var adverbs = new words_array(
    [
      "triumphantly", "quickly", "eternally", "brightly",
      "vengefully", "courageously", "defiantly", "gracefully",
      "solemnly", "viciously", "sorrowfully", "bravely",
      "mysteriously", "violently", "frantically", "widly"
    ]
  );

  var prepositions = new words_array(
    [
      "through", "into", "above", "beneath",
      "beyond", "amongst", "below", "under",
      "in", "against", "within", "inside",
      "before", "outside"
    ]
  );

  var adjectives = new words_array(
    [
      "snowy", "shining", "glowing", "ancient", "rising",
      "crystal", "fantastical", "soulful", "aggresive",
      "courageous", "defiant", "bloody", "cloudy", "graceful",
      "mysty", "icy"
    ]
  );

  var nouns = new words_array(
    [
      "moonlight", "darkness", "defendors", "wings", "light",
      "fields", "destiny", "sun", "heavens", "souls", "sunlight",
      "battle cry", "night", "skies", "dream", "clouds", "path",
      "ice", "mountains", "plains", "hearts", "stars", "fire",
      "lands", "abyss"
    ]
  );

  var count = verbs.words.length * adverbs.words.length * prepositions.words.length * adjectives.words.length * nouns.words.length
  console.log("This app can generate " + count + " different verses");

  return verbs.random_word().capitalize() + " " + adverbs.random_word() + " " + prepositions.random_word() + " " + adjectives.random_word() + " " + nouns.random_word();
}

function random_background() {
  var bg_names = new words_array(["bg1", "bg2", "bg3", "bg4"]);
  bg = "backgrounds/" + bg_names.random_word() + ".jpg";
  var div = document.getElementById('main_div');
  div.style.backgroundImage = "url('" + bg + "')"
}

function changeText(elem) {
  elem.innerHTML = generate_phrase();
}
