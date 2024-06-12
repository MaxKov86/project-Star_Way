
export default function boardBackground(number) {
    const width = window.innerWidth;
    const isRetina = window.devicePixelRatio > 1
    let screen;


    if (width >= 768 && width < 1440) {
        screen = 'tablet';
    } else if (width >= 1440) {
        screen = 'desktop';
    } else {
        screen = 'phone';
    }

    return `https://res.cloudinary.com/daqlrgzqj/image/upload/task-bg-${screen}-${number}${isRetina ? "_2x" : ''}.jpg`

}