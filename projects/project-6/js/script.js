// ===============================
//        Global Variables
// ===============================

const prbtn = document.getElementById('pr-btn');
const prmodal = document.getElementById('pr-modal');
const prclose = document.getElementById('pr-close-btn');
const pprbtn = document.getElementById('ppr-btn');
const pprmodal = document.getElementById('ppr-modal');
const pprclose = document.getElementById('ppr-close-btn');
const srbtn = document.getElementById('sr-btn');
const srmodal = document.getElementById('sr-modal');
const srclose = document.getElementById('sr-close-btn');
const mobtn = document.getElementById('mo-btn');
const momodal = document.getElementById('mo-modal');
const moclose = document.getElementById('mo-close-btn');
const mzbtn = document.getElementById('mz-btn');
const mzmodal = document.getElementById('mz-modal');
const mzclose = document.getElementById('mz-close-btn');
const crbtn = document.getElementById('cr-btn');
const crmodal = document.getElementById('cr-modal');
const crclose = document.getElementById('cr-close-btn');


// ===============================
//    Services Image Modals
// ===============================

// Pallet Racking
if (prbtn) {
    prbtn.addEventListener('click', () => {
        prmodal.classList.add('is-active');
    });
}

if (prclose) {
    prclose.addEventListener('click', () => {
        prmodal.classList.remove('is-active');
    });
}


// Push Pallet Racking
if (pprbtn) {
    pprbtn.addEventListener('click', () => {
        pprmodal.classList.add('is-active');
    });
}

if (pprclose) {
    pprclose.addEventListener('click', () => {
        pprmodal.classList.remove('is-active');
    });
}


// Safety Railing
if (srbtn) {
    srbtn.addEventListener('click', () => {
        srmodal.classList.add('is-active');
    });
}

if (srclose) {
    srclose.addEventListener('click', () => {
        srmodal.classList.remove('is-active');
    });
}


// Modular Offices
if (mobtn) {
    mobtn.addEventListener('click', () => {
        momodal.classList.add('is-active');
    });
}

if (moclose) {
    moclose.addEventListener('click', () => {
        momodal.classList.remove('is-active');
    });
}


// Mezzanines
if (mzbtn) {
    mzbtn.addEventListener('click', () => {
        mzmodal.classList.add('is-active');
    });
}

if (mzclose) {
    mzclose.addEventListener('click', () => {
        mzmodal.classList.remove('is-active');
    });
}


// Cantilever Racking
if (crbtn) {
    crbtn.addEventListener('click', () => {
        crmodal.classList.add('is-active');
    });
}

if (crclose) {
    crclose.addEventListener('click', () => {
        crmodal.classList.remove('is-active');
    });
}