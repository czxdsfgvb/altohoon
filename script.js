document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // حفظ البيانات في Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("تم التسجيل بنجاح! البيانات محفوظة محليًا.");
});
