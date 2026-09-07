const FALLBACK_MENU_DATA = {
    "restaurant": "أبو إياد السوري (Abu Eyad El Souri)",
    "tagline": "الشاورما عندنا دلع بطن",
    "category": "Syrian Restaurant",
    "slogan": "هيغير مفهوم الشاورما - نكهة سورية تكتب الحكاية",
    "location": {
        "address": "مشتول السوق شارع السوق بجوار جمال شرف, Cairo, Egypt, 11511",
        "area": "مشتول"
    },
    "contact": {
        "messenger": "ابو اياد السوري",
        "phone": "01042822787 - 01042827982",
        "whatsapp": "01212904055",
        "socialMedia": {
            "facebook": "https://www.facebook.com/profile.php?id=61593782112073"
        }
    },
    "hours": "Always open",
    "menu": {
        "sandwiches": {
            "name": "ساندوتشات",
            "items": [
                {
                    "name": "بطاطس بوم فريت",
                    "large": 30,
                    "small": 25
                },
                {
                    "name": "بوم فريت موزاريلا",
                    "syrian": 40,
                    "shami": 35
                },
                {
                    "name": "بوم فريت مكس جبن",
                    "price": 50
                },
                {
                    "name": "بانية",
                    "large": 40,
                    "small": 35
                },
                {
                    "name": "بيض اومليت",
                    "syrian": 30,
                    "shami": 25
                },
                {
                    "name": "اومليت بالجبنة",
                    "syrian": 35,
                    "shami": 30
                },
                {
                    "name": "اومليت مكس جبن",
                    "price": 50
                },
                {
                    "name": "بيض بالبسطرمة",
                    "syrian": 40,
                    "shami": 35
                },
                {
                    "name": "بطاطس مكس مدخن",
                    "price": 50
                }
            ]
        },
        "ala_grill": {
            "name": "على الجريل",
            "items": [
                {
                    "name": "كفتة سيخ جريل",
                    "large": 50,
                    "small": 40
                },
                {
                    "name": "هوت دوج",
                    "large": 40,
                    "small": 35
                },
                {
                    "name": "سوسيس أبو اياد",
                    "large": 45,
                    "small": 40
                },
                {
                    "name": "مكس لحوم",
                    "price": 90
                }
            ]
        },
        "chicken_abo_ayad": {
            "name": "فراخ ابو إياد",
            "items": [
                {
                    "name": "فراخ مكسيكي",
                    "syrian": 55,
                    "shami": 50
                },
                {
                    "name": "فراخ فاهيتا",
                    "syrian": 55,
                    "shami": 50
                },
                {
                    "name": "شيش طاووق ع الجريل",
                    "syrian": 75,
                    "shami": 60
                },
                {
                    "name": "مكس فراخ",
                    "syrian": 85,
                    "shami": 75
                },
                {
                    "name": "أصابع زنجر مقرمشة",
                    "syrian": 75,
                    "shami": 65
                },
                {
                    "name": "كريسبي (عادي)",
                    "syrian": 75,
                    "shami": 65
                },
                {
                    "name": "زنجر (حار)",
                    "syrian": 75,
                    "shami": 65
                },
                {
                    "name": "كوردن بلو",
                    "syrian": 75,
                    "shami": 65
                },
                {
                    "name": "اسكالوب",
                    "syrian": 75,
                    "shami": 60
                },
                {
                    "name": "كرانشي",
                    "syrian": 75,
                    "shami": 60
                }
            ]
        },
        "shawarma_abo_ayad": {
            "name": "شاورما ابو إياد",
            "items": [
                {
                    "name": "شاورما فراخ",
                    "large": 65,
                    "small": 55
                },
                {
                    "name": "شاورما فراخ بالموزاريلا",
                    "large": 75,
                    "small": 60
                },
                {
                    "name": "صاروخ شاورما مشروم موزاريلا",
                    "large": 80,
                    "small": 65
                },
                {
                    "name": "شاورما نص متر",
                    "price": 125
                }
            ]
        },
        "sweet_sandwiches": {
            "name": "الحلويات",
            "items": [
                {
                    "name": "سندوتش نوتيلا",
                    "price": 20
                },
                {
                    "name": "تورتيلا نوتيلا وفواكه",
                    "price": 50
                }
            ]
        },
        "weights": {
            "name": "الأوزان",
            "note": "يقدم مع عيش سوري - بطاطس - ثومية - مخلل",
            "items": [
                {
                    "name": "كيلو شاورما",
                    "price": 500
                },
                {
                    "name": "نصف كيلو شاورما",
                    "price": 250
                },
                {
                    "name": "ربع كيلو شاورما",
                    "price": 125
                },
                {
                    "name": "كيلو شيش ع الجريل",
                    "price": 375
                }
            ]
        },
        "fatteh_abo_ayad": {
            "name": "فتة أبو إياد",
            "note": "مكونات الطبق : تومية - عيش فتوش - أرز",
            "items": [
                {
                    "name": "فتة شاورما فراخ",
                    "price": 100
                },
                {
                    "name": "فتة ميكس (شيش - زنجر - كفتة)",
                    "price": 110
                },
                {
                    "name": "فتة فاهيتا مشروم وفراخ",
                    "price": 95
                },
                {
                    "name": "فتة شيش طاووق",
                    "price": 100
                },
                {
                    "name": "فتة تشيكن مكسيكي",
                    "price": 95
                },
                {
                    "name": "فتة اسكالوب",
                    "price": 100
                },
                {
                    "name": "فتة ريزو",
                    "price": 100
                },
                {
                    "name": "فتة زنجر",
                    "price": 100
                },
                {
                    "name": "فتة كفتة سيخ ع الجريل",
                    "price": 90
                },
                {
                    "name": "فتة كريسبي",
                    "price": 100
                }
            ]
        },
        "shawarma_meals": {
            "name": "وجبات الشاورما",
            "note": "تقدم مع بطاطس بوم فريت - ثومية - مخلل",
            "items": [
                {
                    "name": "سندوتش شاورما عربي مقطع",
                    "price": 95
                },
                {
                    "name": "وجبة دبل شاورما عربي",
                    "price": 140
                },
                {
                    "name": "وجبة اكسترا شاورما بالموزاريلا",
                    "price": 150
                }
            ]
        },
        "broast_meals": {
            "name": "وجبات بروست",
            "note": "تقدم مع أرز بسمتي - عيش سوري - بطاطس بوم فريت - ثومية - مخلل",
            "items": [
                {
                    "name": "ربع فرخة بروست",
                    "price": 90
                },
                {
                    "name": "نصف فرخة بروست",
                    "price": 180
                },
                {
                    "name": "فرخة بروست كاملة",
                    "price": 340
                },
                {
                    "name": "ربع زنجر",
                    "price": 125
                },
                {
                    "name": "نص زنجر",
                    "price": 190
                }
            ]
        },
        "family_packages": {
            "name": "الوجبات العائلية",
            "note": "تقدم مع أرز بسمتي - عيش سوري - بطاطس بوم فريت - ثومية - مخلل",
            "items": [
                {
                    "name": "وجبة ميكس فراخ ابو اياد (شيش - زنجر - تشيكن فاهيتا)",
                    "price": 130
                },
                {
                    "name": "وجبة 3 أفراد (3 شيش - 3 زنجر - 3 تشيكن فاهيتا - 3 ساندوتش شاورما)",
                    "price": 450
                }
            ]
        },
        "kids_meal": {
            "name": "وجبة الأطفال",
            "description": "دبوس فراخ + بطاطس بوم فريت + كاتشب",
            "price": 50
        },
        "boxes": {
            "name": "بوكسات",
            "notes": "مكونات الطبق : أرز - تومية - سبايسي - مخلل - بطاطس - عيش سوري",
            "items": [
                {
                    "name": "بوكس حبش",
                    "description": "شاورما عربي + قطعة اسكالوب + زنجر + شيش + صوص",
                    "price": 220
                }
            ]
        },
        "additions": {
            "name": "إضافات",
            "items": [
                {
                    "name": "باكيت بطاطس",
                    "small": 20,
                    "large": 35
                },
                {
                    "name": "رغيف عيش صاج",
                    "price": 4
                },
                {
                    "name": "صوص سبايسي",
                    "small": 10,
                    "large": 15
                },
                {
                    "name": "طبق أرز بسمتي",
                    "price": 40
                },
                {
                    "name": "علبة مشكل",
                    "small": 10,
                    "large": 15
                },
                {
                    "name": "صوص شيدر",
                    "price": 25
                },
                {
                    "name": "صوص تومية",
                    "small": 10,
                    "large": 15
                },
                {
                    "name": "إضافة جبنة",
                    "price": 10
                },
                {
                    "name": "صوص باربكيو",
                    "price": 25
                },
                {
                    "name": "صوص كاتشب",
                    "small": 10,
                    "large": 15
                },
                {
                    "name": "كلوسلو",
                    "price": 45
                }
            ]
        }
    }
};

