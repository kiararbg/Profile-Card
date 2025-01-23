const name = "John Doe";
const age = "28";
const occupation = "Web developer";
const Bio = "Passionate about coding and teaching others";
const profilePicture = "../Profile_Card/profile.png";
const profileContainer = document.getElementById("profile-container");
const profileCard = 
    '<div class="card">' +
    '<img src= "' + profilePicture +'" alt=Profile Picture">' +
    '<h2>' + name + '</h2>' +
    '<p>Age: ' + age + '</p>' +
    '<p>Occupation: ' + occupation + '</P>' +
    '<p>' + Bio + '</P>' +
    '</div>';
        

profileContainer.innerHTML = profileCard;