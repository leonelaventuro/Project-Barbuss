const fs = require('fs')

const obj = [
  ['GRIDSOME_CONFIG_BRANCH', /* process.env.CI_COMMIT_REF_NAME || */ 'master'],
  ['GRIDSOME_CONFIG_URL', process.env.URL || 'frontend-jamstack-gridsome'],
  ['GRIDSOME_CONFIG_REPO', process.env.CI_PROJECT_PATH || 'badperros/templates/frontend-jamstack-gridsome'],
  ['GRIDSOME_CONFIG_APPID', process.env.APP_ID || 'APP ID']
]

const convertObj = (toConvert) => {
  let str = ''
  toConvert.forEach(c => {
    str += c[0] + '=' + c[1] + "\n"
  })
  return str
}

fs.writeFile('.env', convertObj(obj), function (err) {
  if (err) throw err
})