/**
 * Abu Eyad El Souri - Fiery Menu Web App Engine
 */

let currentDataset = 'full'; // Default to full dataset menu data .json
let activeData = null;
let shawrmaData = null;
let fullMenuData = null;
let cart = [];
let activeCategoryFilter = 'all';

// DOM Elements
const btnDsShawrma = document.getElementById('btn-ds-shawrma');
const btnDsFull = document.getElementById('btn-ds-full');
const btnViewPoster = document.getElementById('btn-view-poster');
const btnViewInteractive = document.getElementById('btn-view-interactive');
const btnPrint = document.getElementById('btn-print');

const posterView = document.getElementById('poster-view');
const interactiveView = document.getElementById('interactive-view');

const col1CategoriesContainer = document.getElementById('col1-categories-container');
const col2CategoriesContainer = document.getElementById('col2-categories-container');
const col3CategoriesContainer = document.getElementById('col3-categories-container');

const interactiveItemsCatalog = document.getElementById('interactive-items-catalog');
const interactiveCategoryPills = document.getElementById('interactive-category-pills');
const menuSearchInput = document.getElementById('menu-search');
const clearSearchBtn = document.getElementById('clear-search');

const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPrice = document.getElementById('cart-total-price');
const btnWhatsappOrder = document.getElementById('btn-whatsapp-order');
const clearCartBtn = document.getElementById('clear-cart');

