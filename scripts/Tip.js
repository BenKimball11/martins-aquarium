/**
 *  Fish which renders individual fish objects as HTML
 */
export const Tip = (tip) => {
    return `
        <aside class="tip">
            <div class="tip__text">${tip.text}</div>
        </aside>
    `
}