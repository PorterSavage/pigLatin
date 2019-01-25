$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var input = $("#pig").val();
    var words = input.split(" ");

    words.forEach(function(word, i) {
      if ((word.charAt(0) === "a") || (word.charAt(0) === "e") || (word.charAt(0) === "i") || (word.charAt(0) === "o") || (word.charAt(0) === "u")) {
      words[i] = word + "way"
      }
      else if (word.includes("qu") === true) {
        var p = word.indexOf("qu")
        var pig = word.slice(0, p + 2) + "ay"
        var latin = word.slice(p + 2, word.length) + pig

      alert(latin)

      }
    });
      alert(words)
  });
});
