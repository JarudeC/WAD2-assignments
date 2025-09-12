document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dynamic typing effect for hero title
    const titleElement = document.querySelector('.hero-section h1');
    if (titleElement) {
        const targetText = "Hi, I'm Jared";
        titleElement.innerHTML = '<span class="typing-cursor">|</span>';
        
        let charIndex = 0;
        const typewriter = setInterval(() => {
            if (charIndex < targetText.length) {
                if (charIndex < 8) {
                    // Typing "Hi, I'm "
                    titleElement.innerHTML = `${targetText.slice(0, charIndex + 1)}<span class="typing-cursor">|</span>`;
                } else {
                    // Typing "Jared" in yellow
                    const beforeJared = targetText.slice(0, 8);
                    const jaredPart = targetText.slice(8, charIndex + 1);
                    titleElement.innerHTML = `${beforeJared}<span class="text-warning">${jaredPart}</span><span class="typing-cursor">|</span>`;
                }
                charIndex++;
            } else {
                titleElement.innerHTML = 'Hi, I\'m <span class="text-warning">Jared</span>';
                clearInterval(typewriter);
            }
        }, 150);
    }

    // Interactive counter animation for skill badges
    const skillBadges = document.querySelectorAll('.badge-custom');
    const animateCounters = () => {
        skillBadges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.transform = 'scale(1.1)';
                badge.style.transition = 'transform 0.3s ease';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
            }, index * 100);
        });
    };

    // Trigger counter animation when about section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Interactive travel destination cards with click effects
    const destinationCards = document.querySelectorAll('#destinations .card-custom');
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const countryBadge = this.querySelector('.badge-custom');
            if (countryBadge) {
                // Create a temporary notification
                const notification = document.createElement('div');
                notification.className = 'travel-notification';
                notification.innerHTML = `
                    <i class="fas fa-plane"></i>
                    <span>Added to travel wishlist!</span>
                `;
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #28a745, #20c997);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 25px;
                    font-weight: 600;
                    box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
                    z-index: 1000;
                    transform: translateX(100%);
                    transition: transform 0.5s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                `;
                
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);
                
                // Animate out and remove
                setTimeout(() => {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 3000);
                
                // Add pulse effect to card
                this.style.animation = 'pulse 0.6s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 600);
            }
        });
    });

    // Interactive form validation with real-time feedback
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        // Real-time validation feedback
        const addValidationFeedback = (input, isValid, message) => {
            input.classList.remove('is-valid', 'is-invalid');
            let feedback = input.nextElementSibling;
            if (feedback && feedback.classList.contains('feedback-message')) {
                feedback.remove();
            }
            
            if (isValid) {
                input.classList.add('is-valid');
            } else {
                input.classList.add('is-invalid');
                const feedbackDiv = document.createElement('div');
                feedbackDiv.className = 'feedback-message text-danger small mt-1';
                feedbackDiv.textContent = message;
                input.parentNode.insertBefore(feedbackDiv, input.nextSibling);
            }
        };

        nameInput.addEventListener('input', function() {
            const isValid = this.value.trim().length >= 2;
            addValidationFeedback(this, isValid, 'Name must be at least 2 characters');
        });

        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(this.value);
            addValidationFeedback(this, isValid, 'Please enter a valid email address');
        });

        messageInput.addEventListener('input', function() {
            const isValid = this.value.trim().length >= 10;
            addValidationFeedback(this, isValid, 'Message must be at least 10 characters');
        });

        // Form submission with animation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if all fields are valid
            const nameValid = nameInput.value.trim().length >= 2;
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
            const messageValid = messageInput.value.trim().length >= 10;
            
            if (nameValid && emailValid && messageValid) {
                // Success animation
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                submitBtn.classList.remove('btn-primary');
                submitBtn.classList.add('btn-success');
                submitBtn.disabled = true;
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
                    submitBtn.classList.remove('btn-success');
                    submitBtn.classList.add('btn-primary');
                    submitBtn.disabled = false;
                    
                    // Clear validation classes
                    document.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                        el.classList.remove('is-valid', 'is-invalid');
                    });
                    document.querySelectorAll('.feedback-message').forEach(el => el.remove());
                }, 3000);
            }
        });
    }

    // Easter egg - Konami Code implementation
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length && 
            konamiCode.every((code, index) => code === konamiSequence[index])) {
            
            // Easter egg activated!
            const easterEgg = document.createElement('div');
            easterEgg.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    color: white;
                    padding: 30px;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    z-index: 9999;
                    font-size: 1.2em;
                    font-weight: bold;
                    animation: bounce 1s infinite;
                ">
                    <div>🎉 Konami Code Activated! 🎉</div>
                    <div style="margin-top: 15px; font-size: 0.9em;">
                        You found the secret! Now you're a true explorer! ✈️
                    </div>
                </div>
            `;
            document.body.appendChild(easterEgg);
            
            // Add bounce animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    40% { transform: translate(-50%, -50%) translateY(-10px); }
                    60% { transform: translate(-50%, -50%) translateY(-5px); }
                }
            `;
            document.head.appendChild(style);
            
            // Remove after 5 seconds
            setTimeout(() => {
                document.body.removeChild(easterEgg);
                document.head.removeChild(style);
            }, 5000);
            
            konamiCode = [];
        }
    });
});

// Add CSS for typing cursor animation
const style = document.createElement('style');
style.textContent = `
    .typing-cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);