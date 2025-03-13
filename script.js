fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
    }),
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        alert("تم التسجيل بنجاح!");
        window.location.href = "index.html"; // تغيير الصفحة بعد التسجيل
    } else {
        alert("حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
    }
})
.catch(error => {
    console.error("خطأ:", error);
    alert("تعذر الاتصال بالسيرفر.");
});
