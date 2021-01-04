import { Header } from '../components/header.js'
import { RandomImages } from '../components/random-images.js'
import { HomePageMiddle } from '../components/home-page-middle.js'
import { PopUp } from '../components/pop-up.js'
import { Loader } from '../components/loader.js'
import { setCss } from '../static/tools.js'

export function Home() {
    return {
        html: (/*html*/`
            <div class="home-page">
                <div class="header row align-items-center mt-5 mr-0 p-0">
                    ${Header()}
                   
                </div>
                <div class="line"></div>

                <div class="random-images row m-0 p-0" id="home-page-middle">
                    ${RandomImages()}
                    
                    </div>
                    ${Loader()}
                    ${PopUp()}
                    ${HomePageMiddle()}
                   
            </div>
        `), afterLoad: () => {
            setTimeout(() => setCss(".loader", {
                /*transition: "0.4s",*/
                opacity: 0,
                visibility: "hidden",
            }), 3000)
        },
    }
}