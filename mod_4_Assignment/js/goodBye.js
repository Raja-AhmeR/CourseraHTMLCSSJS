(function(window) {
    var el = document.getElementById("output");4
    var byeSpeaker = {};
    var speakWord = "Goodbye";
    byeSpeaker.speak = function(nameArray){
        console.log(speakWord + " " + nameArray);
        el.innerHTML += "<p>" + speakWord + " " + nameArray +"</p>";
    }
    window.byeSpeaker = byeSpeaker;
})(window);