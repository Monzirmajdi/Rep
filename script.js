const modalGallery = document.getElementById("modal-gallery");

// أضف الكلاسات فور تحميل الصفحة أو عند فتح المودال لأول مرة
modalGallery.classList.add("fade-transition", "show");

// دالة لتحديث المحتوى بسلاسة
function updateContentWithFade(element, newHTML) {
    element.classList.remove("show");
    setTimeout(() => {
        element.innerHTML = newHTML;
        element.classList.add("show");
    }, 150);
}

// مثال عند الضغط على زر عرض المشاريع
document.querySelectorAll(".card-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.closest(".portfolio-category").dataset.category;

        let generatedHTML = "";
        if (category === "branding") {
            generatedHTML = `
              <img src="images/logo1.png" alt="Logo 1" loading="lazy"
                   style="opacity:0; transition: opacity 0.4s;" onload="this.style.opacity=1;">
              <img src="images/logo2.png" alt="Logo 2" loading="lazy"
                   style="opacity:0; transition: opacity 0.4s;" onload="this.style.opacity=1;">
            `;
        }

        updateContentWithFade(modalGallery, generatedHTML);
        document.getElementById("portfolio-modal").style.display = "block";
    });
});

// زر الإغلاق
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("portfolio-modal").style.display = "none";
});

