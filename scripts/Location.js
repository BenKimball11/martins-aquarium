/**
 *  Fish which renders individual fish objects as HTML
 */
export const Location = (location) => {
    return `    
        <section class>
        <div><img class="location__image image--card" src="${location.image}" alt=""></div>
        <div class="location__desc">${location.desc}</div>
        </section>
    `
}