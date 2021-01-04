import PopUpFoo from '../foo/index.js'
import { setCss } from '../static/tools.js'

export const PopUp = () => {
    $['popUpClose'] = () => setCss('.pop-up', {display: "none"})

    return (/*html*/`
        <div class="pop-up">
            <i class="fa fa-close float-right" onclick="$.popUpClose()"></i>
            <h4>
                <span style="color:orange;">Ecmel</span> Mobilya, Bize ulaşmak için 
            </h4>
            <div>
            <i class="fa fa-phone d-inline-flex"></i> 0531 544 77 98 
            </div>
            <style>
                .pop-up {
                    background: var(--pop-up);
                    position: fixed;
                    right: 1em;
                    top: 4em;
                    border-radius: 5px;
                    padding: 0.7em;
                    color: white;
                    max-width: 80%;
                    z-index: 3;
                }

                .pop-up h4 { font-weight: 100; }

                .pop-up .fa-phone {
                    background: white;
                    border-radius: 50%;
                    width: 30px; height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    cursor: pointer;
                }
            </style>
        </div>
    `)
}