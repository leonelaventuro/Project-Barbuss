// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Add css files
import '~/assets/css/normalize.min.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap',
    rel: 'stylesheet'
  })
  
  // i18n config
  appOptions.i18n.setLocaleMessage('es-ar', require('./locales/es-ar.json'))
  appOptions.i18n.setLocaleMessage('en-us', require('./locales/en-us.json'))
}
