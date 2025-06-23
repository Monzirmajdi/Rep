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
                    previewImage: "images/1000229011.jpg",
                    images: ["images/1000229011.jpg", "images/1000229012.jpg"]
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

    function showProjectList(category) {
        currentCategory = category;
        const data = portfolioData[category];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalGallery.innerHTML = "";

        if (data.items.length === 0) {
            const emptyMessage = document.createElement("div");
            emptyMessage.className = "empty-category";
            emptyMessage.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <h3 style="color: #f4c430; margin-bottom: 10px;">Coming Soon</h3>
                    <p>Projects in this category will be added soon.</p>
                </div>
            `;
            modalGallery.appendChild(emptyMessage);
        } else {
            data.items.forEach((item, index) => {
                const projectListItem = document.createElement("div");
                projectListItem.className = "project-list-item";
                projectListItem.innerHTML = `
                    <img src="${item.previewImage}" alt="${item.title}" class="project-preview-image">
                    <h4 style="margin-bottom: 10px; color: #f4c430;">${item.title}</h4>
                    <p style="color: #ccc; font-size: 0.9rem;">${item.description}</p>
                    <p style="color: #999; font-size: 0.8rem;"><strong>Tools:</strong> ${item.tools}</p>
                    <button class="view-project-btn" data-project-index="${index}">View Project</button>
                `;
                modalGallery.appendChild(projectListItem);
            });

            document.querySelectorAll(".view-project-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const projectIndex = parseInt(e.target.dataset.projectIndex);
                    showProjectDetails(currentCategory, projectIndex);
                });
            });
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function showProjectDetails(category, projectIndex) {
        const data = portfolioData[category];
        const project = data.items[projectIndex];
        if (!project) return;

        modalTitle.textContent = project.title;
        modalGallery.innerHTML = `
            <button id="back-to-projects-btn" class="btn btn-primary" style="margin-bottom: 20px;">
                <i class="fas fa-arrow-left"></i> Back to Projects
            </button>
            <p style="color: #ccc; margin-bottom: 10px; font-size: 1rem;">${project.description}</p>
            <p style="color: #999; margin-bottom: 20px; font-size: 0.9rem;"><strong>Tools:</strong> ${project.tools}</p>
            <div class="project-images-container">
                <div class="gallery-progress">1 of ${project.images?.length || 0}</div>
                <div class="gallery-grid project-images-grid" style="display: flex; overflow-x: auto; gap: 15px; padding-bottom: 10px;">
                    ${project.images && project.images.length > 0 ? 
                        project.images.slice(0, Math.min(5, project.images.length)).map(img => `
                            <div class="gallery-item" style="flex: 0 0 300px;">
                                <img src="${img}" alt="${project.title}" class="gallery-image" style="width:100%; border-radius:8px;">
                            </div>
                        `).join('') : 
                        '<div class="gallery-placeholder" style="width:100%; text-align:center; color:#666;"><i class="fas fa-image"></i> No images available</div>'
                    }
                </div>
                ${project.images && project.images.length > 5 ? 
                    `<button id="show-more-images-btn" class="btn btn-primary" style="margin: 20px auto; display: block;">Show More</button>` : ''
                }
            </div>
        `;

        const imagesGrid = modalGallery.querySelector('.project-images-grid');
        const progressIndicator = modalGallery.querySelector('.gallery-progress');
        
        if (imagesGrid && progressIndicator && project.images?.length > 0) {
            imagesGrid.addEventListener('scroll', () => {
                const scrollPos = imagesGrid.scrollLeft;
                const imgWidth = imagesGrid.querySelector('.gallery-item').offsetWidth + 15;
                const currentImage = Math.round(scrollPos / imgWidth) + 1;
                progressIndicator.textContent = `${currentImage} of ${project.images.length}`;
            });
        }

        const showMoreBtn = modalGallery.querySelector('#show-more-images-btn');
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                imagesGrid.innerHTML = project.images.map(img => `
                    <div class="gallery-item" style="flex: 0 0 300px;">
                        <img src="${img}" alt="${project.title}" class="gallery-image" style="width:100%; border-radius:8px;">
                    </div>
                `).join('');
                showMoreBtn.style.display = 'none';
            });
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
// تبديل الوضع الفاتح للهيرو فقط
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    const heroSection = document.querySelector('.hero');
    
    themeToggle.addEventListener('click', () => {
        heroSection.classList.toggle('light-mode');
        
        const icon = themeToggle.querySelector('i');
        if (heroSection.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('hero-theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('hero-theme', 'dark');
        }
    });

    // تحميل التفضيل المحفوظ
    if (localStorage.getItem('hero-theme') === 'light') {
        heroSection.classList.add('light-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

    // ... بقية الأكواد الأخرى كما هي ...
});
