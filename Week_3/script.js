/* ==========================================
   FULL STACK WEB PROJECT - ES6 JAVASCRIPT
   SESSION 14 & 15 COURSE REQUIREMENTS
   ========================================== */

/* ==========================================
   1. STATE MANAGEMENT (SESSION 14)
   ========================================== */

// Score state management using const and let
const INITIAL_SCORE = 0;
let currentScore = INITIAL_SCORE;

// Function to update score
function updateScore(points) {
    currentScore += points;
    console.log(`Score updated to: ${currentScore}`);
    return currentScore;
}

/* ==========================================
   2. ARROW FUNCTION - RECEIPT GENERATION (SESSION 14)
   ========================================== */

/**
 * Arrow function to generate receipt with ES6 template literals
 * Demonstrates: arrow functions, template literals, calculations
 */
const generateReceipt = (price, tip) => {
    const tax = price * 0.1;
    const total = price + tax + tip;
    
    // Template literal with expressions
    const receipt = `
╔══════════════════════════════════╗
║         RECEIPT                  ║
╚══════════════════════════════════╝
Price:           $${price.toFixed(2)}
Tax (10%):       $${tax.toFixed(2)}
Tip:             $${tip.toFixed(2)}
══════════════════════════════════
TOTAL:           $${total.toFixed(2)}
══════════════════════════════════
Thank you for your purchase!
    `;
    return receipt;
};

// Function to display receipt
function demoReceipt() {
    const price = 50;
    const tip = 10;
    const receipt = generateReceipt(price, tip);
    
    const output = document.getElementById('demo-output');
    if (output) {
        output.textContent = receipt;
    }
    console.log(receipt);
}

/* ==========================================
   3. DESTRUCTURING (SESSION 14)
   ========================================== */

/**
 * Object Destructuring Example
 */
function demonstrateObjectDestructuring() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 28,
        city: 'New York'
    };

    // Destructure object
    const { name, email, age, city } = user;
    
    const result = `
Object Destructuring Example:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Original object:
{
  name: '${user.name}',
  email: '${user.email}',
  age: ${user.age},
  city: '${user.city}'
}

Destructured values:
name = ${name}
email = ${email}
age = ${age}
city = ${city}
    `;
    return result;
}

/**
 * Array Destructuring Example
 */
function demonstrateArrayDestructuring() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    
    // Destructure array
    const [first, second, third, ...rest] = colors;
    
    const result = `
Array Destructuring Example:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Original array: [${colors.join(', ')}]

Using destructuring:
first = ${first}
second = ${second}
third = ${third}
rest = [${rest.join(', ')}]
    `;
    return result;
}

function demoDestructuring() {
    const objectDemo = demonstrateObjectDestructuring();
    const arrayDemo = demonstrateArrayDestructuring();
    const combined = objectDemo + '\n\n' + arrayDemo;
    
    const output = document.getElementById('demo-output');
    if (output) {
        output.textContent = combined;
    }
    console.log(combined);
}

/* ==========================================
   4. SPREAD OPERATOR (SESSION 14)
   ========================================== */

// Friend arrays
const collegeFriends = ['Alice', 'Bob', 'Charlie', 'Diana'];
const workFriends = ['Eve', 'Frank', 'Grace', 'Henry'];

/**
 * Merge arrays using spread operator and add 'Me' at the beginning
 */
function mergePartyList() {
    // Spread operator to merge arrays and add 'Me'
    const partyList = ['Me', ...collegeFriends, ...workFriends];
    return partyList;
}

/**
 * Function with normal parameter and REST operator
 */
const planParty = (eventName, ...guests) => {
    const guestList = guests.join(', ');
    
    const result = `
Party Planning with REST Operator:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Event: ${eventName}
Total Guests: ${guests.length}

Guest List:
${guests.map((guest, index) => `${index + 1}. ${guest}`).join('\n')}

Special Attendees:
${guests.slice(0, 3).join(' | ')} and ${guests.length - 3} more...
    `;
    return result;
};

function demoSpreadOperator() {
    const partyList = mergePartyList();
    const partyDetails = planParty('Epic Tech Party', ...partyList);
    
    const output = document.getElementById('demo-output');
    if (output) {
        output.textContent = partyDetails;
    }
    console.log(partyDetails);
}

/* ==========================================
   5. PROMISES - PIZZA ORDERING (SESSION 14)
   ========================================== */

