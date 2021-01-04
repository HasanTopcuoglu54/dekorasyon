export default class Foo {
    constructor(fooContent) {
        this.state = fooContent.state
        this.template = document.querySelector('VisageRenderDOM')
        this.methods = fooContent.methods
    }

    set set(setContent) {
        const dataValueNameAnId = this.state[setContent[1]].id
        const newValue = setContent[0]

        if (this.state[dataValueNameAnId] !== undefined) {
            this.state[dataValueNameAnId].value = newValue

            this.setInner(dataValueNameAnId, newValue)
            this.setAttrb(setContent)
        }
    }

    setInner(dataValueNameAnId, newValue) {
        this.template.querySelectorAll('*').forEach(i => {
            if (i.getAttribute('f:value') == dataValueNameAnId) {
                i.innerHTML = newValue
            }
        })
    }

    setAttrb(setContent) {
        const newValue = setContent[0]

        this.template.querySelectorAll('*').forEach(el => {
            el.getAttributeNames().map(a => {
                if (!a.search('f-')) {
                    const attrbName = a.replace('f-', '')

                    el.setAttribute(attrbName, newValue)
                }
            })
        })
    }

    createFoo(state) {
        const dataResult = {}

        for (const prop in state) {
            const name = prop
            const value = state[prop]

            dataResult[name] = {value, id: prop}

            this.template.querySelectorAll('*').forEach(i => {
                if (i.getAttribute('f:value') == prop) {
                    i.innerHTML = state[prop]
                }
            })

            this.template.querySelectorAll('FOO-VAR').forEach(el => {
                const res = el.textContent
                const start = res.indexOf('{') + 1
                const end = res.indexOf('}')
                const varName = res.substring(start, end).trim()

                if (state[varName] !== undefined) {
                    el.setAttribute('f:value', varName)
                    el.innerHTML = state[varName]
                }
            })

            this.template.querySelectorAll('*').forEach(el => {
                el.getAttributeNames().map(a => {
                    if (!a.search('f-')) {
                        const attrbName = a.replace('f-', '')
                        el.setAttribute(attrbName, state[el.getAttribute(`f-${attrbName}`)])
                    }
                })
            })

            this.template.querySelectorAll('input').forEach(el => {
                const nodeValue = el.getAttribute('f:value')
                if (nodeValue !== null) {
                    el.value = state[nodeValue]
                }
            })
        }

        return dataResult
    }
}