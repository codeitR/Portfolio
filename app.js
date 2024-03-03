

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// For menu
const sidemenu = document.getElementById("sidemenu");
const openmenu = () => {
    sidemenu.style.right = "0";
};

const closemenu = () => {
    sidemenu.style.right = "-200px";
};

// Adding event listeners
document.querySelector('.fa-bars').addEventListener('click', openmenu);
document.querySelector('.fa-times').addEventListener('click', closemenu);