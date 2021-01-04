import Router from './router-manager.js'
import Config from './config-manager.js'
import settings from '../src/config.js'
import { Template } from '../src/Template.js'

export default class Visage {
    constructor(AppContent) {
        this.router = AppContent.router
        this.defaultPage = AppContent.defaultPage
        this.fooList = AppContent.fooList

        this.started()
    }

    async started() {
        await this.config(settings)
        await this.createRouter()
    }

    createRouter = () => new Router(this.router, this.fooList).createRouter(this.defaultPage)

    config = (settings) => new Config(settings).configManager()

    async VisageRenderDOM(root, node) {
        const { html, vex, afterLoad } = await node

        if (vex !== undefined) {
            const { content, templateLoad } = Template(vex)

            await root.appendChild(content)
            templateLoad()
        }
        else if (html !== undefined) {
            const { content, templateLoad } = Template(html)

            root.innerHTML = await content
            templateLoad !== undefined ? templateLoad() : null
            afterLoad !== undefined ? afterLoad() : null
        } else {
            console.error("html or vex object not found please return html value as object in your pages")
        }
    }
}