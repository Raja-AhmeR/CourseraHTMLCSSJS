(function(window) {
    var el = document.getElementById("output");
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function(nameArray) {
        console.log(speakWord + " " + nameArray);
        el.innerHTML += "<p>" + speakWord + " " + nameArray +"</p>";
    }
    window.helloSpeaker = helloSpeaker;
})(window);