import Visax from '../../managment/visax.js'
import { setAttr, setCss } from '../static/tools.js'

const store = new Visax({
    first: ({state, actions}) => {
        const srcCompiler = (count) => {
            return `../src/assets/random-images-content/${state.sliderİmages[count]}.jpg`
        }

        setInterval(() => {
            setAttr('#slider-image', 'src', srcCompiler(state.counter))

            setCss('#slider-image', {transition: "0s", left: "-20em", opacity: "0"})
            setTimeout(() => setCss('#slider-image', {transition: "0.4s", left: "0", opacity: "1"}) , 0)

            actions.ADD_COUNTER()
        }, state.sliderTime)
    },
    state: {
        counter: 1,
        sliderTime: 3000,
        sliderİmages: ['ps', 'res2', 'res4-1']
    },
    mutations: {
        increaseCounter: state => {
            if (state.counter < state.sliderİmages.length-1)
                state.counter++
            else
                state.counter = 0
        }
    },
    actions: {
        ADD_COUNTER: () => store.use('increaseCounter')
    }
})

store.createVisax()

export default store