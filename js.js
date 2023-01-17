// -------------- Variable declerations

// Get elements for first person
var playerOne = document.getElementById('playerOne');
var playerOneWeeks = document.getElementById('playerOneWeeks');

// Get elements for second person
var playerTwo = document.getElementById('playerTwo');
var playerTwoWeeks = document.getElementById('playerTwoWeeks');

// Get element for theme display
var theme = document.getElementById('theme');

// Get element for week display
var weekCounter = document.getElementById('weekCounter');

// list of standard themes
var themes = [];

// List for all people, will fetch content from local storage
var people = [];

//Theme display Object
var themeList = document.getElementById('themeList');

//Player display Object
var playerList = document.getElementById('personList');



// -------------- Data handeling functions

// Save themes and people arrays to local storage
function saveJSON() {
    localStorage.setItem("people", JSON.stringify(people));
    localStorage.setItem("themes", JSON.stringify(themes));
}
// Check for data in local storage and load it to local arrays
function loadJSON() {
    if (localStorage.people !== null || localStorage.people !== "null") {
        people = JSON.parse(localStorage.getItem("people"));
    }

    if (localStorage.themes !== null || localStorage.themes !== "null") {
        themes = JSON.parse(localStorage.getItem("themes"));
    }
}



// -------------- Navbar Button event listeners

// Show Edit page / Hide This Week page
document.getElementById("EditBtn").addEventListener("click", function() {
    document.getElementById("EditPage").hidden = false;
    document.getElementById("ThisWeekPage").hidden = true;
});

// Show This Week page / Hide Edit page
document.getElementById("ThisWeekBtn").addEventListener("click", function() {
    document.getElementById("ThisWeekPage").hidden = false;
    document.getElementById("EditPage").hidden = true;
});



// -------------- This week page functions


//Set correct week based on computer calender
currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

weekCounter.innerHTML = "Week " + Math.ceil(days / 7);



// -------------- Edit page functions

// Add to lists
document.getElementById('peopleAdd').addEventListener( "click", function() {
    const newEntry = document.createElement('li');
    newEntry.classList.add("relative", "ml-[5%]", "mt-[14%]", "bg-col1", "w-[90%]", "h-[3vh]");
    
    const newName = document.createElement('p');
    newName.classList.add("ml-[5%]", "text-xl", "font-bold", "text-col4");
    newName.innerText = document.getElementById('personInput').innerText;
    newEntry.appendChild(newName);

    document.getElementById('personInput').innerHTML = "";

    const newScore = document.createElement('p');
    newScore.classList.add("mt-[-9.5%]", "ml-[92.4%]", "text-xl", "font-bold", "text-col4");
    newScore.innerText = "0";
    newEntry.appendChild(newScore);

    playerList.appendChild(newEntry);
})

// Add to lists
document.getElementById('themeAdd').addEventListener( "click", function() {
    const newEntry = document.createElement('li');
    newEntry.classList.add("relative", "ml-[5%]", "mt-[14%]", "bg-col1", "w-[90%]", "h-[3vh]");
    
    const newName = document.createElement('p');
    newName.classList.add("ml-[5%]", "text-xl", "font-bold", "text-col4");
    newName.innerText = document.getElementById('personInput').innerText;
    newEntry.appendChild(newName);

    document.getElementById('personInput').innerHTML = "";

    const newScore = document.createElement('p');
    newScore.classList.add("mt-[-9.5%]", "ml-[92.4%]", "text-xl", "font-bold", "text-col4");
    newScore.innerText = "0";
    newEntry.appendChild(newScore);

    themeList.appendChild(newEntry);
})


// document.body.addEventListener( 'click', function ( event ) {

//     array.forEach(person => {
//         if( event.target.id == person ) {
//             someFunc();
//           };
//     });
    
//   } );

// -------------- Function Calls

//Load data on page load
loadJSON();