// Customer Info Elements
const custNameInput = document.getElementById('cust-name');
const custPhoneInput = document.getElementById('cust-phone');
const custAddressInput = document.getElementById('cust-address');
const custNotesInput = document.getElementById('cust-notes');

// Mobile Drawer Elements
const orderSummaryPanel = document.querySelector('.order-summary-panel');
const mobileCartBar = document.getElementById('mobile-cart-bar');
const mobileCartCount = document.getElementById('mobile-cart-count');
const mobileCartTotal = document.getElementById('mobile-cart-total');
const openMobileDrawerBtn = document.getElementById('open-mobile-drawer');
const closeMobileDrawerBtn = document.getElementById('close-mobile-drawer');
const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');

// Custom Alert & Confirm Modal System
const customAlert = document.getElementById('custom-alert');
const alertTitle = document.getElementById('alert-title');
const alertMessage = document.getElementById('alert-message');
const alertIcon = document.getElementById('alert-icon');
const alertCloseBtn = document.getElementById('alert-close-btn');
const alertCancelBtn = document.getElementById('alert-cancel-btn');

let onAlertConfirmCallback = null;

function showCustomAlert(message, title = 'تنبيه', iconClass = 'fa-solid fa-triangle-exclamation') {
    if (!customAlert) {
        alert(message);
        return;
    }
    if (alertTitle) alertTitle.textContent = title;
    if (alertMessage) alertMessage.textContent = message;
    if (alertIcon) alertIcon.className = iconClass;

    if (alertCancelBtn) alertCancelBtn.classList.add('hidden');
    if (alertCloseBtn) {
        alertCloseBtn.textContent = 'حسناً، فهمت';
        alertCloseBtn.className = 'alert-btn btn-alert-confirm';
    }

    onAlertConfirmCallback = null;

    customAlert.classList.remove('hidden');
    void customAlert.offsetWidth; // Trigger layout reflow for animation
    customAlert.classList.add('active');
}

function showCustomConfirm(message, title = 'تأكيد الإجراء', onConfirm = null, iconClass = 'fa-solid fa-circle-question') {
    if (!customAlert) {
        if (confirm(message) && onConfirm) onConfirm();
        return;
    }
    if (alertTitle) alertTitle.textContent = title;
    if (alertMessage) alertMessage.textContent = message;
    if (alertIcon) alertIcon.className = iconClass;

    if (alertCancelBtn) alertCancelBtn.classList.remove('hidden');
    if (alertCloseBtn) {
        alertCloseBtn.textContent = 'تأكيد الإجراء';
        alertCloseBtn.className = 'alert-btn btn-alert-confirm danger';
    }

    onAlertConfirmCallback = onConfirm;

    customAlert.classList.remove('hidden');
    void customAlert.offsetWidth;
    customAlert.classList.add('active');
}

function closeCustomAlert() {
    if (!customAlert) return;
    customAlert.classList.remove('active');
    setTimeout(() => {
        customAlert.classList.add('hidden');
        onAlertConfirmCallback = null;
    }, 250);
}

if (alertCloseBtn) {
    alertCloseBtn.addEventListener('click', () => {
        if (onAlertConfirmCallback) {
            const cb = onAlertConfirmCallback;
            onAlertConfirmCallback = null;
            cb();
        }
        closeCustomAlert();
    });
}

if (alertCancelBtn) {
    alertCancelBtn.addEventListener('click', closeCustomAlert);
}

if (customAlert) {
    customAlert.addEventListener('click', (e) => {
        if (e.target === customAlert) {
            closeCustomAlert();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && customAlert && customAlert.classList.contains('active')) {
        closeCustomAlert();
    }
});

// Theme Switcher Elements
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
let currentTheme = 'dark';

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    loadSavedCustomerInfo();
    setupEventListeners();

    // Parse fallback menu data immediately so all items render INSTANTLY
    if (typeof FALLBACK_MENU_DATA !== 'undefined') {
        parseFullData(FALLBACK_MENU_DATA);
        switchDataset('full');
    }

    try {
        await loadDatasets();
        switchDataset('full'); // Refresh if live fetch succeeded
    } catch (e) {
        console.log('Using embedded menu dataset');
    }
});

