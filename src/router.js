import vueRouter from 'vue-router'
//Importar un archivo vue
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'

const router = new vueRouter({
    mode: 'history', //forma de cadena 
    base: __dirname, //empieza en el directorio actual
    routes: [{
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
    ]
})

export default router