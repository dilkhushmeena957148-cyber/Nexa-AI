const messages = document.querySelector("#messages");

const welcomeScreen = document.querySelector(".welcome-screen");
// ======================
// ELEMENTS
// ======================

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const overlay = document.querySelector(".overlay");

const profileCard =
document.querySelector(".profile-card");

const accountPage =
document.querySelector(".account-page");
const accountBackBtn =
document.querySelector(".account-back-btn");

const settingsPage =
document.querySelector(".settings-page");

const settingsBackBtn =
document.querySelector(".settings-back-btn");
const editProfileCard =
document.querySelector(".edit-profile-card");

const settingsCard =
document.querySelector(".settings-card");
const sidebarSettings =
document.querySelector(".sidebar-settings");

if(sidebarSettings){

    sidebarSettings.addEventListener("click",()=>{

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    document.querySelector(".header").style.display="none";
    document.querySelector(".chat-area").style.display="none";
    document.querySelector(".input-container").style.display="none";

    accountPage.style.display = "block";

});

}




const editProfilePage =
document.querySelector(".edit-profile-page");

const editBackBtn =
document.querySelector(".edit-back-btn");

const messageInput = document.querySelector("#messageInput");
const fullNameInput =
document.querySelector("#fullName");

const saveProfileBtn =
document.querySelector("#saveProfileBtn");

const profileImageInput =
document.querySelector("#profileImageInput");



const profilePhotoBox =
document.querySelector(".profile-photo-box");

const accountUserName =
document.querySelector("#accountUserName");
const actionBtn = document.querySelector(".action-btn");

const attachBtn = document.querySelector(".attach-btn");
const uploadMenu = document.querySelector(".upload-menu");
const uploadItems = document.querySelectorAll(".upload-item");
const toolsPopup =
document.querySelector(".tools-popup");
const moreBtn =
document.querySelector(".more-btn");

const moreMenu =
document.querySelector(".more-menu");
const cancelPhotoMenu =
document.querySelector("#cancelPhotoMenu");


// ======================
// PHOTO MENU
// ======================

const photoMenu =
document.querySelector(".photo-menu");

const selectPhotoBtn =
document.querySelector("#selectPhotoBtn");

const takePhotoBtn =
document.querySelector("#takePhotoBtn");

const removePhotoBtn =
document.querySelector("#removePhotoBtn");



// ======================
// PROFILE AVATARS
// ======================

const sidebarAvatar =
document.querySelector("#sidebarAvatar");

const accountAvatar =
document.querySelector("#accountAvatar");

const aiToolsBtn = uploadItems[2];

const imageInput = document.querySelector("#imageInput");
const fileInput = document.querySelector("#fileInput");

let selectedFiles = [];

const selectedFilesBox =
document.querySelector("#selectedFiles");

// ======================
// UPLOAD MENU
// ======================

attachBtn.addEventListener("click", () => {

uploadMenu.classList.toggle("show");

});

uploadItems[0].addEventListener("click", () => {

imageInput.click();

uploadMenu.classList.remove("show");

});

uploadItems[1].addEventListener("click", () => {

fileInput.click();

uploadMenu.classList.remove("show");
});
aiToolsBtn.addEventListener("click", () => {

uploadMenu.classList.remove("show");  

toolsPopup.classList.add("show");

});
moreBtn.addEventListener("click", () => {

    moreMenu.classList.toggle("show");

});
imageInput.addEventListener("change", (e) => {

welcomeScreen.style.display = "none";  

const files = Array.from(e.target.files);  

files.forEach(file => {  

    if(selectedFiles.length >= 10){  
        return;  
    }  

    selectedFiles.push(file);  

    const preview =  
    document.createElement("div");  

    preview.className = "file-preview";  

    preview.innerHTML = `  
        <span>🖼 ${file.name}</span>  
        <span class="remove-file">❌</span>  
    `;  

    selectedFilesBox.appendChild(preview);  

    preview.querySelector(".remove-file")  
    .addEventListener("click", () => {  

        preview.remove();  

        selectedFiles =  
        selectedFiles.filter(f => f !== file);  

    });  

});

});

fileInput.addEventListener("change", () => {

welcomeScreen.style.display = "none";

});

