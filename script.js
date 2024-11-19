// تفعيل الوضع الداكن
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;
const container = document.querySelector('.container');

// التحقق من الوضع الحالي عند التحميل
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// وظيفة لتفعيل الوضع الداكن
function enableDarkMode() {
    body.classList.add('dark-mode');
    container.classList.add('dark-mode');
    themeToggleButton.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// وظيفة لتعطيل الوضع الداكن
function disableDarkMode() {
    body.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    themeToggleButton.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// تبديل الوضع عند الضغط على الزر
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// معالجة إرسال الاستبيان
document.getElementById('surveyForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const knowStrategy = document.getElementById('knowStrategy').value;
    const appliedStrategy = document.getElementById('appliedStrategy').value;
    const feedback = document.getElementById('feedback').value;

    // رسالة النجاح
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'تم إرسال الاستبيان بنجاح!';
    responseMessage.className = 'alert alert-success';

    // مسح الحقول
    document.getElementById('surveyForm').reset();
});