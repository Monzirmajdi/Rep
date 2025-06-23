// ... (الكود الأصلي كما هو حتى نهاية الدالة showProjectList) ...

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

    // تحديث مؤشر التقدم عند التمرير
    const imagesGrid = modalGallery.querySelector('.project-images-grid');
    const progressIndicator = modalGallery.querySelector('.gallery-progress');
    
    if (imagesGrid && progressIndicator && project.images?.length > 0) {
        imagesGrid.addEventListener('scroll', () => {
            const scrollPos = imagesGrid.scrollLeft;
            const imgWidth = imagesGrid.querySelector('.gallery-item').offsetWidth + 15; // 15 is the gap
            const currentImage = Math.round(scrollPos / imgWidth) + 1;
            progressIndicator.textContent = `${currentImage} of ${project.images.length}`;
        });
    }

    // زر عرض المزيد من الصور
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

    // زر العودة
    document.getElementById('back-to-projects-btn').addEventListener('click', () => {
        showProjectList(category);
    });
}

// ... (بقية الكود الأصلي حتى النهاية) ...

// تبديل الوضع الفاتح/الداكن
document.addEventListener("DOMContentLoaded", () => {
    // ... (الكود الأصلي) ...

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // تحميل التفضيل المحفوظ
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }
});