// ======================
// SIDEBAR OPEN
// ======================

menuBtn.addEventListener("click", () => {

sidebar.classList.toggle("active");
overlay.classList.toggle("active");

if(sidebar.classList.contains("active")){

    document.querySelector(".input-container").style.display = "none";

}else{

    document.querySelector(".input-container").style.display = "flex";

}

});
profileCard.addEventListener("click", () => {

    photoMenu.classList.add("show");

});
settingsCard.addEventListener("click", () => {

accountPage.style.display = "none";  

settingsPage.style.display = "block";

});

settingsBackBtn.addEventListener("click", () => {

settingsPage.style.display = "none";  

accountPage.style.display = "block";

});
accountBackBtn.addEventListener("click", () => {

accountPage.style.display = "none";

document.querySelector(".header").style.display = "flex";

document.querySelector(".chat-area").style.display = "block";

document.querySelector(".input-container").style.display = "none";

sidebar.classList.add("active");

overlay.classList.add("active");

});

editProfileCard.addEventListener("click",() => {

accountPage.style.display = "none";  

editProfilePage.style.display = "block";
document.querySelector(".header").style.display = "none";
});

editBackBtn.addEventListener("click", () => {

    editProfilePage.style.display = "none";

    accountPage.style.display = "block";

    document.querySelector(".header").style.display = "none";

});

saveProfileBtn.addEventListener("click", () => {

    const userName =
    fullNameInput.value.trim();
    localStorage.setItem(
    "userName",
    userName
);

    if(userName === ""){
        return;
    }

    saveProfileBtn.disabled = true;

    saveProfileBtn.innerHTML =
    "Saving...";

    setTimeout(() => {

        accountUserName.innerHTML =
'Hi, <span class="user-highlight">' +
userName +
'</span>!';
sidebarUserName.textContent =
userName;

        saveProfileBtn.innerHTML =
        "✓ Saved Successfully";

        setTimeout(() => {

            saveProfileBtn.innerHTML =
            "Save Changes";

            saveProfileBtn.disabled = false;

        },1500);

    },1500);

});

// ======================
// PHOTO MENU CLOSE
// ======================

cancelPhotoMenu.addEventListener("click", () => {

    document
    .querySelector(".photo-menu")
    .classList.remove("show");

});
// ======================
// OVERLAY CLOSE
// ======================

overlay.addEventListener("click", () => {

sidebar.classList.remove("active");
overlay.classList.remove("active");

uploadMenu.classList.remove("show");
toolsPopup.classList.remove("show");
moreMenu.classList.remove("show");
document.querySelector(".input-container").style.display = "flex";
});

// ======================
// MIC -> SEND SWITCH
// ======================

messageInput.addEventListener("input", () => {

if(messageInput.value.trim() !== ""){

actionBtn.innerHTML = "➤";

}else{

actionBtn.innerHTML = "🎤";

}

});

// ======================
// CLOSE MENU WHEN CLICK OUTSIDE
// ======================

document.addEventListener("click", (e) => {

    if(
        !uploadMenu.contains(e.target)
        &&
        !attachBtn.contains(e.target)
    ){

        uploadMenu.classList.remove("show");

    }

    if(
        !moreMenu.contains(e.target)
        &&
        !moreBtn.contains(e.target)
    ){

        moreMenu.classList.remove("show");

    }

});

// ======================
// SEND MESSAGE
// ======================

actionBtn.addEventListener("click", () =>
{

if(messageInput.value.trim() === ""){
return;
}

const text = messageInput.value;
welcomeScreen.style.display = "none";
const userMsg = document.createElement("div");
userMsg.className = "user-message";

userMsg.textContent = text;

messages.appendChild(userMsg);

messages.scrollTop = messages.scrollHeight;

messageInput.value = "";

actionBtn.innerHTML = "🎤";

setTimeout(() => {

const aiWrapper =
document.createElement("div");

aiWrapper.className = "ai-wrapper";

aiWrapper.innerHTML = `

<div class="ai-header">

    <img
    src="assets/logo/nexa-logo.png"
    class="ai-logo">

    <span class="ai-name">
        Nexa AI
    </span>

</div>

<div class="ai-text">
Thinking...
</div>

`;

messages.appendChild(aiWrapper); 
const aiText =
aiWrapper.querySelector(".ai-text");
aiText.textContent =
"Frontend Ready ✅";
messages.scrollTop = messages.scrollHeight;

}, 500);

});

