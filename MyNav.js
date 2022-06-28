// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        
        linksContainer.style.height = 0;

    }
});




const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); // the 1 stands for, start at index 1, skip the #
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});


document.addEventListener('click', function handleClickOutsideBox(event) {
    console.log('user clicked: ', event.target);
    
    const box = document.getElementById('box');
    
    if (!box.contains(event.target) && linksContainer.getBoundingClientRect().height !== 0) {
    //   box.style.display = 'none';
        linksContainer.style.height = 0;
    }
});