/**
 * Promise-based pizza ordering simulation
 * Demonstrates: Promise constructor, resolve, reject, setTimeout, .then(), .catch()
 */
function orderPizza(pizzaType = 'Margherita') {
    return new Promise((resolve, reject) => {
        console.log(`🍕 Preparing ${pizzaType} pizza...`);
        
        // Simulate pizza preparation with random success/failure
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.2; // 80% success rate
            
            if (isSuccessful) {
                const order = {
                    type: pizzaType,
                    size: 'Large',
                    status: 'Ready',
                    prepTime: '25 minutes',
                    temperature: '350°C'
                };
                resolve(order);
            } else {
                reject(new Error(`❌ Failed to prepare ${pizzaType} pizza. Please try again.`));
            }
        }, 2000);
    });
}

/**
 * Pizza ordering with proper error handling
 */
async function demoPizzaPromise() {
    const output = document.getElementById('demo-output');
    if (!output) return;
    
    output.textContent = '🍕 Initializing pizza order...\n⏳ Please wait...';
    
    try {
        const pizza = await orderPizza('Pepperoni');
        
        const result = `
Pizza Order Confirmation:
━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Pizza Type: ${pizza.type}
✓ Size: ${pizza.size}
✓ Status: ${pizza.status}
✓ Prep Time: ${pizza.prepTime}
✓ Oven Temp: ${pizza.temperature}

Your pizza is ready! 🍕
Enjoy your meal!
        `;
        output.textContent = result;
        console.log(pizza);
    } catch (error) {
        const errorMsg = `
Error Handling Demo:
━━━━━━━━━━━━━━━━━━━
${error.message}

Would you like to try another flavor?
        `;
        output.textContent = errorMsg;
        console.error(error);
    }
}

// Alternative: Using .then() and .catch()
function orderPizzaWithThenCatch() {
    return orderPizza('Vegetarian')
        .then(pizza => {
            return `✓ Pizza ready: ${pizza.type} - ${pizza.status}`;
        })
        .catch(error => {
            return `✗ Error: ${error.message}`;
        });
}

/* ==========================================
   6. KEYBOARD EVENTS - MOVABLE SQUARE (SESSION 15)
   ========================================== */

// Square position state
let squarePosition = {
    left: 0,
    top: 0
};

const MOVEMENT_STEP = 20;
const BOUNDARY_LIMIT = 1000;

/**
 * Move square based on arrow key input
 * Uses keyboard event listeners
 */
function initMovableSquare() {
    const square = document.getElementById('movable-square');
    const positionInfo = document.getElementById('position-info');
    
    if (!square) return;
    
    // Make square focusable
    square.setAttribute('tabindex', '0');
    square.style.position = 'relative';
    
    // Keyboard event listener
    function handleKeyPress(event) {
        const { key } = event;
        const currentLeft = squarePosition.left;
        const currentTop = squarePosition.top;
        
        switch(key) {
            case 'ArrowUp':
                squarePosition.top = Math.max(currentTop - MOVEMENT_STEP, -BOUNDARY_LIMIT);
                event.preventDefault();
                break;
            case 'ArrowDown':
                squarePosition.top = Math.min(currentTop + MOVEMENT_STEP, BOUNDARY_LIMIT);
                event.preventDefault();
                break;
            case 'ArrowLeft':
                squarePosition.left = Math.max(currentLeft - MOVEMENT_STEP, -BOUNDARY_LIMIT);
                event.preventDefault();
                break;
            case 'ArrowRight':
                squarePosition.left = Math.min(currentLeft + MOVEMENT_STEP, BOUNDARY_LIMIT);
                event.preventDefault();
                break;
            case 'r':
            case 'R':
                // Reset position
                squarePosition = { left: 0, top: 0 };
                break;
        }
        
        // Update square position
        square.style.left = `${squarePosition.left}px`;
        square.style.top = `${squarePosition.top}px`;
        
        // Update position display
        if (positionInfo) {
            positionInfo.textContent = `Position: (${squarePosition.left}, ${squarePosition.top}) | Press R to reset`;
        }
        
        console.log(`Square moved to: (${squarePosition.left}, ${squarePosition.top})`);
    }
    
    // Add event listener
    square.addEventListener('keydown', handleKeyPress);
    square.focus();
}

/* ==========================================
   7. MOUSE TRACKING - QUADRANT DETECTION (SESSION 15)
   ========================================== */

/**
 * Mouse tracking with 4 quadrant detection
 * Changes background color based on cursor position
 */
