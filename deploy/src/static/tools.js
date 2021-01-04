export const setHtml = (id, newContent) => {
    document.querySelectorAll(id).forEach(el => {
        el.innerHTML = typeof newContent === "function" ? newContent(el) : newContent
    })
}

export const addHtml = (id, newContent) => {
    document.querySelectorAll(id).forEach(el => {
        el.innerHTML += typeof newContent === "function" ? newContent(el) : newContent
    })
}

export const addText = (id, newContent) => {
    document.querySelectorAll(id).forEach(el => {
        el.innerText += typeof newContent === "function" ? newContent(el) : newContent
    })
}

export const setText = (id, newContent) => {
    document.querySelectorAll(id).forEach(el => {
        el.innerText = typeof newContent === "function" ? newContent(el) : newContent
    })
}

export const setCss = (id, cssContent) => {
    document.querySelectorAll(id).forEach(el => {
        const css = typeof cssContent === "function" ? cssContent(el) : cssContent

        for (const prop in css) {
            if (el.style[prop] !== undefined) {
                el.style[prop] = css[prop]
            } else {
                console.error(`No CSS keys worth ${prop}`)
            }
        }
    })
}

export const addEvent = (id, eventName, eventContent) => {
    document.querySelectorAll(id).forEach(el => {
        el.addEventListener(eventName, () => eventContent(el))
    })
}

export const get = (select) => document.querySelector(select)

export const getAll = (select) => document.querySelectorAll(select)

export const removeEl = (select) => document.querySelectorAll(select).forEach(el => el.remove())

export const setAttr = (select, attrName, attrValue) => {
    document.querySelectorAll(select).forEach(el => el.setAttribute(attrName, attrValue))
}