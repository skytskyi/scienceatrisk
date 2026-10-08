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

// "Popular requests" on the search screen: shift the whole block right so the
// longest row of tags ends exactly at the right edge of the content.
// A wrapping flex row never shrinks to its widest line, so this can't be done
// with CSS alone; we measure the tags and move the block with a transform
// (a transform doesn't change the width, so the tags don't re-wrap).
(function () {
    var block = document.querySelector('.popular-requests');
    var wrapper = block && block.querySelector('.popular-requests__wrapper');
    if (!block || !wrapper) return;

    var align = function () {
        block.style.transform = '';
        if (window.innerWidth < 768) return;

        var tags = wrapper.children;
        if (!tags.length) return;

        var maxRight = 0;
        for (var i = 0; i < tags.length; i++) {
            maxRight = Math.max(maxRight, tags[i].getBoundingClientRect().right);
        }
        var shift = wrapper.getBoundingClientRect().right - maxRight;
        if (shift > 0) block.style.transform = 'translateX(' + shift + 'px)';
    };

    window.addEventListener('resize', align);
    window.addEventListener('load', align);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    align();
})();
