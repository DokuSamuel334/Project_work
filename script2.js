// Student data
const students = [
    {
        name: "DOKU SAMUEL NII TETTEH",
        indexno: "UEB3231723",
        initials: "DSNT",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY ",
        age: 20,
        email: "niisamuel334@gmail.com",
        phone: "+233 557 475 562/ +233 270 944 100 ",
        address: "Ak-660-6950",
        mapAddress: "Ak-660-6950, Kumasi, Ghana", // <-- offline-friendly address string
        gpa: 3.7,
        interests: ["Cloud Engineering/Software Engineering"],
        coordinates: [6.6745, -1.5716] // Kumasi coordinates
    },
    {
        name: "AMPONSEM SANDRA",
        indexno: "UEB3231923",
        initials: "AS",
        level: "DEGGREE",
        major: " INFORMATION TECHNOLOGY",
        age: 21,
        email: "ardnas@email.com",
        phone: "+233 550 956 280 ",
        address: "BY-0153-1267,Near Cross Care Hospital,Sunyani",
        mapAddress: "BY-0153-1267, Near Cross Care Hospital, Sunyani, Ghana",
        gpa: 3.9,
        interests: ["Data Science", "AI", "Research"],
        coordinates: [7.3304, -2.3264]
    },
    {
        name: "ANOBENG PRINCE",
        indexno: "UEB3232223",
        initials: "AP",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 22,
        email: "anobengprince@icloud.com",
        phone: "+233 123 456 791",
        address: "BY-0115-4027,Near Fiapre Palace,sunyani",
        mapAddress: "BY-0115-4027, Near Fiapre Palace, Sunyani, Ghana",
        gpa: 3.56,
        interests: ["Software Engineering"],
        coordinates: [7.3302, -2.3270]
    },
    {
        name: "BOANOR SHEILA",
        indexno: "UEB3234223",
        initials: "BS",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 23,
        email: "nanaarquarh2@gmail.com",
        phone: "+233 123 456 792",
        address: "BY-0084-5148",
        mapAddress: "BY-0084-5148, Sunyani, Ghana",
        gpa: 2.1,
        interests: ["Mobile Application", "Music"],
        coordinates: [7.3299, -2.3269]
    },
    {
        name: "AMOH EMMANUEL",
        indexno: "UEB3221123",
        initials: "AE",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 25,
        email: "emmanuelamoh409@gmail.com",
        phone: "+233 598 859 760",
        address: "BY-0084-5148",
        mapAddress: "BY-0084-5148, Sunyani, Ghana",
        gpa: 4.0,
        interests: ["Game Development", "Videography", "Entrepreneuership"],
        coordinates: [7.3298, -2.3268]
    },
    {
        name: "OSMAN ADELLA CELINE",
        indexno: "UEB3219723",
        initials: "OAC",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGYe",
        age: 20,
        email: "osmanadellaceline@gmail.com",
        phone: "+233 596 783 530",
        address: "GA-546-8076,Near Prestige Hostel,Sunyani",
        mapAddress: "GA-546-8076, Near Prestige Hostel, Sunyani, Ghana",
        gpa: 3.5,
        interests: ["Music", "Exploring", "Photography"],
        coordinates: [7.3300, -2.3265]
    },
    {
        name: "NAAWEMUO CLETUS",
        indexno: "UEB3218123",
        initials: "NC",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 22,
        email: "cletusnaawmuo@gmail.com",
        phone: "+233 532 756 007/+233 509 611 886",
        address: "BY-0247-5707,Kottokrom/Sunyani",
        mapAddress: "BY-0247-5707, Kottokrom, Sunyani, Ghana",
        gpa: 1.8,
        interests: ["Database Systems"],
        coordinates: [7.3310, -2.3255]
    },
    {
        name: "OFORI BEMAH PRINCESS",
        indexno: "UEB3214923",
        initials: "OBP",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGYC",
        age: 22,
        email: "morelasgodchild@gmail.com",
        phone: "+233 599 755 763",
        address: "No 7 Bomfa Junction,Ejisu",
        mapAddress: "No 7 Bomfa Junction, Ejisu, Ghana",
        gpa: 3.88,
        interests: ["Reading", "Frontend Development", "Exploring", "Singing & Dancing"],
        coordinates: [6.6810, -1.6110]
    },
    {
        name: "ASANTE OBENG EMMANUEL",
        indexno: "UEB3231623",
        initials: "AOE",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 20,
        email: "asantemmanuel450@gmail.com",
        phone: "+233 547 260 521",
        address: "Ak-409-0387",
        mapAddress: "Ak-409-0387, Kumasi, Ghana",
        gpa: 3.4,
        interests: ["Coding"],
        coordinates: [6.6750, -1.5720]
    },
    {
        name: "OPOKU KWABIWAA ERICA",
        indexno: "UEB3221223",
        initials: "OKE",
        level: "DEGREE",
        major: "INFORMATION TECHNOLOGY",
        age: 19,
        email: "opokukwabiwaa@gmail.com",
        phone: "+233 597 897 929/+233 201 978 319",
        address: " BS-0093-4723,Near Chesville Hotel,Sunyani",
        mapAddress: "BS-0093-4723, Near Chesville Hotel, Sunyani, Ghana",
        gpa: 3.0,
        interests: ["Research", "Frontend Development", "Algorithms", "Mathematics"],
        coordinates: [7.3306, -2.3261]
    }
];

