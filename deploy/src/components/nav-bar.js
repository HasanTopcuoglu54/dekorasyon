import { setCss } from '../static/tools.js'
import store from '../store/index.js'

export function NavBar() {
    $["navBarControl"] = function(mode) {
        setCss('.nav-bar-container', {
            opacity: mode ? "0" : "1",
            left: mode ? "-1em" : "0",
            visibility: mode ? "hidden" : "visible"
        })

        setCss('.nav-bar-shadow', {
            opacity: mode ? "0" : "0.4",
            visibility: mode ? "hidden" : "visible"
        })
    }

    return (/*html*/`
        <div class="nav-bar">
            <div class="right">
                <i class="material-icons menu-icon" onclick="$.navBarControl(false)"> menu </i>

                <div class="nav-bar-shadow" onclick="$.navBarControl(true)"></div>
                <div class="nav-bar-container col-xl-6 col-md-5 col-sm-12">
                    <i class="material-icons close-icon" onclick="$.navBarControl(true)"> close </i>
                    <div>
                        <div class="label" onclick="$.navBarControl(true)">
                            <i class="material-icons"> home </i>
                            <visage-link path="/">Anasayfa</visage-link>
                        </div>
                    </div>
                    <div>
                        <div class="label" onclick="$.navBarControl(true)">
                            <i class="material-icons"> event_seat </i>
                            <visage-link path="/mobilyalar">Mobilyalar</visage-link>
                        </div>

                        <div class="more">
                            <li onclick="$.navBarControl(true)"> <visage-link path="/mutfak">Mutfak Dolapları</visage-link> </li>
                            <li onclick="$.navBarControl(true)"> <visage-link path="/banyo">Banyo Dolapları</visage-link> </li>
                            <li onclick="$.navBarControl(true)"> <visage-link path="/ofis">Ofis Dolapları</visage-link> </li>
                            <li onclick="$.navBarControl(true)"> <visage-link path="/cocuk">Çocuk odası</visage-link> </li>
                            <li onclick="$.navBarControl(true)"> <visage-link path="/yatak">Yatak odası</visage-link> </li>
                            
                        </div>

                        <div class="d-block d-sm-none ml-2">
                            <visage-link onclick="$.navBarControl(true)" path="/mutfak">Mutfak Dolapları</visage-link> <br/>
                            <visage-link onclick="$.navBarControl(true)" path="/banyo">Banyo Dolapları</visage-link> <br/>
                            <visage-link onclick="$.navBarControl(true)" path="/ofis">Ofis Dolapları</visage-link> <br/>
                            <visage-link onclick="$.navBarControl(true)" path="/cocuk">Çocuk odası</visage-link> <br/>
                            <visage-link onclick="$.navBarControl(true)" path="/yatak">Yatak odası</visage-link> <br/>
                        </div>
                        
                    </div>
                    
                    <div>
                        <div class="label" onclick="$.navBarControl(true)">
                            <i class="material-icons"> contact_phone </i>
                            <a href="#footer" class="contact"> İletişim </a>
                        </div>
                    </div>
                    <div class="captions">
                    
                    <div class="ecmel ">
                    <visage-link onclick="$.navBarControl(true)" path="/"><span style="color:orange">Ecmel</span> Mobilya ve Dekorasyon</visage-link>
                        </div>
                    
                    </div>
                </div>
                
            </div>
            <div class="middle d-none d-md-block">
                <h3> <span>Ecmel</span><span> Mobilya ve Dekorasyon</span> </h3>
            </div>
            <div class="left">
                <img src="../src/assets/singlee-logo.png" />
            </div>
        </div>
    `)
}