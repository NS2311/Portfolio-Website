(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// function hover(element, ee) {
//     if(ee === 'cf') {
//         element.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-64/code-forces-3521352-2944796.png');
//     }
// }

// function unhover(element, ee) {
//     if(ee === 'cf') {
//         element.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-64/code-forces-3628105-3030925.png');
//     }
// }

// function hover(element, ee) {
//     if(ee === 'cc') {
//         element.setAttribute('src', 'https://avatars1.githubusercontent.com/u/11960354?s=460&v=4');
//     }
// }

// function unhover(element, ee) {
//     if(ee === 'cc') {
//         element.setAttribute('src', 'https://icons-for-free.com/download-icon-codechef-1324440139527402917_512.png');
//     }
// }

function hover(idd) {

    Ele = document.getElementById(idd);
    if(idd == 'cc') Ele.setAttribute('src', 'https://avatars1.githubusercontent.com/u/11960354?s=460&v=4');
    if(idd == 'cf') Ele.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-64/code-forces-3521352-2944796.png');
    if(idd == 'lc') Ele.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png');
}

function unhover(idd) {

    Ele = document.getElementById(idd);
    if(idd == 'cc') Ele.setAttribute('src', 'https://icons-for-free.com/download-icon-codechef-1324440139527402917_512.png');
    if(idd == 'cf') Ele.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-64/code-forces-3628105-3030925.png');
    if(idd == 'lc') Ele.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2389/PNG/512/leetcode_logo_icon_145113.png');
}

