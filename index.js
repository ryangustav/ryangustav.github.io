const startDate = new Date('2025-10-12T19:35:15');
const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function calculateTimeElapsed() {
    const now = new Date();
    const timeDiff = now - startDate;
    
    const years = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    const monthsInYear = Math.floor((timeDiff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const daysInMonth = Math.floor((timeDiff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hoursInDay = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutesInHour = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const secondsInMinute = Math.floor((timeDiff % (60 * 1000)) / 1000);
    
    return {
        years,
        months: monthsInYear,
        days: daysInMonth,
        hours: hoursInDay,
        minutes: minutesInHour,
        seconds: secondsInMinute
    };
}

function updateTimer() {
    const timeElapsed = calculateTimeElapsed();
    
    updateElementWithAnimation(yearsElement, timeElapsed.years);
    updateElementWithAnimation(monthsElement, timeElapsed.months);
    updateElementWithAnimation(daysElement, timeElapsed.days);
    updateElementWithAnimation(hoursElement, timeElapsed.hours);
    updateElementWithAnimation(minutesElement, timeElapsed.minutes);
    updateElementWithAnimation(secondsElement, timeElapsed.seconds);
}

function updateElementWithAnimation(element, newValue) {
    const currentValue = parseInt(element.textContent);
    
    if (currentValue !== newValue) {
        element.style.transform = 'scale(1.2)';
        element.style.color = '#ff6b6b';
        element.textContent = newValue;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.color = '#fff';
        }, 300);
    }
}

function handleScrollEffects() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop < windowHeight * 0.8;
        
        if (sectionVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
}

function addCardInteractivity() {
    const cards = document.querySelectorAll('.moment-card, .dream-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
        });
    });
}

function animateNumbers() {
    const timerItems = document.querySelectorAll('.timer-item');
    
    timerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

function typeWriterEffect() {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

function createFloatingParticles() {
    const heroSection = document.querySelector('.hero-section');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        heroSection.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function addRevealAnimation() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
    setInterval(updateTimer, 1000);
    
    window.addEventListener('scroll', function() {
        handleScrollEffects();
        handleParallax();
    });
    
    addCardInteractivity();
    animateNumbers();
    createFloatingParticles();
    addRevealAnimation();
    
    setTimeout(() => {
        handleScrollEffects();
    }, 100);
});

function addHeartbeatEffect() {
    const heart = document.querySelector('.heart-decoration');
    if (heart) {
        setInterval(() => {
            heart.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 200);
        }, 2000);
    }
}

window.addEventListener('load', function() {
    addHeartbeatEffect();
});

function addConfettiEffect() {
    const today = new Date();
    const startDateObj = new Date(startDate);
    
    if (today.getDate() === startDateObj.getDate() && 
        today.getMonth() === startDateObj.getMonth()) {
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 100);
        }
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]};
        left: ${Math.random() * 100}%;
        top: -10px;
        z-index: 1000;
        animation: confettiFall 3s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

addConfettiEffect();
