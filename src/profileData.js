let defaultProfile = {
    profileName: "Your Name",
    email: "your.email@example.com",
    phone: "123-456-7890",
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Introduce yourself here...",
    skills: []
};

let profileData = JSON.parse(localStorage.getItem("profileData")) || defaultProfile;



function updateProfile(field, value) {
    profileData[field] = value;
    localStorage.setItem("profileData", JSON.stringify(profileData));
}

// 🔹 Memuat data profil
function loadProfileData() {

    document.getElementById("profileName").value = profileData.profileName;
    document.getElementById("email").value = profileData.email;
    document.getElementById("phone").value = profileData.phone;
    document.getElementById("bio").value = profileData.bio;
    document.querySelector("#profilePicture").src = profileData.profilePicture;
    document.getElementById("navProfilePicture").src = data.profilePicture;
    document.getElementById("navProfileName").textContent = data.profileName;

}

// 🔹 Ganti Foto Profil
document.getElementById("changePicture").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            updateProfile("profilePicture", e.target.result);
            document.querySelector("#profilePicture").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 🔹 Hapus Foto Profil (Reset ke Default)
document.getElementById("deletePicture").addEventListener("click", function () {
    updateProfile("profilePicture", defaultProfile.profilePicture);
    document.querySelector("#profilePicture").src = defaultProfile.profilePicture;
});


// 🔹 Event Listener
document.addEventListener("DOMContentLoaded", loadProfileData);

document.getElementById("profileName").addEventListener("input", function () {
    updateProfile("profileName", this.value);
});
document.getElementById("email").addEventListener("input", function () {
    updateProfile("email", this.value);
});
document.getElementById("phone").addEventListener("input", function () {
    updateProfile("phone", this.value);
});


document.getElementById("bio").addEventListener("input", function () {
    updateProfile("bio", this.value);
});


