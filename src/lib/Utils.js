export default class Utils {
    constructor() {
        throw new Error('Static class cannot be instantiated');
    }

    static scrollToY(window, y, duration) {
        const position = window.pageYOffset;
        const speed = Math.abs(position - y) / duration;
        const isDown = position < y;
        let delay = 0;
        for (let i = position; isDown ? i <= y : i >= y; isDown ? i+=speed : i-=speed, ++delay) {
            setTimeout(function () {
                window.scrollTo(0, i);
            }, delay);
        }
        setTimeout(function () {
            window.scrollTo(0, y);
        }, delay + 1);
        // Utils.animateScroll(window, position, speed, 1, duration);
    }

    // static animateScroll(window, start, scrollAmount, step, lastStep, delay = 1) {
    //     const y = start + scrollAmount * step;
    //     window.scrollTo(0, y);
    //     if (step < lastStep) {
    //         setTimeout(function () {
    //             Utils.animateScroll(window, start, scrollAmount, step + 1, lastStep);
    //         }, delay);
    //     }
    // }
}