function initTheme() {
    try {
        const savedTheme = localStorage.getItem('abu_eyad_theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('dark');
        }
    } catch (e) {
        setTheme('dark');
    }
}

function setTheme(themeName) {
    currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    try {
        localStorage.setItem('abu_eyad_theme', themeName);
    } catch (e) { }

    if (themeIcon && themeText) {
        if (themeName === 'light') {
            themeIcon.className = 'fa-solid fa-moon';
            themeText.innerText = 'المظهر الناري';
        } else {
            themeIcon.className = 'fa-solid fa-sun';
            themeText.innerText = 'المظهر الأبيض';
        }
    }
}

function toggleTheme() {
    if (currentTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

function loadSavedCustomerInfo() {
    try {
        if (custNameInput && localStorage.getItem('abu_eyad_cust_name')) {
            custNameInput.value = localStorage.getItem('abu_eyad_cust_name');
        }
        if (custPhoneInput && localStorage.getItem('abu_eyad_cust_phone')) {
            custPhoneInput.value = localStorage.getItem('abu_eyad_cust_phone');
        }
        if (custAddressInput && localStorage.getItem('abu_eyad_cust_address')) {
            custAddressInput.value = localStorage.getItem('abu_eyad_cust_address');
        }
    } catch (e) {
        console.log('localStorage access error:', e);
    }
}

function openMobileDrawer() {
    if (orderSummaryPanel) orderSummaryPanel.classList.add('drawer-open');
    if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.classList.remove('hidden');
        setTimeout(() => mobileDrawerBackdrop.classList.add('active'), 10);
    }
    document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
    if (orderSummaryPanel) orderSummaryPanel.classList.remove('drawer-open');
    if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.classList.remove('active');
        setTimeout(() => {
            mobileDrawerBackdrop.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

function setupEventListeners() {
    // Theme Switcher
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile Drawer Triggers
    if (openMobileDrawerBtn) {
        openMobileDrawerBtn.addEventListener('click', openMobileDrawer);
    }
    if (closeMobileDrawerBtn) {
        closeMobileDrawerBtn.addEventListener('click', closeMobileDrawer);
    }
    if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    // Dataset Switcher
    if (btnDsShawrma) {
        btnDsShawrma.addEventListener('click', () => switchDataset('shawrma'));
    }
    if (btnDsFull) {
        btnDsFull.addEventListener('click', () => switchDataset('full'));
    }

    // View Switcher
    if (btnViewPoster) {
        btnViewPoster.addEventListener('click', () => switchView('poster'));
    }
    if (btnViewInteractive) {
        btnViewInteractive.addEventListener('click', () => switchView('interactive'));
    }

    // Print / Export PDF
    if (btnPrint) {
        btnPrint.addEventListener('click', exportToPDF);
    }

    // Search
    if (menuSearchInput) {
        menuSearchInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (clearSearchBtn) {
                if (val) {
                    clearSearchBtn.classList.remove('hidden');
                } else {
                    clearSearchBtn.classList.add('hidden');
                }
            }
            filterInteractiveCatalog();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (menuSearchInput) menuSearchInput.value = '';
            clearSearchBtn.classList.add('hidden');
            filterInteractiveCatalog();
        });
    }

    // Cart
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            showCustomConfirm('هل أنت تأكد من رغبتك في تفريغ السلة وحذف جميع الأصناف المختارة؟', 'تفريغ السلة', () => {
                cart = [];
                updateCartUI();
            }, 'fa-solid fa-trash-can');
        });
    }

    if (btnWhatsappOrder) {
        btnWhatsappOrder.addEventListener('click', sendWhatsAppOrder);
    }
}

