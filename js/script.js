//navbar-fixed
window.onscroll = function() {
    const header = this.document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//untuk bagian humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('opacity-0');
    navMenu.classList.toggle('scale-95');
    navMenu.classList.toggle('pointer-events-none');
});

//
//scroll down
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= docHeight) {
        // Sudah di bawah
        document.getElementById('scrollButton').style.opacity = '0';
        document.getElementById('scrollButton').style.pointerEvents = 'none';
    } else {
        // Belum di bawah
        document.getElementById('scrollButton').style.opacity = '1';
        document.getElementById('scrollButton').style.pointerEvents = 'auto';
    }
});

//pop up gambar
// const popUpElement = document.querySelector('#pop-up');
// const popUpContent = document.querySelector('#pop-up .container img');
// const popUpCaption = document.querySelector('#pop-up .container p');

// document.querySelectorAll('#gallery-columns img').forEach(el=>{
//     el.addEventListener('click', function(x){
//         popUpElement.classList.remove('hidden');
//         popUpContent.src=x.target.src;
//         popUpCaption.textContent = x.target.alt;

//         popUpElement.classList.remove('hidden', 'popup-hide');
//         void popUpElement.offsetWidth; // trik untuk restart animasi
//         popUpElement.classList.add('popup-show');
//     });
// });

// if (popUpElement) {
//     popUpElement.addEventListener('click', function(){
//     // popUpElement.classList.add('hidden');
//     popUpElement.classList.remove('popup-show');
//     popUpElement.classList.add('popup-hide');

//     // tunggu animasi selesai baru sembunyikan elemen
//     popUpElement.addEventListener('animationend', function handler() {
//         popUpElement.classList.add('hidden');
//         popUpElement.classList.remove('popup-hide');
//         popUpElement.removeEventListener('animationend', handler);
//     });
// });
// };

// popup elemen
const popUpElement = document.querySelector('#pop-up');
const popUpImage = document.querySelector('#popup-image');
const popUpVideo = document.querySelector('#popup-video');
const popUpAudio = document.querySelector('#popup-audio');
const popUpCaption = document.querySelector('#pop-up .container p');

// fungsi untuk reset konten
function resetPopup() {
    popUpImage.classList.add('hidden');
    popUpVideo.classList.add('hidden');
    popUpAudio.classList.add('hidden');
    popUpImage.src = '';
    popUpVideo.src = '';
    popUpAudio.src = '';
}

// event listener untuk gambar, video, dan audio
document.querySelectorAll('#gallery-columns img, #gallery-columns video, #gallery-columns audio, #gallery-columns .group').forEach(el => {
    el.addEventListener('click', e => {
        resetPopup();
        popUpElement.classList.remove('hidden', 'popup-hide');
        void popUpElement.offsetWidth; // trik restart animasi
        popUpElement.classList.add('popup-show');

        const src = e.target.src;
        const alt = e.target.alt || 'Media';

        // ✅ jika kliknya bukan langsung di <video>, kita cari parent <video>
        const videoEl = e.target.closest('video');
        const audioEl = e.target.closest('audio');
        const imgEl = e.target.closest('img');

        if (imgEl) {
            popUpImage.src = imgEl.src;
            popUpImage.classList.remove('hidden');
            popUpCaption.textContent = imgEl.alt || 'Gambar';
        } 
        else if (videoEl) {
            const videoSource = videoEl.src || videoEl.querySelector('source')?.src;
            popUpVideo.src = videoSource;
            popUpVideo.classList.remove('hidden');
            popUpVideo.play();
            popUpCaption.textContent = videoEl.alt || 'Video';
        } 
        else if (audioEl || el.querySelector('audio')) {
            const audioTag = audioEl || el.querySelector('audio');
            const audioSource = audioTag.src || audioTag.querySelector('source')?.src;
            popUpAudio.src = audioSource;
            popUpAudio.classList.remove('hidden');
            popUpAudio.play();
            popUpCaption.textContent = audioTag.alt || 'Audio';
        }
    });
});

// tutup popup saat klik luar
if (popUpElement) {
    popUpElement.addEventListener('click', function () {
        popUpElement.classList.remove('popup-show');
        popUpElement.classList.add('popup-hide');

        popUpElement.addEventListener('animationend', function handler() {
            resetPopup();
            popUpElement.classList.add('hidden');
            popUpElement.classList.remove('popup-hide');
            popUpElement.removeEventListener('animationend', handler);
        });
    });
};
