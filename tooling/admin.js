const fs = require('fs')

const obj = {
  GRIDSOME_CONFIG_BRANCH: /* process.env.CI_COMMIT_REF_NAME || */ 'master',
  GRIDSOME_CONFIG_URL: process.env.URL || 'frontend-jamstack-gridsome',
  GRIDSOME_CONFIG_REPO: process.env.CI_PROJECT_PATH || 'badperros/templates/frontend-jamstack-gridsome',
  GRIDSOME_CONFIG_APPID: process.env.APP_ID || 'APP ID'
}

fs.readFile('./src/admin/config_raw.yml', 'utf8', function read(err, data) {
  if (err) {
    throw err
  }
  
  data = data.replace("{{REPO}}", obj.GRIDSOME_CONFIG_REPO)
  data = data.replace("{{APP_ID}}", obj.GRIDSOME_CONFIG_APPID)
  data = data.replace("{{BRANCH}}", obj.GRIDSOME_CONFIG_BRANCH)

  fs.writeFile('./src/admin/config.yml', data, function (err) {
    if (err) {
      throw err
    }
  })
})
