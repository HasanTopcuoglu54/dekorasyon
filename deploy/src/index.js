import Visage from '../managment/visage.js'

import { Home } from './pages/Home.js'
import { Furnitures } from './pages/Mobilyalar.js'
import { Kitchen } from './pages/furnite-pages/kitchen.js'
import { Bad } from './pages/furnite-pages/bad.js'
import { Office } from './pages/furnite-pages/ofice.js'
import { Bathroom } from './pages/furnite-pages/Bathroom.js'
import { Childs } from './pages/furnite-pages/childs.js'
import { DefaultRequire } from './pages/default-require.js'

const VisageRoots = [
    {
        path: "/",
        page: Home
    },
    {
        path: "/mobilyalar",
        page: Furnitures
    },
    {
        path: "/mutfak",
        page: Kitchen
    },
    {
        path: "/yatak",
        page: Bad
    },
    {
        path: "/ofis",
        page: Office
    },
    {
 
        path:"/banyo",
        page: Bathroom
    },
    {
        path: "/cocuk",
        page: Childs
    }
]

export default new Visage({ // create new Visage App
    router: VisageRoots, // router system
    defaultPage: DefaultRequire, // default page
    fooList: [] // foo list
})