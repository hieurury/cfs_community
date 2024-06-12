const $     = document.querySelector.bind(document);
const $$    = document.querySelectorAll.bind(document);


//Phần này là xử lí đăng nhập
const listInput = $$('.input');
const errorMessage = $('.error--message');
const inputEmail = $('#input-email');
const appBtn = $('.app-btn');
//=======================================
listInput.forEach(input => {
    input.onfocus = function() {
        errorMessage.classList.add('d-none');
    }
});
appBtn.addEventListener('click', () => {
    let currentEmail = inputEmail.value
    if(currentEmail != '') {
        localStorage.setItem('email', inputEmail.value);
        window.location.href = './createBlog.html'
    } else {
        errorMessage.classList.remove('d-none');
    }
})
//=========================================
//xử lí tắt ứng dụng
window.addEventListener('close', () => {
    localStorage.removeItem('email');
})


