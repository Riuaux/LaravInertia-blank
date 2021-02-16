require('./bootstrap');

require('./adminlte');

//window.Vue = require('vue');
import Vue from 'vue';

import VueNoty from 'vuejs-noty';
Vue.use(VueNoty, {
    theme    : 'metroui', 
    visibilityControl: true,
    closeWith: ['click','button'],
});

import { App, plugin } from '@inertiajs/inertia-vue'
Vue.use(plugin)

import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init();

const el = document.getElementById('app')

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: component => {
                let parts = component.split('/')
                let type = parts[0]
                let module_name = parts[1]
                if(type == 'Module'){
                    let ComponentDir = parts[2]
                    let name = parts[3]
                    try {
                        const modulo = require(`~/${module_name}/Resources/views/${ComponentDir}/${name}.vue`)
                        return import(`~/${module_name}/Resources/views/${ComponentDir}/${name}.vue`).then(module => module.default)
                    } catch (error) {
                        return import(`@/Pages/Errors/not-found.vue`).then(module => module.default)
                    }
                    
                }
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
        document.title = "PCERP";
        // Basic alert
this.$noty.show("Hello world!")

// Success notification
this.$noty.success("Your profile has been saved!")

// Error message
this.$noty.error("Oops, something went wrong!")

// Warning
this.$noty.warning("Please review your information.")

// Basic alert
this.$noty.info("New version of the app is available!")
    },
}).$mount(el)