function initQuadrantTracking() {
    const quadrantBox = document.getElementById('quadrant-box');
    
    if (!quadrantBox) return;
    
    // Define colors for each quadrant
    const quadrantColors = {
        topLeft: '#FF6B6B',     // Red
        topRight: '#4ECDC4',    // Teal
        bottomLeft: '#FFE66D',  // Yellow
        bottomRight: '#95E1D3'  // Mint
    };
    
    const quadrantNames = {
        topLeft: 'Top Left Quadrant',
        topRight: 'Top Right Quadrant',
        bottomLeft: 'Bottom Left Quadrant',
        bottomRight: 'Bottom Right Quadrant'
    };
    
    /**
     * Determine which quadrant the cursor is in
     */
    function getQuadrant(mouseX, mouseY, boxRect) {
        const centerX = boxRect.left + boxRect.width / 2;
        const centerY = boxRect.top + boxRect.height / 2;
        
        if (mouseX < centerX && mouseY < centerY) {
            return 'topLeft';
        } else if (mouseX >= centerX && mouseY < centerY) {
            return 'topRight';
        } else if (mouseX < centerX && mouseY >= centerY) {
            return 'bottomLeft';
        } else {
            return 'bottomRight';
        }
    }
    
    // Mouse move event listener
    quadrantBox.addEventListener('mousemove', (event) => {
        const boxRect = quadrantBox.getBoundingClientRect();
        const quadrant = getQuadrant(event.clientX, event.clientY, boxRect);
        
        // Update background color
        quadrantBox.style.backgroundColor = quadrantColors[quadrant];
        
        // Update text content
        quadrantBox.textContent = `🎯 ${quadrantNames[quadrant]}\n(${Math.round(event.clientX - boxRect.left)}, ${Math.round(event.clientY - boxRect.top)})`;
    });
    
    // Reset on mouse leave
    quadrantBox.addEventListener('mouseleave', () => {
        quadrantBox.style.backgroundColor = '#ecf0f1';
        quadrantBox.textContent = 'Move mouse here';
    });
}

/* ==========================================
   8. E-COMMERCE FILTER FUNCTIONALITY
   ========================================== */

/**
 * Filter products based on user selections
 */
function filterProducts() {
    const priceRange = parseFloat(document.getElementById('priceRange')?.value || 500);
    const color = document.getElementById('colorSelect')?.value || '';
    const brand = document.getElementById('brandSelect')?.value || '';
    const rating = document.querySelector('input[name="rating"]:checked')?.value || '';
    
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    products.forEach(product => {
        const productPrice = parseFloat(product.dataset.price);
        const productColor = product.dataset.color;
        const productBrand = product.dataset.brand;
        const productRating = product.dataset.rating;
        
        // Check if product matches all active filters
        const matchesPrice = productPrice <= priceRange;
        const matchesColor = !color || productColor === color;
        const matchesBrand = !brand || productBrand === brand;
        const matchesRating = !rating || productRating >= rating;
        
        const isVisible = matchesPrice && matchesColor && matchesBrand && matchesRating;
        
        product.style.display = isVisible ? 'block' : 'none';
        if (isVisible) visibleCount++;
    });
    
    // Update product count
    const countElement = document.getElementById('productCount');
    if (countElement) {
        countElement.textContent = visibleCount;
    }
}

/**
 * Reset all filters
 */
function resetFilters() {
    // Reset range slider
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 500;
        document.getElementById('priceValue').textContent = '500';
    }
    
    // Reset dropdowns
    const colorSelect = document.getElementById('colorSelect');
    if (colorSelect) colorSelect.value = '';
    
    const brandSelect = document.getElementById('brandSelect');
    if (brandSelect) brandSelect.value = '';
    
    // Reset radio buttons
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        if (radio.value === '') radio.checked = true;
    });
    
    // Show all products
    filterProducts();
}

/**
 * Add product to cart (demonstration)
 */
function addToCart(productName, price) {
    const message = `✓ Added "${productName}" ($${price}) to cart!`;
    alert(message);
    console.log(message);
}

/**
 * Subscribe to newsletter
 */
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    event.target.reset();
}

/* ==========================================
   9. FORM VALIDATION & SUBMISSION
   ========================================== */

/**
 * Validate and handle sign-in form submission
 */
