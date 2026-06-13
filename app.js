




const chatArea =
document.querySelector(".chat-area");

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

const messages =
document.querySelector("#messages");

const messageInput = document.querySelector("#messageInput");
const fullNameInput =
document.querySelector("#fullName");

const saveProfileBtn =
document.querySelector("#saveProfileBtn");

const profileImageInput =
document.querySelector("#profileImageInput");

// ======================
// LOGIN PAGE
// ======================
const logoutBtn =
document.querySelector(".logout-btn")

const loginPage =
document.querySelector(".login-page");

const loginForm =
document.querySelector(".login-form");

const signupForm =
document.querySelector(".signup-form");

const loginTabBtn =
document.querySelector("#loginTabBtn");

const signupTabBtn =
document.querySelector("#signupTabBtn");


const loginBtn =
document.querySelector("#loginBtn");

const profilePhotoBox =
document.querySelector(".profile-photo-box");

const accountUserName =
document.querySelector("#accountUserName");
const actionBtn = document.querySelector(".action-btn");
const voiceWave = document.querySelector("#voiceWave");
const waveBars =
document.querySelectorAll(
"#voiceWave span"
);

let audioContext = null;
let analyser = null;
let microphone = null;
let animationFrame = null;

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition = null;
let isRecording = false;
if(SpeechRecognition){

    recognition =
    new SpeechRecognition();

    recognition.continuous = false;

    recognition.interimResults = true;

    recognition.lang = "hi-IN";

    recognition.onresult = (event) => {
console.log("VOICE DETECTED");
        let transcript = "";

        for(
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ){

            transcript +=
            event.results[i][0].transcript;

        }

        messageInput.value =
        transcript;
        waveBars.forEach(bar => {

    const randomHeight =
    10 + Math.random() * 30;

    bar.style.height =
    randomHeight + "px";

});

    };





function animateWave(){

    if(!analyser){
        return;
    }

    const dataArray =
    new Uint8Array(
        analyser.frequencyBinCount
    );

    analyser.getByteFrequencyData(
        dataArray
    );

    const volume =
    dataArray.reduce(
        (a,b)=>a+b,
        0
    ) / dataArray.length;

    waveBars.forEach(bar => {

        const randomHeight =
        6+ Math.random() *
        (volume / 1.5);

        bar.style.height =
        randomHeight + "px";

    });

    animationFrame =
    requestAnimationFrame(
        animateWave
    );

}








    recognition.onend = () => {
        isRecording = false;
        if(voiceWave){
            voiceWave.classList.remove("active");
        }
        
messageInput.style.opacity = "1";
if(messageInput.value.trim() !== ""){
    actionBtn.innerHTML =
    '<i class="fa-solid fa-paper-plane"></i>';
}else{
    actionBtn.innerHTML =
    '<i class="fa-solid fa-microphone"></i>';
}
    };
}
messageInput.addEventListener("input", () => {
if(messageInput.value.trim() !== ""){
        actionBtn.innerHTML =
        '<i class="fa-solid fa-paper-plane"></i>';
    }else{
        actionBtn.innerHTML =
        '<i class="fa-solid fa-microphone"></i>';
    }
});
const attachBtn = document.querySelector(".attach-btn");
const uploadMenu = document.querySelector(".upload-menu");
const uploadItems = document.querySelectorAll(".upload-item");
const moreBtn =
document.querySelector(".more-btn");
const moreMenu =
document.querySelector(".more-menu");
const newChatBtn =
document.querySelector(".new-chat-btn");
const cancelPhotoMenu =
document.querySelector("#cancelPhotoMenu");
const deleteChatBtn =
document.querySelector(".delete-chat-btn");
const pinChatBtn =
document.querySelector(".pin-chat-btn");
const popupRenameChat =
document.querySelector("#popupRenameChat");
const popupDeleteChat =
document.querySelector("#popupDeleteChat");
const popupPinChat =
document.querySelector("#popupPinChat");
let selectedChatId = null;
// ======================
// NEW CHAT
// ======================

