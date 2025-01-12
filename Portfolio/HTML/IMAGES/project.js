
document.addEventListener('DOMContentLoaded', function() {
    const blinker = document.querySelector('.blinker');
    setInterval(function() {
        blinker.classList.toggle('active');
    }, 500);
});
document.querySelector('#qualification').addEventListener('click', function() {
    document.querySelector('.qualification').classList.toggle('active');
});
document.querySelector('#Project').addEventListener('click', function() {
    document.querySelector('.vision').classList.toggle('active');
});
document.querySelector('.navbar a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.navbar a').forEach(function(link) {
            link.classList.remove('active');
        });
        link.classList.add('active');
        const sectionId = link.getAttribute('href').substring(1);
        document.querySelector('#' + sectionId).scrollIntoView({ behavior:'smooth' });
    });
});
document.querySelector('.back').addEventListener('click', function() {
    window.history.back();
});
document.querySelector('.name h1').addEventListener('click', function() {
    alert('Hello, I am SHIVAM A. PATEL');
});
document.querySelector('.name p').addEventListener('click', function() {
    alert('I am a Graphics Designer and Program Manager at DirectHire Community.');
});
document.querySelector('.vision.box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert('This is a project called'+ box.querySelector('h1').innerText);
    });
});
document.querySelector('.qualification.box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert('This is a qualification called'+ box.querySelector('h1').innerText);
    });
});
document.querySelector('.name img').addEventListener('click', function() {
    alert('This is a picture of me.');
});
document.querySelector('.header').addEventListener('click', function() {
    alert('This is the header section.');
});
document.querySelector('.navbar').addEventListener('click', function() {
    alert('This is the navigation bar.');
});
document.querySelector('.back').addEventListener('click', function() {
    alert('This is the back button.');
});
document.querySelector('.vision').addEventListener('click', function() {
    alert('This is the projects section.');
});
document.querySelector('.qualification').addEventListener('click', function() {
    alert('This is the qualifications section.');
});
document.querySelector('.name h1').addEventListener('click', function() {
    alert('This is the name section.');
});
document.querySelector('.name p').addEventListener('click', function() {
    alert('This is the qualification section.');
});
document.querySelector('.vision.box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert('This is a project box.');
    });
});
document.querySelector('.qualification.box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert('This is a qualification box.');
    }); 
});
document. querySelector('.name img').addEventListener('click', function() {
    alert('This is the picture of me box.');
});
document.querySelector('.header').addEventListener('click', function() {
    alert('This is the header section box.');
});
document.querySelector('.navbar').addEventListener('click', function() {
    alert('This is the navigation bar box.');
});
document.querySelector('.back').addEventListener('click', function() {
    alert('This is the back button box.');
});
document.querySelector('.vision').addEventListener('click', function() {
    alert('This is the projects section box.');
});
document.querySelector('.qualification').addEventListener('click', function() {
    alert('This is the qualifications section box.');
});
document.querySelector('.name h1').addEventListener('click', function() {
    alert('This is the name section box.');
});
document.querySelector('.name p').addEventListener('click', function() {
    alert('This is the qualification section box.');
});