function handleSignIn(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const remember = document.getElementById('signin-remember').checked;
    
    // Basic validation
    if (!email || !password) {
        alert('❌ Please fill in all fields');
        return;
    }
    
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters');
        return;
    }
    
    // Success message
    const message = document.getElementById('signInMessage');
    if (message) {
        message.style.display = 'block';
        message.textContent = `✓ Welcome back, ${email}! You have been signed in successfully.`;
    }
    
    console.log(`Sign In: ${email}, Remember: ${remember}`);
    
    // Reset form after 2 seconds
    setTimeout(() => {
        if (message) message.style.display = 'none';
        document.getElementById('signInForm').reset();
    }, 3000);
}

/**
 * Validate and handle registration form submission
 */
function handleRegistration(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('reg-email').value;
    const category = document.getElementById('category').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(cb => cb.value);
    const expectations = document.getElementById('expectations').value;
    const terms = document.getElementById('terms').checked;
    
    // Validation
    if (!fullName || !email || !category) {
        alert('❌ Please fill in all required fields');
        return;
    }
    
    if (interests.length === 0) {
        alert('❌ Please select at least one area of interest');
        return;
    }
    
    if (!terms) {
        alert('❌ Please agree to the terms and conditions');
        return;
    }
    
    // Success message
    const message = document.getElementById('registrationMessage');
    if (message) {
        message.style.display = 'block';
        message.textContent = `✓ Registration successful! Welcome to Tantraz, ${fullName}! Check your email at ${email} for confirmation.`;
    }
    
    // Log registration data
    const registrationData = {
        fullName,
        email,
        category,
        tshirtSize: document.querySelector('input[name="tshirtSize"]:checked')?.value,
        interests,
        expectations,
        registeredAt: new Date().toLocaleString()
    };
    
    console.log('Registration Data:', registrationData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
        if (message) message.style.display = 'none';
        document.getElementById('registrationForm').reset();
    }, 3000);
}

/* ==========================================
   10. CHARACTER COUNTER FOR TEXTAREA
   ========================================== */

function initCharacterCounter() {
    const textarea = document.getElementById('expectations');
    const charCount = document.getElementById('charCount');
    
    if (!textarea || !charCount) return;
    
    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
    });
}

/* ==========================================
   11. PRICE RANGE SLIDER UPDATE
   ========================================== */

function initPriceRangeSlider() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    if (!priceRange || !priceValue) return;
    
    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
        filterProducts();
    });
}

/* ==========================================
   12. DROP-DOWN FILTER LISTENERS
   ========================================== */

function initFilterListeners() {
    const colorSelect = document.getElementById('colorSelect');
    const brandSelect = document.getElementById('brandSelect');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    
    if (colorSelect) {
        colorSelect.addEventListener('change', filterProducts);
    }
    
    if (brandSelect) {
        brandSelect.addEventListener('change', filterProducts);
    }
    
    ratingInputs.forEach(radio => {
        radio.addEventListener('change', filterProducts);
    });
}

/* ==========================================
   13. INITIALIZATION - DOM CONTENT LOADED
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Full Stack Web Project Loaded Successfully!');
    console.log('====== Available Features ======');
    console.log('✓ HTML5 Semantic Structure');
    console.log('✓ Responsive CSS with Media Queries');
    console.log('✓ ES6 JavaScript Features');
    console.log('✓ Interactive Events & DOM Manipulation');
    console.log('✓ Form Validation');
    console.log('✓ E-Commerce Filters');
    console.log('================================\n');

    // Initialize all interactive features
    initMovableSquare();
    initQuadrantTracking();
    initPriceRangeSlider();
    initFilterListeners();
    initCharacterCounter();

    // Log all available functions
    console.log('Available Functions:');
    console.log('- demoReceipt() - Calculate and show receipt');
    console.log('- demoDestructuring() - Show destructuring examples');
    console.log('- demoSpreadOperator() - Merge arrays with spread operator');
    console.log('- demoPizzaPromise() - Test Promise-based pizza ordering');
    console.log('- filterProducts() - Apply product filters');
    console.log('- resetFilters() - Reset all filters');
});

/* ==========================================
   14. ADDITIONAL UTILITIES
   ========================================== */

/**
 * Utility function to format currency
 */
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

/**
 * Utility function to validate email
 */
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Utility function for API call simulation
 */
const simulateAPICall = (data, delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            });
        }, delay);
    });
};

/**
 * Local Storage utilities
 */
const storageManager = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
};

console.log('✓ All utilities loaded and ready to use!');
