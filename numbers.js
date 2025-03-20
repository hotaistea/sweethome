document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".num");
    const speed = 200;

    const animateNumbers = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const updateCount = () => {
                const increment = target / speed;
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count);
                    setTimeout(updateCount, 10);
                } else {
                    counter.textContent = target;
                }
            };
            updateCount();
        });
    };

    const section = document.querySelector(".numbers");
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.disconnect();
            }
        });
    }, options);

    observer.observe(section);
});