function exportToPDF() {
    const isInteractive = !interactiveView.classList.contains('hidden');
    document.body.classList.add('rendering-pdf');

    if (typeof html2pdf !== 'undefined') {
        posterView.classList.remove('hidden');

        const targetElem = document.querySelector('.poster-frame-fiery') || posterView;

        const opt = {
            margin: [2, 2, 2, 2],
            filename: `menu_abu_eyad_el_souri.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#0A0A0C',
                scrollY: 0,
                scrollX: 0,
                windowWidth: 1400
            },
            jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' },
            pagebreak: { mode: 'avoid-all' }
        };

        html2pdf().set(opt).from(targetElem).save().then(() => {
            document.body.classList.remove('rendering-pdf');
            if (isInteractive) {
                posterView.classList.add('hidden');
                interactiveView.classList.remove('hidden');
            }
        }).catch(err => {
            document.body.classList.remove('rendering-pdf');
            console.log('PDF generation error, falling back to window.print():', err);
            window.print();
            if (isInteractive) {
                posterView.classList.add('hidden');
                interactiveView.classList.remove('hidden');
            }
        });
    } else {
        document.body.classList.remove('rendering-pdf');
        window.print();
    }
}

// Load JSON data files dynamically
async function loadDatasets() {
    try {
        const fullRes = await fetch('menu data .json');
        if (fullRes.ok) {
            const rawFull = await fullRes.json();
            parseFullData(rawFull);
        }
    } catch (e) {
        console.log('Error loading menu data .json:', e);
    }

    try {
        const shawrmaRes = await fetch('shawrma_menu.json');
        if (shawrmaRes.ok) {
            const rawShawrma = await shawrmaRes.json();
            parseShawrmaData(rawShawrma);
        }
    } catch (e) {
        console.log('Error loading shawrma_menu.json:', e);
    }
}

function parseFullData(json) {
    const cats = [];
    const menuObj = json.menu || {};

    const processCatBlock = (key, category, isNested = false) => {
        if (!category) return;

        let items = [];
        let note = category.note || category.notes || category.description || '';
        let title = category.name || key;

        if (Array.isArray(category.items)) {
            items = category.items;
        } else if (category.name && category.price) {
            items = [{ name: category.name, price: category.price, description: category.description }];
        }

        if (items.length === 0) return;

        cats.push({
            id: key,
            title: title,
            note: note,
            items: items
        });
    };

    for (const [key, val] of Object.entries(menuObj)) {
        if (val.items || val.price) {
            processCatBlock(key, val);
        } else if (typeof val === 'object') {
            for (const [subKey, subVal] of Object.entries(val)) {
                if (typeof subVal === 'object') {
                    processCatBlock(subKey, subVal, true);
                }
            }
        }
    }

    fullMenuData = {
        restaurant: json.restaurant || "أبو إياد السوري (Abu Eyad El Souri)",
        tagline: json.slogan || json.tagline || "هيغير مفهوم الشاورما - نكهة سورية تكتب الحكاية",
        contact: json.contact || { phone: "01042822787 - 01042827982", whatsapp: "01212904055", messenger: "ابو اياد السوري" },
        location: json.location || { address: "مشتول السوق شارع السوق بجوار جمال شرف" },
        categories: cats
    };

    // Automatically build shawrmaData from fullMenuData categories
    const shawarmaCatIds = ['shawarma_abo_ayad', 'shawarma_meals', 'fatteh_abo_ayad', 'weights'];
    const shawarmaCats = cats.filter(c => shawarmaCatIds.includes(c.id) || c.id.includes('shawarma') || c.id.includes('fatteh'));
    shawrmaData = {
        restaurant: fullMenuData.restaurant,
        tagline: "منيو الشاورما والفتة الأشهى",
        contact: fullMenuData.contact,
        categories: shawarmaCats.length > 0 ? shawarmaCats : cats
    };
}

function parseShawrmaData(json) {
    if (!json) return;
    const cats = [];
    if (json.shawarma_sandwiches) {
        cats.push({
            id: 'shawarma_sandwiches',
            title: 'شاورما أبو إياد',
            items: json.shawarma_sandwiches
        });
    }
    if (json.shawarma_meals) {
        cats.push({
            id: 'shawarma_meals',
            title: 'وجبات الشاورما',
            note: 'تقدم مع بطاطس بوم فريت - ثومية - مخلل',
            items: json.shawarma_meals
        });
    }
    if (json.shawarma_fatteh) {
        cats.push({
            id: 'shawarma_fatteh',
            title: 'فتة الشاورما',
            note: 'تومية - عيش فتوش - أرز',
            items: json.shawarma_fatteh
        });
    }
    if (json.shawarma_weights) {
        cats.push({
            id: 'shawarma_weights',
            title: 'الأوزان والشاورما بالميزان',
            note: 'يقدم مع عيش سوري - بطاطس - ثومية - مخلل',
            items: json.shawarma_weights
        });
    }

    if (cats.length > 0) {
        shawrmaData = {
            restaurant: json.restaurant || "أبو إياد السوري",
            tagline: json.tagline || "الشاورما عندنا دلع بطن",
            contact: json.contact || { phone: "01042822787 - 01042827982", whatsapp: "01212904055", messenger: "ابو اياد السوري" },
            categories: cats
        };
    }
}

function switchDataset(dsName) {
    currentDataset = dsName;
    if (dsName === 'shawrma') {
        btnDsShawrma.classList.add('active');
        btnDsFull.classList.remove('active');
        activeData = shawrmaData || fullMenuData;
    } else {
        btnDsFull.classList.add('active');
        btnDsShawrma.classList.remove('active');
        activeData = fullMenuData || shawrmaData;
    }
    renderPosterView();
    renderInteractiveView();
}

function switchView(viewName) {
    if (viewName === 'poster') {
        btnViewPoster.classList.add('active');
        btnViewInteractive.classList.remove('active');
        posterView.classList.remove('hidden');
        interactiveView.classList.add('hidden');
        if (mobileCartBar) mobileCartBar.classList.add('hidden');
        closeMobileDrawer();
    } else {
        btnViewInteractive.classList.add('active');
        btnViewPoster.classList.remove('active');
        interactiveView.classList.remove('hidden');
        posterView.classList.add('hidden');
        if (mobileCartBar) mobileCartBar.classList.remove('hidden');
    }
}

// Render Poster View Categories
function renderPosterView() {
    if (!activeData || !activeData.categories) return;

    if (col1CategoriesContainer) col1CategoriesContainer.innerHTML = '';
    if (col2CategoriesContainer) col2CategoriesContainer.innerHTML = '';
    if (col3CategoriesContainer) col3CategoriesContainer.innerHTML = '';

    const col1Keys = ['sandwiches', 'shawarma_abo_ayad', 'sweet_sandwiches', 'kids_meal', 'boxes'];
    const col2Keys = ['fatteh_abo_ayad', 'broast_meals', 'ala_grill', 'weights'];
    const col3Keys = ['chicken_abo_ayad', 'extra', 'shawarma_meals', 'family_meals'];

    const renderCard = (cat, pillColorClass) => {
        const card = document.createElement('div');
        card.className = 'fiery-category-card';

        const hasSmallLarge = cat.items.some(i => i.small !== undefined || i.large !== undefined);
        const hasShamiSyrian = cat.items.some(i => i.shami !== undefined || i.syrian !== undefined);

        let sizeHeadersHTML = '';
        if (hasShamiSyrian || hasSmallLarge) {
            sizeHeadersHTML = `
                <div class="size-header-tags">
                    <span class="size-tag">وسط</span>
                    <span class="size-tag">كبير</span>
                </div>
            `;
        }

        let noteHTML = cat.note ? `<div class="card-note-box"><i class="fa-solid fa-circle-info"></i> ${cat.note}</div>` : '';

        let itemsHTML = '';
        cat.items.forEach(item => {
            let priceColHTML = '';
            const catHasSizes = hasShamiSyrian || hasSmallLarge;

            if (item.price !== undefined && item.small === undefined && item.large === undefined && item.shami === undefined && item.syrian === undefined) {
                priceColHTML = `<td class="fiery-price-cell" colspan="${catHasSizes ? 2 : 1}"><span class="fiery-price-badge single-price">${item.price} ج</span></td>`;
            } else if (item.shami !== undefined || item.syrian !== undefined) {
                const shamiVal = item.shami !== undefined ? `${item.shami} ج` : '-';
                const syrianVal = item.syrian !== undefined ? `${item.syrian} ج` : '-';
                priceColHTML = `
                    <td class="fiery-price-cell"><span class="fiery-price-badge">${shamiVal}</span></td>
                    <td class="fiery-price-cell"><span class="fiery-price-badge">${syrianVal}</span></td>
                `;
            } else if (item.small !== undefined || item.large !== undefined) {
                const smallVal = item.small !== undefined ? `${item.small} ج` : '-';
                const largeVal = item.large !== undefined ? `${item.large} ج` : '-';
                priceColHTML = `
                    <td class="fiery-price-cell"><span class="fiery-price-badge">${smallVal}</span></td>
                    <td class="fiery-price-cell"><span class="fiery-price-badge">${largeVal}</span></td>
                `;
            } else {
                priceColHTML = `<td class="fiery-price-cell" colspan="${catHasSizes ? 2 : 1}"><span class="fiery-price-badge single-price">-</span></td>`;
            }

            const descText = item.description ? `<span class="fiery-item-desc">${item.description}</span>` : '';

            itemsHTML += `
                <tr class="fiery-item-row">
                    <td class="fiery-item-name">
                        ${item.name}
                        ${descText}
                    </td>
                    ${priceColHTML}
                </tr>
            `;
        });

        card.innerHTML = `
            <div class="fiery-card-header">
                <span class="${pillColorClass}">
                    <i class="fa-solid fa-fire"></i> ${cat.title}
                </span>
                ${sizeHeadersHTML}
            </div>
            ${noteHTML}
            <table class="fiery-table">
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>
        `;

        return card;
    };

    // Maps for fast category lookup
    const catMap = new Map();
    activeData.categories.forEach(cat => catMap.set(cat.id, cat));

    // Render Col 1 (Right in RTL - under Hero Box)
    col1Keys.forEach(key => {
        if (catMap.has(key) && col1CategoriesContainer) {
            col1CategoriesContainer.appendChild(renderCard(catMap.get(key), 'category-pill-red'));
        }
    });

    // Render Col 2 (Middle in RTL)
    col2Keys.forEach(key => {
        if (catMap.has(key) && col2CategoriesContainer) {
            col2CategoriesContainer.appendChild(renderCard(catMap.get(key), 'category-pill-orange'));
        }
    });

    // Render Col 3 (Left in RTL)
    col3Keys.forEach(key => {
        if (catMap.has(key) && col3CategoriesContainer) {
            col3CategoriesContainer.appendChild(renderCard(catMap.get(key), 'category-pill-red'));
        }
    });

    // Render any remaining fallback categories into Col 3
    activeData.categories.forEach(cat => {
        if (!col1Keys.includes(cat.id) && !col2Keys.includes(cat.id) && !col3Keys.includes(cat.id)) {
            if (col3CategoriesContainer) {
                col3CategoriesContainer.appendChild(renderCard(cat, 'category-pill-orange'));
            }
        }
    });
}

// Render Interactive View
function renderInteractiveView() {
    renderCategoryPills();
    renderInteractiveCatalog();
    updateCartUI();
}

function renderCategoryPills() {
    interactiveCategoryPills.innerHTML = '';
    if (!activeData || !activeData.categories) return;

    const allPill = document.createElement('button');
    allPill.className = `cat-pill-btn ${activeCategoryFilter === 'all' ? 'active' : ''}`;
    allPill.innerText = 'الكل';
    allPill.addEventListener('click', () => {
        activeCategoryFilter = 'all';
        renderCategoryPills();
        filterInteractiveCatalog();
    });
    interactiveCategoryPills.appendChild(allPill);

    activeData.categories.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = `cat-pill-btn ${activeCategoryFilter === cat.id ? 'active' : ''}`;
        pill.innerText = cat.title;
        pill.addEventListener('click', () => {
            activeCategoryFilter = cat.id;
            renderCategoryPills();
            filterInteractiveCatalog();
        });
        interactiveCategoryPills.appendChild(pill);
    });
}

function renderInteractiveCatalog() {
    interactiveItemsCatalog.innerHTML = '';
    filterInteractiveCatalog();
}

function filterInteractiveCatalog() {
    interactiveItemsCatalog.innerHTML = '';
    if (!activeData || !activeData.categories) return;

    const query = menuSearchInput.value.toLowerCase().trim();

    activeData.categories.forEach(cat => {
        if (activeCategoryFilter !== 'all' && activeCategoryFilter !== cat.id) return;

        cat.items.forEach(item => {
            const matchesQuery = item.name.toLowerCase().includes(query) || (item.description && item.description.toLowerCase().includes(query));
            if (!matchesQuery) return;

            const card = document.createElement('div');
            card.className = 'interactive-item-card';

            let priceOptionsHTML = '';

            // 1. Single price option
            if (item.price !== undefined) {
                priceOptionsHTML += `
                    <div class="price-option-row">
                        <span class="opt-label">${item.name}</span>
                        <span class="opt-price">${item.price} ج.م</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${escapeQuotes(item.name)}', ${item.price})">+</button>
                    </div>
                `;
            }

            // 2. Small size option
            if (item.small !== undefined) {
                priceOptionsHTML += `
                    <div class="price-option-row">
                        <span class="opt-label">${item.name} (وسط)</span>
                        <span class="opt-price">${item.small} ج.م</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${escapeQuotes(item.name)} (وسط)', ${item.small})">+</button>
                    </div>
                `;
            }

            // 3. Large size option
            if (item.large !== undefined) {
                priceOptionsHTML += `
                    <div class="price-option-row">
                        <span class="opt-label">${item.name} (كبير)</span>
                        <span class="opt-price">${item.large} ج.م</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${escapeQuotes(item.name)} (كبير)', ${item.large})">+</button>
                    </div>
                `;
            }

            // 4. Shami size option
            if (item.shami !== undefined) {
                priceOptionsHTML += `
                    <div class="price-option-row">
                        <span class="opt-label">${item.name} (وسط)</span>
                        <span class="opt-price">${item.shami} ج.م</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${escapeQuotes(item.name)} (وسط)', ${item.shami})">+</button>
                    </div>
                `;
            }

            // 5. Syrian size option
            if (item.syrian !== undefined) {
                priceOptionsHTML += `
                    <div class="price-option-row">
                        <span class="opt-label">${item.name} (كبير)</span>
                        <span class="opt-price">${item.syrian} ج.م</span>
                        <button class="add-to-cart-btn" onclick="addToCart('${escapeQuotes(item.name)} (كبير)', ${item.syrian})">+</button>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-title-area">
                    <h4>${item.name}</h4>
                    <p>${item.description || cat.note || cat.title}</p>
                </div>
                <div class="card-price-add-area">
                    ${priceOptionsHTML}
                </div>
            `;

            interactiveItemsCatalog.appendChild(card);
        });
    });

    if (interactiveItemsCatalog.children.length === 0) {
        interactiveItemsCatalog.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #9CA3AF;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 32px; margin-bottom: 12px;"></i>
                <p>لم يتم العثور على نتائج تطابق بحثك</p>
            </div>
        `;
    }
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
}

// Cart Management
window.addToCart = function (itemName, price) {
    const existing = cart.find(i => i.name === itemName);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name: itemName, price: price, qty: 1 });
    }
    updateCartUI();
};

