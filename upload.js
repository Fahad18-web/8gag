//nav-bar dropdown-list 
document.getElementById("dropdownIcon").addEventListener("click", function () {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#dropdownIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
//end



function showUploadForm() {
    document.getElementById("uploadForm").style.display = "block";
}

function closeUploadForm() {
    document.getElementById("uploadForm").style.display = "none";
}

function post() {
    var username = document.getElementById("username").value;
    var img = document.getElementById("img").files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var imgData = e.target.result;
        displayPost(username, imgData);
        closeUploadForm();
    }
    reader.readAsDataURL(img);
}

function displayPost(username, imgData) {
    var postDiv = document.createElement("div");
    var postImage = document.createElement("img");
    postImage.src = imgData;
    postImage.style.width = "200px"; // Adjust size as needed
    postImage.style.height = "auto"; // Adjust size as needed
    var postUsername = document.createElement("p");
    postUsername.textContent = "Posted by: " + username;
    postDiv.appendChild(postImage);
    postDiv.appendChild(postUsername);
    document.getElementById("posts").appendChild(postDiv);
}