if(newChatBtn){
    newChatBtn.addEventListener("click",()=>{
        currentChatId = null;
        messages.innerHTML = "";
        welcomeScreen.style.display = "block";
        pinChatBtn.innerHTML =
'<i class="fa-solid fa-thumbtack"></i> Pin Chat';
        moreMenu.classList.remove("show");
    });
}


// ======================
// DELETE CHAT
// ======================

if(deleteChatBtn){

    deleteChatBtn.addEventListener("click",()=>{

        if(!currentChatId){
            return;
        }
const activeChat =
chats.find(
    chat => chat.id === currentChatId
);

if(activeChat && activeChat.pinned){

    alert(
        "This chat is pinned 📌\nPlease unpin it first."
    );

    return;
}if(
!confirm(
"Delete this chat?"
)
){
    return;
}
        chats = chats.filter(
            chat => chat.id !== currentChatId
        );

        currentChatId = null;

        saveChats();

        renderChatHistory();

        messages.innerHTML = "";

        welcomeScreen.style.display = "block";

        moreMenu.classList.remove("show");

    });

}



const searchChatInput =
document.querySelector("#searchChatInput");

// ======================
// PIN CHAT
// ======================

if(pinChatBtn){

    pinChatBtn.addEventListener("click",()=>{

        console.log("PIN CLICKED");

        console.log(currentChatId);

        if(!currentChatId){
            return;
        }

        const activeChat =
        chats.find(
            chat => chat.id === currentChatId
        );

        if(!activeChat){
            return;
        }
        const pinnedCount =
chats.filter(
    chat => chat.pinned
).length;
if(
    !activeChat.pinned &&
    pinnedCount >= 10
){
    alert(
        "Pin limit reached (10/10)"
    );
    return;
}

        activeChat.pinned =
        !activeChat.pinned;
        pinChatBtn.innerHTML =
activeChat.pinned
? '<i class="fa-solid fa-thumbtack"></i> Unpin Chat'
: '<i class="fa-solid fa-thumbtack"></i> Pin Chat';
console.log(activeChat)
        saveChats();

        renderChatHistory();

        moreMenu.classList.remove("show");

    });

}
// ======================
// SEARCH CHAT
// ======================

if(searchChatInput){

    searchChatInput.addEventListener("input",()=>{

        renderChatHistory();

    });

}


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

const imageInput = document.querySelector("#imageInput");
const fileInput = document.querySelector("#fileInput");

let selectedFiles = [];
let chats = [];
let currentChatId = null;
const selectedFilesBox =
document.querySelector("#selectedFiles");
const chatHistory =
document.querySelector("#chatHistory")
const pinnedChatHistory =
document.querySelector("#pinnedChatHistory");
loadChats();
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



