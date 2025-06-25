// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 10, 0.8)";
        navbar.style.backdropFilter = "blur(12px)";
    } else {
        navbar.style.background = "rgba(10, 10, 10, 0.6)";
        navbar.style.backdropFilter = "blur(8px)";
    }
});

// Portfolio Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("portfolio-modal");
    const closeModal = document.querySelector(".modal .close");
    const modalTitle = document.getElementById("modal-title");
    const modalGallery = document.getElementById("modal-gallery");

    // Portfolio data structure
    const portfolioData = {
        "social-media": {
            title: "Social Media Design",
            items: [
                {
                    title: "Baseline Medical - Eid Mubarak Campaign",
                    description: "Eid greeting social media post for Baseline Medical with mosque imagery",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/social/بدون اسم10_20250622164022_keQc5u5Z2b_ZzlwLR8n2o_rGC8gRzR7o.png",
                    images: ["images/social/1000003401.jpg", "images/social/بدون اسم10_20250622164022_keQc5u5Z2b_ZzlwLR8n2o_rGC8gRzR7o.png", "images/social/1000003399.jpg", "images/social/1000003398.jpg", "images/social/1000003397.jpg", "images/social/1000003400.jpg"]
                },
                {
                    title: "Baseline Medical - Eid Mubarak Campaign",
                    description: "Eid greeting social media post for Baseline Medical with mosque imagery",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/social/1000003401.jpg",
                    images: ["images/social/1000003401.jpg", "images/social/1000003324.png", "images/social/1000003399.jpg", "images/social/1000003398.jpg", "images/social/1000003397.jpg", "images/social/1000003400.jpg"]
                },
                {
                    title: "Baseline Medical - Eid Mubarak Campaign",
                    description: "Eid greeting social media post for Baseline Medical with mosque imagery",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/social/1000003401.jpg",
                    images: ["images/social/1000003401.jpg", "images/social/1000003324.png", "images/social/1000003399.jpg", "images/social/1000003398.jpg", "images/social/1000003397.jpg", "images/social/1000003400.jpg"]
                },
                {
                    title: "Baseline Medical - Eid Mubarak Campaign",
                    description: "Eid greeting social media post for Baseline Medical with mosque imagery",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/social/1000003401.jpg",
                    images: ["images/social/1000003401.jpg", "images/social/1000003324.png", "images/social/1000003399.jpg", "images/social/1000003398.jpg", "images/social/1000003397.jpg", "images/social/1000003400.jpg"]
                }
                // ... بقية العناصر كما هي ...
            ]
        },
        // ... بقية الفئات كما هي ...
        "branding": {
            title: "Brand Identity & Logos",
            items: [
                {
                    title: "تليفوني - متجر للهواتف والاكسسوارات",
                    description: "تصميم هوية بصرية لمتجر هواتف واكسسوارات",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/1000229017.jpg",
                    images: ["images/1000229017.jpg", "images/1000229016.jpg", "images/1000229023.jpg"]
                },
                {
                    title: "مؤسسة د/أبو ذر الكودة - مؤسسة تعليمية",
                    description: "تصميم شعار لمؤسسة تعليمية",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/1000229023.jpg",
                    images: ["images/1000229023.jpg", "images/1000229024.jpg"]
                },
                {
                    title: "Nook Nest - محل لبيع الأثاث المنزلي والمكتبي",
                    description: "تصميم هوية بصرية لمحل أثاث منزلي ومكتبي",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/1000229008.jpg",
                    images: ["images/1000229008.jpg", "images/1000229009.jpg"]
                },
                {
                    title: "JK Arts - شعار لمنشئ محتوى فني",
                    description: "تصميم شعار لمنشئ محتوى فني",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/1000229019.jpg",
                    images: ["images/1000229019.jpg", "images/1000229020.jpg"]
                },
                {
                    title: "Ratina - براند سوداني للطرح والمنتجات التجميلية",
                    description: "تصميم هوية بصرية لبراند سوداني للطرح والمنتجات التجميلية",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/Branding/Ratina/Untitled182_20250605061344_CvWhFKhQ4Q.webp",
                    images: ["images/Branding/Ratina/Untitled182_20250605061344_CvWhFKhQ4Q.webp", "images/Branding/Ratina/Untitled183_a66VRPGx8P.webp","images/Branding/Ratina/Untitled184_20250605062347_cyR4cyNw8B.webp","images/Branding/Ratina/Untitled181_20250605061101_BGUEtEPg0Y.webp","images/Branding/Ratina/Untitled180_20250605060456_vryLtoMw0E.webp"]
                }, 
                {
                    title: "Sa Stainless Steel - براند سوداني للاكسسوارات الفضة الاستيل",
                    description: "تصميم هوية بصرية لبراند سوداني للاكسسوارات الفضة",
                    tools: "Adobe Illustrator, Adobe Photoshop",
                    previewImage: "images/Branding/Sa/Untitled28_20250624203543_YNhA6ynz1M.webp",
                    images: ["images/Branding/Sa/1_NtqvnVum6y.webp", "images/Branding/Sa/2_iabZA5PC8E.webp","images/Branding/Sa/4_GfPbVJRk7O.webp","images/Branding/Sa/5_xheKK6K81L.webp","images/Branding/Sa/6_2PZqglIW4P.webp"]
                } 
            ]
        },
        "ui-ux": {
            title: "UI/UX Design",
            items: [
                {
                    title: "Mobile App Interface",
                    description: "Healthcare mobile application design",
                    tools: "Figma, Adobe XD",
                    previewImage: "images/placeholder.png", // Placeholder image
                    images: [] // Add placeholder images if available
                },
                {
                    title: "E-commerce Website",
                    description: "Complete website design and user experience",
                    tools: "Figma, Sketch",
                    previewImage: "images/placeholder.png", // Placeholder image
                    images: []
                },
                {
                    title: "Dashboard Design",
                    description: "Admin dashboard for business management",
                    tools: "Adobe XD, Figma",
                    previewImage: "images/placeholder.png", // Placeholder image
                    images: []
                },
                {
                    title: "Landing Page Design",
                    description: "High-converting landing page layouts",
                    tools: "Figma, Photoshop",
                    previewImage: "images/placeholder.png", // Placeholder image
                    images: []
                }
            ]
        }
    };

    // Function to populate card previews
    function populateCardPreviews() {
        document.querySelectorAll(".portfolio-category").forEach(categoryDiv => {
            const previewContainer = categoryDiv.querySelector(".card-preview");
            previewContainer.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                const placeholder = document.createElement("div");
                placeholder.className = "preview-item";
                previewContainer.appendChild(placeholder);
            }
        });
    }

    window.addEventListener("load", populateCardPreviews);

    // Open modal when portfolio category is clicked
    document.querySelectorAll(".card-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.target.closest(".portfolio-category").dataset.category;
            showProjectList(category);
        });
    });

    let currentCategory = null;

    // ------ استبدال الدالة - بداية ------
