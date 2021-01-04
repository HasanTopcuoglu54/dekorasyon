import { setCss } from '../static/tools.js'

export const MapModal = () => {
    $['mapModalControl'] = (mode) => setCss('.modal-map', {
        transition: "0.3s",
        visibility: mode ? "visible" : "hidden",
        opacity: mode ? "1" : "0"
    })
    
    return (/*html*/`
        <div class="modal-map">
            <div class="shadow" onclick="$.mapModalControl(false)"></div>
            <img src="../src/assets/maps.jpg" class="w-75" />
        </div>
    `)
}