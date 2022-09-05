(function (){
    var nameArray = ["Ahmer", "Letty", "John", "j", "Yavkov", "Depp", "James", "Hilton", "John Doe"];
    // console.log("Array contains the following names: \n" + nameArray);

    for (var i = 0; i < nameArray.length; i++) {
        var firstLetter = nameArray[i].charAt(0).toLowerCase();
        if (firstLetter === "j") {
            byeSpeaker.speak(nameArray[i]);
        } else {
            helloSpeaker.speak(nameArray[i]);
        }
    }
})();