// ------ استبدال الدالة - بداية ------
function showProjectList(category) {
    // إضافة مؤشر تحميل قبل البدء
    modalGallery.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i></div>';
    
    setTimeout(() => {
        const data = portfolioData[category];
        if (!data) return;

        modalTitle.textContent = data.title;
        
        // إنشاء عنصر خارج DOM أولاً
        const fragment = document.createDocumentFragment();
        const gridContainer = document.createElement('div');
        gridContainer.className = 'modal-gallery-grid';

        data.items.forEach((item, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="image-container" style="height: 180px; background: #f0f0f0;">
                    <img src="${item.previewImage}" 
                         alt="${item.title}"
                         class="project-image"
                         loading="lazy"
                         style="opacity: 0; transition: opacity 0.3s ease;"
                         onload="this.style.opacity = 1"
                         onerror="this.src='images/placeholder.png'; this.style.opacity = 1">
                </div>
                <div class="project-info">
                    <h3>${item.title}</h3>
                    <p>${item.description.substring(0, 60)}...</p>
                </div>
            `;
            projectCard.addEventListener('click', () => {
                showProjectDetails(category, index);
            });
            gridContainer.appendChild(projectCard);
        });

        fragment.appendChild(gridContainer);
        
        // استبدال المحتوى دفعة واحدة
        modalGallery.innerHTML = '';
        modalGallery.appendChild(fragment);
        
    }, 50); // تأخير بسيط لتفادي الوميض
    modal.style.display = "block";
}
   function showProjectDetails(category, projectIndex) {
    // إضافة مؤشر تحميل أولي
    modalGallery.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i></div>';
    
    setTimeout(() => {
        const data = portfolioData[category];
        const project = data.items[projectIndex];
        if (!project) return;

        // إنشاء العناصر خارج DOM أولاً
        const fragment = document.createDocumentFragment();
        const container = document.createElement('div');
        
        container.innerHTML = `
            <button id="back-to-projects-btn" class="btn btn-primary" style="margin-bottom: 20px;">
                <i class="fas fa-arrow-left"></i> Back to Projects
            </button>
            <p class="project-description">${project.description}</p>
            <p class="project-tools"><strong>Tools:</strong> ${project.tools}</p>
            <div class="project-images-container">
                <div class="gallery-progress">1 of ${project.images?.length || 0}</div>
                <div class="gallery-grid project-images-grid">
                    ${project.images && project.images.length > 0 ? 
                        project.images.slice(0, Math.min(5, project.images.length)).map(img => `
                            <div class="gallery-item">
                                <img src="${img}" 
                                     alt="${project.title}" 
                                     class="gallery-image"
                                     loading="lazy"
                                     style="opacity: 0; transition: opacity 0.3s ease;"
                                     onload="this.style.opacity = 1"
                                     onerror="this.style.opacity = 1; this.src='images/placeholder.png'">
                            </div>
                        `).join('') : 
                        '<div class="gallery-placeholder"><i class="fas fa-image"></i> No images available</div>'
                    }
                </div>
                ${project.images && project.images.length > 5 ? 
                    `<button id="show-more-images-btn" class="btn btn-primary">Show More</button>` : ''
                }
            </div>
        `;
        
        fragment.appendChild(container);
        
        // استبدال المحتوى دفعة واحدة
        modalGallery.innerHTML = '';
        modalGallery.appendChild(fragment);
        
        // بقية معالجات الأحداث...
        document.getElementById('back-to-projects-btn').addEventListener('click', () => {
            showProjectList(category);
        });
        
        const showMoreBtn = document.getElementById('show-more-images-btn');
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                const imagesGrid = document.querySelector('.project-images-grid');
                imagesGrid.innerHTML = project.images.map(img => `
                    <div class="gallery-item">
                        <img src="${img}" 
                             alt="${project.title}" 
                             class="gallery-image"
                             loading="lazy"
                             style="opacity: 0; transition: opacity 0.3s ease;"
                             onload="this.style.opacity = 1"
                             onerror="this.style.opacity = 1; this.src='images/placeholder.png'">
                    </div>
                `).join('');
                showMoreBtn.style.display = 'none';
            });
        }
        
    }, 50);
}

        document.getElementById('back-to-projects-btn').addEventListener('click', () => {
            showProjectList(category);
        });
    }

    // Close modal
    closeModal.addEventListener("click", closePortfolioModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closePortfolioModal();
        }
    });

    function closePortfolioModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Contact form handling
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");
        
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
    });
// بدلاً من هذا الكود القديم (الذي يطبق على الهيرو فقط):
/*
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    const heroSection = document.querySelector('.hero');
    
    themeToggle.addEventListener('click', () => {
        heroSection.classList.toggle('light-mode');
        // ... بقية الكود ...
    });
}
*/

// استبدله بهذا الكود الجديد (يطبق على كل الصفحة):
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('page-theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('page-theme', 'dark');
        }
    });

    // تحميل التفضيل المحفوظ
    if (localStorage.getItem('page-theme') === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

    // ... بقية الأكواد الأخرى كما هي ...
});


// Dynamic Navbar Title on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const navLogoSpan = document.querySelector(".nav-logo span");
    const sections = document.querySelectorAll("section[id]");

    const sectionTitles = {
        "home": "Home",
        "about": "About",
        "portfolio": "Portfolio",
        "contact": "Contact"
    };

    function updateNavLogoTitle() {
        let currentSectionId = "home"; // Default to home

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                currentSectionId = section.id;
            }
        });

        navLogoSpan.textContent = sectionTitles[currentSectionId];
    }

    // Initial call on load
    updateNavLogoTitle();

    // Update on scroll
    window.addEventListener("scroll", updateNavLogoTitle);
});

