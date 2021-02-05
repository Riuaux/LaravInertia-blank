require('./bootstrap');

window.Vue = require('vue');

//import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue'
Vue.use(InertiaApp)

import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init()

const app = document.getElementById('app')

new Vue({
    vuetify : new Vuetify(),
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (component) => {
                let parts = component.split('/')
                let type = parts[0]
                let module_name = parts[1]
                /*if(type == 'Module'){
                    let ComponentDir = parts[2]
                    let name = parts[3]
                    try {
                        const modulo = require(`~/${module_name}/Resources/views/${ComponentDir}/${name}.vue`)
                        return import(`~/${module_name}/Resources/views/${ComponentDir}/${name}.vue`).then(module => module.default)
                    } catch (error) {
                        return import(`@/Pages/Errors/not-found.vue`).then(module => module.default)
                    }
                    
                }*/
                if(type == 'Package'){
                    let package_name = parts[2]
                    let name = parts[3]
                    try{
                        const packag = require(`../../vendor/${module_name}/${package_name}/resources/js/Pages/${name}.vue`)
                        return import(`../../vendor/${module_name}/${package_name}/resources/js/Pages/${name}.vue`).then(module => module.default)
                    }catch(error){
                        return import(`@/Pages/Errors/not-found.vue`).then(module => module.default)
                    }
                }
                let name = parts[2]
                try{
                    const page = require(`@/Pages/${module_name}/${name}`)
                    return import(`@/Pages/${module_name}/${name}`).then(module => module.default)
                }catch(errror){
                    return import(`@/Pages/Errors/not-found.vue`).then(module => module.default)
                }
            }
        },
    }),
    methods: {
    },
    mounted: function(){
        document.title = "app name";
    },
}).$mount(app)