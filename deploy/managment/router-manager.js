import Visax from '../src/store/index.js' // import: visax
import App from '../src/index.js' // import: index.js create app

export default class Router {
    constructor(roots, fooList) {
        this.roots = roots
        this.fooList = fooList
        this.defaultPage = null
    }

    getPathName = async () => await window.location.pathname // location pathname pull

    RouterElementManager() {
        document.querySelectorAll('visage-link').forEach(el => {
            el.addEventListener('click', () => {
                const path = el.getAttribute('path')
                
                window.history.pushState({}, '', path)
                this.updateRouter()
            })
        })
    }

    async updateRouter() {
        const { roots, getPathName } = this // roots array and getPathName method
        const { state, actions } = Visax // visax content (state and actions)
        // DOM for VisageRouter tag
        const Router = document.querySelector('VisageRouter')
        const pathName = await getPathName()
        let defaultCounter = 0

        for (let count in roots) {
            // path cotnent
            const path = await roots[count].path
            // page
            const page = await roots[count].page
            
            if (path === pathName) {
                const { html, afterLoad } = await page({state, actions})

                // page print
                Router.innerHTML = await html
                // page start afterLoad
                afterLoad !== undefined ? afterLoad() : null
                
                // nav-link add click event
                this.RouterElementManager()
                
                // foo create state values
                this.fooList.map(foo => foo.state = foo.createFoo(foo.state))
                
                break;
            } else {
                defaultCounter++
            }
        }

        if (defaultCounter >= roots.length) {
            const { html, afterLoad } = await this.defaultPage({state, actions})
            Router.innerHTML =  html
            afterLoad !== undefined ? afterLoad() : null
        }
    }

    async createRouter(defaultPage) {
        this.defaultPage = defaultPage
        const { roots, getPathName } = this
        const { state, actions } = await Visax
        let defaultCounter = 0

        for (let count in roots) {
            const path = await roots[count].path
            const page = await roots[count].page
            const pathName = await getPathName()

            if (path === pathName) {

                await App.VisageRenderDOM(
                    document.querySelector("VisageRenderDOM"),
                    page({state, actions})
                )

                this.RouterElementManager()

                this.fooList.map(foo => foo.state = foo.createFoo(foo.state))

                break;
            } else {
                defaultCounter++
            }
        }

        if (defaultCounter >= roots.length) {
            App.VisageRenderDOM(
                document.querySelector("VisageRenderDOM"),
                defaultPage()
            )
        }
    }
}