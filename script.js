function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const linkedIn = document.querySelector('.linkedin');
const url = 'https://www.linkedin.com/in/vinayak-patel-859806180/'
linkedIn.addEventListener('click',()=>{
    window.open(url,'LinkedIn Profile');
});

const github = document.querySelector('.github');
const githublink = 'https://github.com/CodingFranky/'
github.addEventListener('click',()=>{
    window.open(githublink,'GitHub Profile');
});