// Global variables
let currentMap = null;

// DOM Elements
const studentsBtn = document.getElementById('studentsBtn');
const studentsModal = document.getElementById('studentsModal');
const studentProfileModal = document.getElementById('studentProfileModal');
const profileInfo = document.getElementById('profileInfo');
const mapContainer = document.getElementById('mapContainer');
const closeButtons = document.querySelectorAll('.close');
const studentCards = document.querySelectorAll('.student-card');

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Students button click
    studentsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        studentsModal.style.display = 'block';
    });

    // Student card clicks
    studentCards.forEach(card => {
        card.addEventListener('click', function () {
            const studentIndex = parseInt(this.dataset.student);
            showStudentProfile(studentIndex);
        });
    });

    // Close button clicks
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.dataset.modal;
            document.getElementById(modalId).style.display = 'none';

            // Clean up map if closing profile modal
            if (modalId === 'studentProfileModal' && currentMap) {
                try { currentMap.remove(); } catch (e) { }
                currentMap = null;
                mapContainer.style.display = 'none';
                // clear offline map area
                const offline = document.getElementById('offlineMap');
                if (offline) offline.innerHTML = '';
            }
        });
    });

    // Click outside modal to close
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';

            // Clean up map if closing profile modal
            if (e.target.id === 'studentProfileModal' && currentMap) {
                try { currentMap.remove(); } catch (e) { }
                currentMap = null;
                mapContainer.style.display = 'none';
                const offline = document.getElementById('offlineMap');
                if (offline) offline.innerHTML = '';
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize animations and effects
    addAnimationEffects();
    addSearchToModal();
    initializeTypingEffect();
});

// Show student profile function
function showStudentProfile(index) {
    const student = students[index];

    // Close students modal
    studentsModal.style.display = 'none';

    // Update modal header
    const modalHeader = studentProfileModal.querySelector('.modal-header');
    modalHeader.innerHTML = `
    <button class="back-btn" onclick="goBackToStudents()">← Back to Students</button>
    <h2>${student.name} - Profile</h2>
`;


    // Generate profile HTML including an offline-ready mapAddress (no domains)
    profileInfo.innerHTML = `
        <div class="info-item">
            <strong>Name:</strong> ${student.name}
        </div>
        <div class="info-item">
            <strong>Index Number:</strong> ${student.indexno}
        </div>
        <div class="info-item">
            <strong>Level:</strong> ${student.level}
        </div>
        <div class="info-item">
            <strong>Major:</strong> ${student.major}
        </div>
        <div class="info-item">
            <strong>Age:</strong> ${student.age} years old
        </div>
        <div class="info-item">
            <strong>Email:</strong> ${student.email}
        </div>
        <div class="info-item">
            <strong>Phone:</strong> ${student.phone}
        </div>
        <div class="info-item">
            <strong>Address:</strong> ${student.address}
        </div>
        <div class="info-item">
            <strong>Map Address (offline):</strong> ${student.mapAddress}
            <button class="map-btn" onclick="showLocationSafe(${index})">Show Location</button>
        </div>
        <div class="info-item">
            <strong>GPA:</strong> ${student.gpa}/4.0
        </div>
        <div class="info-item">
            <strong>Interests:</strong> ${student.interests.join(', ')}
        </div>
        <div id="offlineMap" style="margin-top:12px;"></div>
         
    `;

    // Show profile modal
    studentProfileModal.style.display = 'block';
}

