const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

});

reveals.forEach((element) => {
    observer.observe(element);
});
const skillProgress = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const skill = entry.target;

            skill.style.width = getComputedStyle(skill)
                .getPropertyValue("--skill-width");

        }

    });

});


skillProgress.forEach((skill) => {
    skillObserver.observe(skill);
});

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");


// Kiểm tra chế độ đã lưu

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


// Khi click nút

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});

// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const successMessage = document.getElementById("success-message");


contactForm.addEventListener("submit", function(event) {

    // Không cho trang reload
    event.preventDefault();


    // Xóa thông báo cũ
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    nameInput.classList.remove("input-error");
emailInput.classList.remove("input-error");
messageInput.classList.remove("input-error");


    let isValid = true;


    // =========================
    // KIỂM TRA HỌ TÊN
    // =========================

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Vui lòng nhập họ và tên.";

        isValid = false;

    }


    // =========================
    // KIỂM TRA EMAIL
    // =========================

    const emailPattern =
        khanhly2k6tb@gmail.com;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Vui lòng nhập email.";

        isValid = false;

    } else if (!emailPattern.test(emailInput.value)) {

        emailError.textContent = "Email không hợp lệ.";

        isValid = false;

    }


    // =========================
    // KIỂM TRA NỘI DUNG
    // =========================

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Vui lòng nhập nội dung.";

        isValid = false;

    }


    // =========================
    // NẾU TẤT CẢ ĐỀU ĐÚNG
    // =========================

    if (isValid) {

        successMessage.textContent =
            "✅ Gửi tin nhắn thành công!";

        contactForm.reset();

    }

});

if (nameInput.value.trim() === "") {

    nameError.textContent =
        "Vui lòng nhập họ và tên.";

    nameInput.classList.add("input-error");

    isValid = false;
}
if (emailInput.value.trim() === "") {

    emailError.textContent =
        "Vui lòng nhập email.";

    emailInput.classList.add("input-error");

    isValid = false;

} else if (!emailPattern.test(emailInput.value)) {

    emailError.textContent =
        "Email không hợp lệ.";

    emailInput.classList.add("input-error");

    isValid = false;
}
if (messageInput.value.trim() === "") {

    messageError.textContent =
        "Vui lòng nhập nội dung.";

    messageInput.classList.add("input-error");

    isValid = false;
}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});