// ======================
// MOBILE NUMBER LIMIT
// ======================

const mobileInput =
document.querySelector("#mobile");

mobileInput.addEventListener("input", () => {

    mobileInput.value =
    mobileInput.value.replace(/\D/g,"");

    if(mobileInput.value.length > 10){

        mobileInput.value =
        mobileInput.value.slice(0,10);

    }

});
// ======================
// PROFILE PHOTO UPLOAD
// ======================

document.addEventListener("click",(e)=>{

    if(e.target.closest(".camera-btn")){

        photoMenu.classList.add("show");

    }

});

profileImageInput.addEventListener("change",(e)=>{

    const file = e.target.files[0];

    if(!file){
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event){

        const imageData = event.target.result;

localStorage.setItem(
    "profilePhoto",
    imageData
);

profilePhotoBox.innerHTML = `
    <img src="${imageData}"
    class="profile-photo-preview">

    <button class="camera-btn">
        <i class="fa-solid fa-camera"></i>
    </button>
`;

accountAvatar.innerHTML = `
    <img src="${imageData}"
    class="profile-photo-preview">
`;

sidebarAvatar.innerHTML = `
    <img src="${imageData}"
    class="profile-photo-preview">
`;

    };

    reader.readAsDataURL(file);

});


// ======================
// AUTO LOAD PROFILE PHOTO
// ======================
// ======================
// AUTO LOAD USER NAME
// ======================
const sidebarUserName =
document.querySelector("#sidebarUserName");

const welcomeUser =
document.querySelector("#welcomeUser");

const savedName =
localStorage.getItem("userName");

if(savedName){

    accountUserName.innerHTML =
    'Hi, <span class="user-highlight">' +
    savedName +
    '</span>!';

    sidebarUserName.textContent =
    savedName;

    if(welcomeUser){

        welcomeUser.innerHTML =
        "Hi " + savedName + " 👋";

    }

}



const savedPhoto =
localStorage.getItem("profilePhoto");

if(savedPhoto){

    profilePhotoBox.innerHTML = `
        <img src="${savedPhoto}"
        class="profile-photo-preview">

        <button class="camera-btn">
            <i class="fa-solid fa-camera"></i>
        </button>
    `;

    accountAvatar.innerHTML = `
        <img src="${savedPhoto}"
        class="profile-photo-preview">
    `;

    sidebarAvatar.innerHTML = `
        <img src="${savedPhoto}"
        class="profile-photo-preview">
    `;

}
else{

    profilePhotoBox.innerHTML = `
        <i class="fa-regular fa-user"></i>

        <button class="camera-btn">
            <i class="fa-solid fa-camera"></i>
        </button>
    `;

    accountAvatar.innerHTML = `
        <i class="fa-regular fa-user"></i>
    `;

    sidebarAvatar.innerHTML = `
        U
    `;

}

// ======================
// PHOTO MENU ACTIONS
// ======================

selectPhotoBtn.addEventListener("click",()=>{

    profileImageInput.removeAttribute(
        "capture"
    );

    profileImageInput.click();

    photoMenu.classList.remove("show");

});

takePhotoBtn.addEventListener("click",()=>{

    profileImageInput.setAttribute(
        "capture",
        "environment"
    );

    profileImageInput.click();

    photoMenu.classList.remove("show");

});

removePhotoBtn.addEventListener("click",()=>{

    localStorage.removeItem(
        "profilePhoto"
    );

    profilePhotoBox.innerHTML = `
        <i class="fa-regular fa-user"></i>

        <button class="camera-btn">
            <i class="fa-solid fa-camera"></i>
        </button>
    `;

    accountAvatar.innerHTML = `
        <i class="fa-regular fa-user"></i>
    `;

    sidebarAvatar.innerHTML = `
        U
    `;

    photoMenu.classList.remove("show");

})

document.querySelector(
".photo-menu .cancel"
).addEventListener("click",()=>{

    photoMenu.classList.remove("show");

});