fileInput.addEventListener("change", (e) => {

welcomeScreen.style.display = "none";

const files = Array.from(e.target.files);

files.forEach(file => {

    if(selectedFiles.length >= 10){
        return;
    }

    selectedFiles.push(file);

    const preview = document.createElement("div");

    preview.className = "file-preview";

    preview.innerHTML = `
        <span>📄 ${file.name}</span>
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

// ======================
// SIDEBAR OPEN
// ======================

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    if(sidebar.classList.contains("active")){

        document.querySelector(".input-container").style.display = "none";

        document.querySelector(".header").style.opacity = "0";

        document.querySelector(".header").style.pointerEvents = "none";

    }else{

        document.querySelector(".input-container").style.display = "flex";

        document.querySelector(".header").style.opacity = "1";

        document.querySelector(".header").style.pointerEvents = "auto";

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
document.querySelector(".header").style.opacity = "1";
document.querySelector(".header").style.pointerEvents = "auto";
document.querySelector(".chat-area").style.display = "block";
document.querySelector(".input-container").style.display = "flex";
sidebar.classList.remove("active");
overlay.classList.remove("active");
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

if(userName === ""){

    alert("Please enter your name");

    return;
}

localStorage.setItem(
"userName",
userName
);

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
moreMenu.classList.remove("show");document.querySelector(".input-container").style.display = "flex";
document.querySelector(".header").style.opacity = "1";
document.querySelector(".header").style.pointerEvents = "auto";
});

// ======================
// MIC -> SEND SWITCH
// ======================

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

actionBtn.addEventListener(
"click",
async () => {
  if(messageInput.value.trim() === ""){
    if(!recognition){
        return;
    }
    if(isRecording){
    console.log("STOP CLICKED");
    isRecording = false;
voiceWave.classList.remove("active");
messageInput.style.opacity = "1";
actionBtn.innerHTML =
'<i class="fa-solid fa-microphone"></i>';
cancelAnimationFrame(
    animationFrame
);
waveBars.forEach(bar => {

    bar.style.height = "4px";
});
    recognition.stop();
    return;
}
    try{

console.log("BEFORE START");
        recognition.start();
        console.log("AFTER START");
        isRecording = true;
        
        voiceWave.classList.add("active");
        messageInput.style.opacity = "0";
        actionBtn.innerHTML =
        '<i class="fa-solid fa-stop"></i>';
           
    }catch(error){
        console.log(error);
    }
    return;
}
       // message send code
    const text = messageInput.value.trim();
    console.log("MESSAGE:", text);
console.log("currentChatId:", currentChatId);
// ======================
// CREATE CHAT IF NEEDED
// ======================

if(!currentChatId){
console.log("CREATING CHAT")
    const newChat = {

        id: Date.now().toString(),

        title: text.length > 30
            ? text.substring(0,30) + "..."
            : text,
pinned: false,
        messages: []

    };

chats.unshift(newChat);
currentChatId = newChat.id;
renderChatHistory();
saveChats();


    console.log(chats);

}
    welcomeScreen.style.display = "none";

    const userMsg =
    document.createElement("div");

    userMsg.className =
    "user-message";

    userMsg.textContent = text;

    messages.appendChild(userMsg);
    setTimeout(()=>{
    chatArea.scrollTop =
    chatArea.scrollHeight;
},50);
    
// ======================
// SAVE USER MESSAGE
// ======================

const currentChat =
chats.find(
    chat => chat.id === currentChatId
);

if(currentChat){

    currentChat.messages.push({

        role:"user",

        text:text

    });
    saveChats();
}
    console.log("USER SAVED");
    console.log(currentChat);
    messages.scrollTop =
    messages.scrollHeight;messageInput.value = "";

actionBtn.innerHTML =
'<i class="fa-solid fa-microphone"></i>';

setTimeout(() => {

    const aiWrapper =
    document.createElement("div");

    aiWrapper.className =
    "ai-wrapper";

    aiWrapper.innerHTML = `

<div class="ai-header">
    <img src="assets/logo/nexa-logo.png"
    class="ai-logo">

    <span class="ai-name">
        Nexa AI
    </span>
</div>

<div class="ai-text"></div>

`;

    messages.appendChild(aiWrapper);
    const aiText =
aiWrapper.querySelector(".ai-text");

const fullText =
"🚀 Nexa AI Frontend Ready\n\nBackend is under development.\n\nPlease wait for future updates.";

let index = 0;

const typingEffect = setInterval(() => {

    aiText.textContent +=
    fullText.charAt(index);

    index++;

    chatArea.scrollTop =
    chatArea.scrollHeight;

    if(index >= fullText.length){

        clearInterval(
            typingEffect
        );

    }

},30);

    const currentChat =
    chats.find(
        chat => chat.id === currentChatId
    );

    if(currentChat){

        currentChat.messages.push({

            role:"assistant",

            text:"🚀 Nexa AI Frontend Ready. Backend is under development."

        });

        saveChats();

    }

    console.log("AI SAVED");

},800);
});
// ======================
// MOBILE NUMBER LIMIT
// ======================

const mobileInput =
document.querySelector("#mobile");

if(mobileInput){

    mobileInput.addEventListener("input", () => {

        mobileInput.value =
        mobileInput.value.replace(/\D/g,"");

        if(mobileInput.value.length > 10){

            mobileInput.value =
            mobileInput.value.slice(0,10);

        }

    });

}
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

if(file.size > 1024 * 1024){

    alert(
        "Please select an image smaller than 1 MB"
    );

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
const darkModeToggle =
document.querySelector("#darkModeToggle");

if(darkModeToggle){

    darkModeToggle.addEventListener("change",()=>{

        if(darkModeToggle.checked){

            document.body.classList.remove("light-mode");

        }else{

            document.body.classList.add("light-mode");

        }

        console.log(document.body.className);

    });

}
 
// ======================
// AUTO LOAD USER NAME
// ======================
const sidebarUserName =document.querySelector("#sidebarUserName");
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





// ======================
// LOGIN / SIGNUP TABS
// ======================

if(loginTabBtn && signupTabBtn){

    loginTabBtn.addEventListener("click",()=>{

        loginTabBtn.classList.add("active");

        signupTabBtn.classList.remove("active");

        loginForm.style.display = "flex";

        signupForm.style.display = "none";

    });

    signupTabBtn.addEventListener("click",()=>{

        signupTabBtn.classList.add("active");

        loginTabBtn.classList.remove("active");

        signupForm.style.display = "flex";

        loginForm.style.display = "none";

    });

}




// ======================
// START WITH LOGIN PAGE
// ======================

const isLoggedIn =
localStorage.getItem("isLoggedIn");

if(isLoggedIn === "true"){

    loginPage.style.display = "none";

}
else{

    document.querySelector(".header").style.display = "none";

    document.querySelector(".chat-area").style.display = "none";

    document.querySelector(".input-container").style.display = "none";

    loginPage.style.display = "flex";

}



// ======================
// LOGIN PAGE CONTINUE
// ======================

if(loginBtn){

    loginBtn.addEventListener("click",()=>{
localStorage.setItem(
    "isLoggedIn",
    "true"
);
        loginPage.style.display = "none";

        document.querySelector(".header").style.display = "flex";

        document.querySelector(".chat-area").style.display = "block";

        document.querySelector(".input-container").style.display = "flex";

    });

}






// ======================
// LOGOUT
// ======================

if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{

        localStorage.removeItem(
            "isLoggedIn"
        );

        accountPage.style.display = "none";

        loginPage.style.display = "flex";

        document.querySelector(".header").style.display = "none";

        document.querySelector(".chat-area").style.display = "none";

        document.querySelector(".input-container").style.display = "none";

    });

}

  // ======================
// SAVE CHATS
// ======================

function saveChats(){

    localStorage.setItem(
        "nexaChats",
        JSON.stringify(chats)
    );

}
// ======================
// LOAD CHATS
// ======================

function loadChats(){

    const savedChats =
    localStorage.getItem("nexaChats");

    if(!savedChats){
        return;
    }

    chats = JSON.parse(savedChats);
chats.forEach(chat => {

    if(chat.pinned === undefined){

        chat.pinned = false;

    }

});
    renderChatHistory();

}

// ======================
// RENDER CHAT HISTORY
// ======================

function renderChatHistory(){
    if(!chatHistory){
        return;
    }

const searchText =
searchChatInput
? searchChatInput.value.toLowerCase()
: "";
  chatHistory.innerHTML = "";
  pinnedChatHistory.innerHTML = "";
  const pinnedChats =
chats.filter(chat => chat.pinned);
const normalChats =
chats.filter(chat => !chat.pinned);
    [
...pinnedChats.filter(chat =>
chat.title
.toLowerCase()
.includes(searchText)
),
...normalChats.filter(chat =>
chat.title
.toLowerCase()
.includes(searchText)
)
].forEach(chat => {
        const item =
        document.createElement("div");
        item.className =
        "chat-item";
      let pressTimer;
item.addEventListener("touchstart",()=>{
    pressTimer = setTimeout(()=>{
        selectedChatId = chat.id;
        showChatMenu(chat,item);
    },700);
});
item.addEventListener("touchend",()=>{
    clearTimeout(pressTimer);
});
item.addEventListener("touchmove",()=>{
    clearTimeout(pressTimer);
});
item.textContent =
chat.title;
if(chat.pinned){
    pinnedChatHistory.appendChild(item);
}else{
    chatHistory.appendChild(item);
}
        item.addEventListener("click",()=>{
    currentChatId = chat.id;
    pinChatBtn.innerHTML =
chat.pinned
? '<i class="fa-solid fa-thumbtack"></i> Unpin Chat'
: '<i class="fa-solid fa-thumbtack"></i> Pin Chat';
    messages.innerHTML = "";
    chat.messages.forEach(msg => {
        if(msg.role === "user"){
            const userMsg =
            document.createElement("div");
            userMsg.className =
            "user-message";
            userMsg.textContent =
            msg.text;
            messages.appendChild(userMsg);
        }else{
            const aiWrapper =
            document.createElement("div");
            aiWrapper.className =
            "ai-wrapper";
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
    ${msg.text}
</div>
`;
            messages.appendChild(aiWrapper);
        }
    });
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
document.querySelector(".header").style.display = "flex";
document.querySelector(".chat-area").style.display = "block";
document.querySelector(".input-container").style.display = "flex";
document.querySelector(".header").style.opacity = "1";
document.querySelector(".header").style.pointerEvents = "auto";
accountPage.style.display = "none";
settingsPage.style.display = "none";
editProfilePage.style.display = "none";
welcomeScreen.style.display = "none";
});
    });
}
function showChatMenu(chat,item){
    const popup =
    document.querySelector("#chatMenuPopup");
    const popupPin =
    document.querySelector("#popupPinChat");
    popupPin.textContent =
    chat.pinned
    ? "📌 Unpin Chat"
    : "📌 Pin Chat";
    const rect =
item.getBoundingClientRect();
popup.style.left =
(rect.right - 180) + "px";
popup.style.top =
(rect.top+50)+ "px";
popup.style.transform =
"none";
    popup.style.display = "block";
}
document.addEventListener("click",(e)=>{
    const popup =
    document.querySelector("#chatMenuPopup");
    if(
        popup &&
        !popup.contains(e.target)
    ){
        popup.style.display = "none";
    }
});

