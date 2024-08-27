// code with Explain 
// Define an array of student names
var studentName = ["name1", "name2", "name3", "name5", "name6", "name7", "name8", "name9", "name10"];

// Loop through each element in the studentName array
for (var i = 0; i < studentName.length; i++) {
    // Get the current element from the array
    var element = studentName[i];

    // Write the current element to the document (this will display it on the webpage)
    document.write(element);
    
    // The line below is commented out, so it does nothing
    // document.write()
}

// Prompt the user to enter a student name
var EnterName = prompt("Enter Student Name");

// Define the same array of student names again (this is a duplicate of the earlier array)
var studentNames = ["name1", "name2", "name3", "name5", "name6", "name7", "name8", "name9", "name10"];

// Loop through each element in the studentNames array
for (var e = 0; e < studentNames.length; e++) {
    // Get the current element from the array
    var element = studentNames[e];

    // Check if the user-entered name matches the current element
    if (EnterName === element) {
        // If there's a match, display an alert saying "Available"
        alert("Available");

        // Write the matching name to the document (this will display it on the webpage)
        document.write(element);
    }
}


// var studentName = ["name1", "name2", "name3", "name5", "name6", "name7", "name8", "name9", "name10"];
// for (var i = 0; i < studentName.length; i++){
//         var element = studentName[i];
//         document.write(element)
//         // document.write()
// }
// var EnterName = prompt("Enter Student Name");
// var studentNames = ["name1", "name2", "name3", "name5", "name6", "name7", "name8", "name9", "name10"];
// for (var e = 0; e < studentNames.length; e++){
//     var element = studentNames[e];
//     if (EnterName === element) {
//            alert("Available")
//         document.write(element)
//     }
// }