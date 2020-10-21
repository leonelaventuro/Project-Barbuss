window.CMS_MANUAL_INIT = true
import CMS, { init } from 'netlify-cms'

init({
  config: {
    backend: {
      name: 'gitlab',
      repo: process.env.GRIDSOME_CONFIG_REPO,
      auth_type: 'implicit',
      app_id: process.env.GRIDSOME_CONFIG_APPID,
      branch: process.env.GRIDSOME_CONFIG_BRANCH
    },
    load_config_file: false,
    media_folder: 'static/uploads',
    public_folder: '/uploads',
    collections: [
      {
        label: 'Pages',
        name: 'pages',
        files: [
          {
            label: 'Home',
            name: 'home',
            folder: 'content/pages/home.md',
            fields: [
              { label: 'text', name: 'text', widget: 'string' },
              { label: 'image', name: 'image', widget: 'image', allow_multiple: false }
            ]
          }
        ]
      }
    ]
  }
})