// ======================
// RENAME CHAT
// ======================

popupRenameChat.addEventListener("click",()=>{
    const chat =
    chats.find(
        chat => chat.id === selectedChatId
    );
    if(!chat){
        return;
    }
    const newName =
    prompt(
        "Rename Chat",
        chat.title
    );
    if(
        !newName ||
        !newName.trim()
    ){
        return;
    }
    chat.title =
    newName.trim();
    saveChats();
    renderChatHistory();
    document.querySelector(
        "#chatMenuPopup"
    ).style.display = "none";
});


// ======================
// POPUP DELETE CHAT
// ======================

popupDeleteChat.addEventListener("click",()=>{

    const chat =
    chats.find(
        chat => chat.id === selectedChatId
    );
    if(!chat){
        return;
    }
    if(chat.pinned){
        alert(
            "This chat is pinned 📌\nPlease unpin it first."
        );
        return;
    }
    if(
        !confirm(
            "Delete this chat?"
        )
    ){
        return;
    }
    chats = chats.filter(
        c => c.id !== selectedChatId
    );
    saveChats();
    renderChatHistory();
    document.querySelector(
        "#chatMenuPopup"
    ).style.display = "none";
});

// ======================
// POPUP PIN / UNPIN
// ======================

popupPinChat.addEventListener("click",()=>{

    const chat =
    chats.find(
        chat => chat.id === selectedChatId
    );

    if(!chat){
        return;
    }

    const pinnedCount =
    chats.filter(
        c => c.pinned
    ).length;

    if(
        !chat.pinned &&
        pinnedCount >= 10
    ){
        alert(
            "Pin limit reached (10/10)"
        );
        return;
    }

    chat.pinned =
    !chat.pinned;

    saveChats();

    renderChatHistory();
    document.querySelector(
        "#chatMenuPopup"
    ).style.display = "none";

});