window.changeCartQty = function (itemName, delta) {
    const item = cart.find(i => i.name === itemName);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== itemName);
        }
    }
    updateCartUI();
};

function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let totalQty = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-utensils empty-icon"></i>
                <p>السلة فارغة</p>
                <span>اضغط على + لإضافة أصناف لطلبك</span>
            </div>
        `;
        btnWhatsappOrder.classList.add('disabled');
    } else {
        btnWhatsappOrder.classList.remove('disabled');

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            totalQty += item.qty;

            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <span>${item.qty} × ${item.price} = ${itemTotal} ج.م</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeCartQty('${escapeQuotes(item.name)}', -1)">-</button>
                    <span style="font-weight: bold; font-size: 14px;">${item.qty}</span>
                    <button class="qty-btn" onclick="changeCartQty('${escapeQuotes(item.name)}', 1)">+</button>
                </div>
            `;
            cartItemsList.appendChild(row);
        });
    }

    cartTotalPrice.innerText = `${total} ج.م`;
    if (mobileCartCount) mobileCartCount.innerText = totalQty;
    if (mobileCartTotal) mobileCartTotal.innerText = `${total} ج.م`;
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showCustomAlert('السلة فارغة! يرجى إضافة بعض الأصناف الشهية إلى سلتك أولاً.', 'السلة فارغة', 'fa-solid fa-basket-shopping');
        return;
    }

    const name = custNameInput ? custNameInput.value.trim() : '';
    const phoneNum = custPhoneInput ? custPhoneInput.value.trim() : '';
    const address = custAddressInput ? custAddressInput.value.trim() : '';
    const notes = custNotesInput ? custNotesInput.value.trim() : '';

    // Validation
    let hasError = false;
    if (!name) {
        if (custNameInput) {
            custNameInput.classList.add('input-error');
            custNameInput.focus();
        }
        hasError = true;
    } else if (custNameInput) {
        custNameInput.classList.remove('input-error');
    }

    if (!address) {
        if (custAddressInput) {
            custAddressInput.classList.add('input-error');
            if (!hasError) custAddressInput.focus();
        }
        hasError = true;
    } else if (custAddressInput) {
        custAddressInput.classList.remove('input-error');
    }

    if (hasError) {
        showCustomAlert('يرجى كتابة الاسم الكريم وعنوان التوصيل بالتفصيل لنتمكن من إرسال طلبك عبر الواتساب!', 'بيانات التوصيل مطلوبة', 'fa-solid fa-user-pen');
        return;
    }

    // Save to localStorage for future orders
    try {
        localStorage.setItem('abu_eyad_cust_name', name);
        localStorage.setItem('abu_eyad_cust_phone', phoneNum);
        localStorage.setItem('abu_eyad_cust_address', address);
    } catch (e) {
        console.log('localStorage save error:', e);
    }

    // Destination phone number (Abu Eyad El Souri WhatsApp)
    let rawPhone = (activeData && activeData.contact && activeData.contact.whatsapp) ? activeData.contact.whatsapp.replace(/[^0-9]/g, '') : '01212904055';
    let targetPhone = rawPhone;
    if (rawPhone.startsWith('20')) {
        targetPhone = rawPhone;
    } else if (rawPhone.startsWith('0')) {
        targetPhone = '20' + rawPhone.substring(1);
    } else {
        targetPhone = '20' + rawPhone;
    }

    let text = `*طلب جديد - مطعم أبو إياد السوري*\n`;
    text += `---------------------------------\n`;
    text += `*اسم العميل:* ${name}\n`;
    if (phoneNum) text += `*رقم التواصل:* ${phoneNum}\n`;
    text += `*العنوان والمنطقة:* ${address}\n`;
    if (notes) text += `*ملاحظات:* ${notes}\n`;
    text += `---------------------------------\n`;
    text += `*تفاصيل أصناف الطلب:*\n\n`;

    let total = 0;
    cart.forEach((item, idx) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        text += `${idx + 1}. *${item.name}*\n   • الكمية: ${item.qty} × ${item.price} = ${itemTotal} ج.م\n`;
    });

    text += `\n---------------------------------\n`;
    text += `*المجموع الإجمالي:* *${total} ج.م*\n`;
    text += `🛵 *(ستتم إضافة رسوم التوصيل حسب المنطقة)*\n`;
    text += `---------------------------------\n`;
    text += `شكراً لاختياركم مطعم أبو إياد السوري!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodedText}`, '_blank');
}