// Show location either via Leaflet (if online & available) or via inline offline SVG map
function showLocationSafe(studentIndex) {
    const student = students[studentIndex];

    // Always show the map container area in modal
    mapContainer.style.display = 'block';

    // Clean up previous leaflet map if any
    if (currentMap) {
        try { currentMap.remove(); } catch (e) { }
        currentMap = null;
    }

    // Clear offline area
    const offlineHolder = document.getElementById('offlineMap');
    if (offlineHolder) offlineHolder.innerHTML = '';

    // If online and Leaflet (L) exists, use it; otherwise use offline SVG
    const canUseLeaflet = (typeof L !== 'undefined') && navigator.onLine;

    if (canUseLeaflet) {
        // small delay to ensure container sizing
        setTimeout(() => {
            currentMap = L.map('map').setView(student.coordinates, 13);
            // NOTE: tileLayer still uses external tiles. If you want strictly NO external domain,
            // comment the next block out — offline SVG will be used instead.
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(currentMap);

            L.marker(student.coordinates)
                .addTo(currentMap)
                .bindPopup(`
                    <div style="text-align: center;">
                        <strong>${student.name}</strong><br>
                        ${student.mapAddress}<br>
                        <em>${student.level} - ${student.major}</em>
                    </div>
                `)
                .openPopup();
        }, 100);
    } else {
        // Build an offline SVG map: simple marker + coords + address text
        const svgWidth = 100;
        const svgHeight = 100;
        const markerX = svgWidth / 2;
        const markerY = svgHeight / 2 - 10;

        const svg = `
            <div class="offline-map" role="img" aria-label="Offline map showing location marker">
                <svg width="100%" height="100%" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
                    <rect width="${svgWidth}" height="${svgHeight}" rx="12" ry="12" fill="#f4f4f6"/>
                    <!-- simple roads/grid for context -->
                    <g stroke="#e0e0e3" stroke-width="1">
                        <path d="M 0 ${svgHeight * 0.25} L ${svgWidth} ${svgHeight * 0.25}" />
                        <path d="M 0 ${svgHeight * 0.5} L ${svgWidth} ${svgHeight * 0.5}" />
                        <path d="M 0 ${svgHeight * 0.75} L ${svgWidth} ${svgHeight * 0.75}" />
                        <path d="M ${svgWidth * 0.25} 0 L ${svgWidth * 0.25} ${svgHeight}" />
                        <path d="M ${svgWidth * 0.5} 0 L ${svgWidth * 0.5} ${svgHeight}" />
                        <path d="M ${svgWidth * 0.75} 0 L ${svgWidth * 0.75} ${svgHeight}" />
                    </g>
                    <!-- marker drop -->
                    <g transform="translate(${markerX}, ${markerY})">
                        <path d="M0,-26 C8,-26 16,-18 16,-10 C16,4 0,34 0,34 C0,34 0,34 0,34 C0,34 -16,4 -16,-10 C-16,-18 -8,-26 0,-26 Z" fill="#667eea"/>
                        <circle cx="0" cy="-12" r="6" fill="#fff"/>
                    </g>
                </svg>
                <div style="padding:10px;">
                    <strong>${student.name}</strong><br>
                    <small>Coords: ${student.coordinates[0].toFixed(5)}, ${student.coordinates[1].toFixed(5)}</small>
                    <p style="margin:6px 0 0;">${student.mapAddress}</p>
                </div>
            </div>
        `;

        offlineHolder.innerHTML = svg;
    }
}

// Enhanced student search functionality
function searchStudents(query) {
    const studentCards = document.querySelectorAll('.student-card');
    const searchTerm = query.toLowerCase();

    studentCards.forEach((card, index) => {
        const student = students[index];
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm) ||
            (student.major && student.major.toLowerCase().includes(searchTerm)) ||
            (student.level && student.level.toLowerCase().includes(searchTerm)) ||
            (student.indexno && student.indexno.toLowerCase().includes(searchTerm));

        if (matchesSearch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add search functionality to students modal
function addSearchToModal() {
    const modalBody = studentsModal.querySelector('.modal-body');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search students by name, major,indexno...';
    searchInput.className = 'student-search';
    searchInput.style.cssText = `
        width: 100%;
        padding: 0.8rem;
        margin-bottom: 1rem;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        box-sizing: border-box;
    `;

    searchInput.addEventListener('input', (e) => {
        searchStudents(e.target.value);
    });

    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = '#667eea';
        searchInput.style.outline = 'none';
        searchInput.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = '#e9ecef';
        searchInput.style.boxShadow = 'none';
    });

    modalBody.insertBefore(searchInput, modalBody.firstChild);
}

// Add animation effects
function addAnimationEffects() {
    // Add intersection observer for content cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all content cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects to student cards
    document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize typing effect for hero title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

// Add scroll effects for navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#ffff';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Utility functions
function getRandomKumasiCoordinates() {
    const baseLatitude = 6.6745;
    const baseLongitude = -1.5716;
    const range = 0.1; // Approximately 11km radius

    const lat = baseLatitude + (Math.random() - 0.5) * range;
    const lng = baseLongitude + (Math.random() - 0.5) * range;

    return [lat, lng];
}

// Add dynamic background for hero section
function addDynamicBackground() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        heroSection.style.padding = '4rem 0';
        heroSection.style.borderRadius = '15px';
        heroSection.style.margin = '2rem 0';
    }
}

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    addDynamicBackground();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { 
            opacity: 0; 
            transform: scale(0.9); 
        }
        to { 
            opacity: 1; 
            transform: scale(1); 
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .student-card {
        animation: slideInUp 0.3s ease forwards;
    }
    
    .modal-content {
        animation: modalSlideIn 0.3s ease-out forwards;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .stat-item:hover {
        animation: pulse 0.6s ease-in-out;
    }

    /* offline map small styles (embedded here so script remains self-contained) */
    .offline-map {
        display: flex;
        gap: 12px;
        align-items: center;
        background: white;
        border-radius: 10px;
        padding: 8px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        margin-top: 8px;
    }

    .offline-map svg {
        width: 240px;
        height: 120px;
        border-radius: 8px;
    }

`;

function goBackToStudents() {
    studentProfileModal.style.display = 'none';
    studentsModal.style.display = 'block';
}

document.head.appendChild(style);

// Mobile Popup Menu
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});
