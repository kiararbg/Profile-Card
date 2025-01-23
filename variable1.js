/*const name = "John Doe";
const age = "28";
const occupation = "Web developer";
const Bio = "Passionate about coding and teaching others";
const profilePicture = "../Task Manager Web App/profile.png";
const profileContainer = document.getElementById("profile-container");*/
const profileContainer = document.getElementById("profile-container");
const profile =
    ["John Doe", 
    28,
    "Web Developer",
    "Passionate about coding and teaching others.",
    "../Profile_Card/profile.png"
    ];





const profileCard = 
    '<div class="card">' +
    '<img src= "' + profile[4] +'" alt=Profile Picture">' +
    '<h2>' + profile[0] + '</h2>' +
    '<p>Age: ' + profile[1] + '</p>' +
    '<p>Occupation: ' + profile[2] + '</P>' +
    '<p>' + profile[3] + '</P>' +
    '</div>';
        

profileContainer.innerHTML = profileCard;