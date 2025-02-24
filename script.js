
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
        if (isInViewport(bar) && !bar.classList.contains('animated')) {
            bar.style.width = bar.getAttribute('data-width');
            bar.classList.add('animated');
        }
    });
}

document.addEventListener('scroll', animateProgressBars);
document.addEventListener('DOMContentLoaded', animateProgressBars);
