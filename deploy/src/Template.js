import { NavBar } from './components/nav-bar.js'
import { Footer } from './components/footer.js'
import { UpButton } from './components/up-button.js'

export const Template = (view) => {
    return {content: (/*html*/`
        <div class="template row p-0 m-0">
            <div class="col-12 p-0"> ${NavBar()} </div>
            <div id="up"></div>
            <VisageRouter class="mb-5 router">
                ${view}
            </VisageRouter>
            ${UpButton()}
            ${Footer()}
        </div>
    `), templateLoad: () => {}}
}