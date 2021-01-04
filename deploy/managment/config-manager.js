export default class Config {
    constructor(settings) {
        this.settings = settings
    }

    async $title(titleContent) {
        const title = await document.createElement("title")
        const content = await document.createTextNode(titleContent)
        await title.appendChild(content)

        if (titleContent !== undefined) {
            document.head.appendChild(title)
        } else {
            document.head.innerHTML += (`<title> Visage App </title>`)
        }
    }

    async $links(links) {
        for (let i in links) {
            const rel = await links[i].rel
            const href = await links[i].href
            const link = await document.createElement("link")
            await link.setAttribute("rel", rel)
            await link.setAttribute("href", href)

            document.head.appendChild(link)
        }
    }

    async $styles(styles) {
        for (let i in styles) {
            const rel = styles[i].rel
            const fileName = styles[i].fileName
            const link = await document.createElement("link")
            await link.setAttribute("rel", rel)
            await link.setAttribute("href", `../src/styles/${fileName}`)

            document.head.appendChild(link)
        }
    }

    async configManager() {
        const { settings } = await this

        this.$title(settings.title)
        this.$styles(settings.styles)
        this.$links(settings.links)
    }
}