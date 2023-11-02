

// ------this is a javascript for hammenu---------

const menulogo = document.querySelector('.menulogo');
const ullist = document.querySelector('.ullist');
menulogo.addEventListener('click', () => {
    menulogo.classList.toggle('active');
    ullist.classList.toggle('active');
  })


    // -----this is a javascript for form-----

    const log = document.querySelector('.login');
    const reg = document.querySelector('.register');
    const logbtn = document.querySelector(' #login-btn');
    const regbtn = document.querySelector('#register-btn');
    btnback = document.querySelector('.btn-back');
    regbtn.addEventListener('click', () => {
        reg.style.left = '20px';
        log.style.left = '-450px';
        btnback.style.left = '160px';
    })
    logbtn.addEventListener('click', () => {
        reg.style.left = '450px';
        log.style.left = '20px';
        btnback.style.left = '40px';
    })

    const formcontainer = document.querySelector('.form-container');
    const navlogin = document.querySelector('#nav-login');

    navlogin.addEventListener('click', () => {
        if (formcontainer.style.display != 'block') {
            formcontainer.style.display = 'block';
        }
        else {
            formcontainer.style.display = 'none';
        }
    })


    const close = document.querySelector('.close');
    const form = document.querySelector('.form-container');
    close.addEventListener('click', () => {
        form.style.display = 'none';
    })
