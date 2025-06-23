/**
 * ملف JavaScript الرئيسي لموقع منذر جرافيكس
 * يحتوي على جميع الوظائف التفاعلية للموقع
 */

// انتظر حتى يتم تحميل DOM بالكامل
document.addEventListener("DOMContentLoaded", function() {
    // 1. قائمة الهاتف المتحركة
    initMobileMenu();

    // 2. تأثير التمرير للشريط العلوي
    initNavbarScroll();

    // 3. نافذة معرض الأعمال
    initPortfolioModal();

    // 4. نموذج الاتصال
    initContactForm();

    // 5. تأثيرات الصور
    initImageHandling();

    // 6. تحديث نص الشعار أثناء التمرير
    initNavLogoUpdater();
});

// 1. تهيئة قائمة الهاتف المتحركة
function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // إضافة/إزالة منع التمرير عند فتح القائمة
        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });

    // إغلاق القائمة عند النقر على أي رابط
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });
}

// 2. تأثير التمرير للشريط العلوي
function initNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(10, 10, 10, 0.9)";
            navbar.style.padding = "15px 0";
        } else {
            navbar.style.background = "rgba(10, 10, 10, 0.6)";
            navbar.style.padding = "20px 0";
        }
    });
}

// 3. تهيئة نافذة معرض الأعمال
function initPortfolioModal() {
    const modal = document.getElementById("portfolio-modal");
    const closeBtn = document.querySelector(".modal .close");
    const modalTitle = document.getElementById("modal-title");
    const modalGallery = document.getElementById("modal-gallery");
    let currentCategory = null;

    // بيانات الأعمال (يمكن استبدالها ببيانات حقيقية من API)
    const portfolioData = {
        "social-media": {
            title: "تصميم وسائل التواصل",
            items: [
                {
                    title: "حملة عيد الفطر - Baseline Medical",
                    description: "تصميم منشورات لعيد الفطر لشركة Baseline Medical",
                    tools: "Adobe Illustrator, Photoshop",
                    previewImage: "images/social/eid-design.webp",
                    images: ["images/social/eid-design.webp", "images/social/location-post.webp"]
                }
            ]
        },
        "branding": {
            title: "هوية بصرية وشعارات",
            items: [
                {
                    title: "هوية متجر تليفوني",
                    description: "تصميم هوية بصرية كاملة لمتجر هواتف",
                    tools: "Adobe Illustrator",
                    previewImage: "images/branding/phone-store.webp",
                    images: ["images/branding/phone-store.webp"]
                }
            ]
        }
    };

    // فتح المعرض عند النقر على أيقونة الأعمال
    document.querySelectorAll(".card-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            const category = this.closest(".portfolio-category").dataset.category;
            openGallery(category);
        });
    });

    // فتح المعرض
    function openGallery(category) {
        currentCategory = category;
        const data = portfolioData[category];
        
        if (!data) return;
        
        modalTitle.textContent = data.title;
        modalGallery.innerHTML = "";
        
        if (data.items.length === 0) {
            showEmptyState();
        } else {
            data.items.forEach((item, index) => {
                createProjectItem(item, index);
            });
        }
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // عرض حالة عدم وجود مشاريع
    function showEmptyState() {
        modalGallery.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>قيد التطوير</h3>
                <p>سيتم إضافة المشاريع قريباً</p>
            </div>
        `;
    }

    // إنشاء عنصر مشروع
    function createProjectItem(item, index) {
        const projectEl = document.createElement("div");
        projectEl.className = "project-item";
        projectEl.innerHTML = `
            <img src="${item.previewImage}" alt="${item.title}" loading="lazy">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>الأدوات:</strong> ${item.tools}</p>
            <button class="view-details-btn" data-index="${index}">عرض التفاصيل</button>
        `;
        
        modalGallery.appendChild(projectEl);
        
        // إضافة حدث لعرض التفاصيل
        projectEl.querySelector(".view-details-btn").addEventListener("click", function() {
            showProjectDetails(currentCategory, parseInt(this.dataset.index));
        });
    }

    // إغلاق النافذة
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // أحداث الإغلاق
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => e.target === modal && closeModal());
    document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());
}

// 4. تهيئة نموذج الاتصال
function initContactForm() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        // التحقق من صحة البيانات
        if (!validateForm()) return;
        
        // عرض حالة التحميل
        setFormState('loading');
        
        try {
            // هنا يمكنك إضافة كود الإرسال الفعلي إلى الخادم
            await sendFormData(new FormData(form));
            
            // عرض رسالة النجاح
            setFormState('success', 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
            form.reset();
        } catch (error) {
            // عرض رسالة الخطأ
            setFormState('error', 'حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.');
        }
    });

    // التحقق من صحة النموذج
    function validateForm() {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // إخفاء جميع رسائل الخطأ
        document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
        
        // التحقق من الاسم
        if (!form.name.value.trim()) {
            document.getElementById("name-error").textContent = "الرجاء إدخال الاسم";
            document.getElementById("name-error").style.display = "block";
            isValid = false;
        }
        
        // التحقق من البريد الإلكتروني
        if (!emailRegex.test(form.email.value.trim())) {
            document.getElementById("email-error").textContent = "الرجاء إدخال بريد إلكتروني صحيح";
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        }
        
        return isValid;
    }

    // محاكاة إرسال البيانات (يمكن استبدالها بـ fetch حقيقي)
    function sendFormData(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // في الواقع الفعلي، استخدم:
                // fetch('your-api-endpoint', { method: 'POST', body: formData })
                console.log('Form data:', Object.fromEntries(formData));
                Math.random() > 0.2 ? resolve() : reject(); // محاكاة نجاح/فشل عشوائي
            }, 1500);
        });
    }

    // تغيير حالة النموذج
    function setFormState(state, message = '') {
        const submitBtn = form.querySelector("button[type='submit']");
        const buttonText = submitBtn.querySelector(".button-text");
        const spinner = submitBtn.querySelector(".loading-spinner");
        const statusDiv = form.querySelector(".form-status");
        
        switch (state) {
            case 'loading':
                buttonText.textContent = "جاري الإرسال...";
                spinner.style.display = "inline-block";
                submitBtn.disabled = true;
                statusDiv.style.display = "none";
                break;
                
            case 'success':
                buttonText.textContent = "إرسال الرسالة";
                spinner.style.display = "none";
                submitBtn.disabled = false;
                statusDiv.textContent = message;
                statusDiv.style.color = "#4CAF50";
                statusDiv.style.display = "block";
                break;
                
            case 'error':
                buttonText.textContent = "إرسال الرسالة";
                spinner.style.display = "none";
                submitBtn.disabled = false;
                statusDiv.textContent = message;
                statusDiv.style.color = "#F44336";
                statusDiv.style.display = "block";
                break;
        }
    }
}

// 5. التعامل مع الصور
function initImageHandling() {
    // تحميل الصور بكسلاسة
    const images = document.querySelectorAll("img[loading='lazy']");
    
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imgObserver.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        images.forEach(img => imgObserver.observe(img));
    }
    
    // التعامل مع أخطاء الصور
    images.forEach(img => {
        img.onerror = function() {
            this.src = "images/placeholder.webp";
            this.alt = "صورة غير متوفرة";
        };
    });
}

// 6. تحديث نص الشعار أثناء التمرير
function initNavLogoUpdater() {
    const navLogo = document.querySelector(".nav-logo span");
    const sections = document.querySelectorAll("section[id]");
    
    function updateLogoText() {
        let currentSection = "الرئيسية";
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = getSectionName(section.id);
            }
        });
        
        navLogo.textContent = currentSection;
    }
    
    function getSectionName(id) {
        const names = {
            "home": "الرئيسية",
            "about": "عنّي",
            "portfolio": "أعمالي",
            "contact": "اتصل بي"
        };
        return names[id] || "الرئيسية";
    }
    
    window.addEventListener("scroll", updateLogoText);
    window.addEventListener("load", updateLogoText);
}
