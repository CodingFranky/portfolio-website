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

const git_project_1 = document.querySelector('.git_project_1');
const git_project_link = 'https://github.com/CodingFranky/FbCart-Ecommerce'
git_project_1.addEventListener('click',()=>{
    window.open(git_project_link,'Ecommerce Project');
});

const project_1 = document.querySelector('.project_1');
const live_1 = 'https://fbcart-ecommerce.vercel.app/'
project_1.addEventListener('click',()=>{
    window.open(live_1,'Project 1');
});


