// Header logo: show "!!!" on the first screen and the full SC!ENCE AT R!SK! logo
// on every other screen. The fade itself is done in css/custom.css.
//
// Desktop (fullPage.js mode, >= 1024px): fullPage marks the destination section
// with .active as soon as a transition starts, so we switch right away instead
// of waiting for the sections to finish sliding.
// Mobile/tablet: regular scrolling, so we check whether the big logo is still
// on screen.
(function () {
    var header = document.querySelector('.header');
    var bigLogo = document.querySelector('.hero__logo');
    var firstSection = bigLogo && bigLogo.closest('.section');
    if (!header || !bigLogo || !firstSection) return;

    var isFullPage = function () {
        return document.body.getBoundingClientRect().width >= 1024 && window.innerHeight >= 500;
    };

    var update = function () {
        var onTop;
        if (isFullPage()) {
            onTop = firstSection.classList.contains('active');
        } else {
            var rect = bigLogo.getBoundingClientRect();
            onTop = rect.bottom > header.offsetHeight && rect.top < window.innerHeight;
        }
        header.classList.toggle('header--top', onTop);
    };

    new MutationObserver(update).observe(firstSection, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    update();
})();
