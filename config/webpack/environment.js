const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const tslint =  require('./loaders/tslint')

environment.loaders.append('typescript', typescript)
environment.loaders.prepend('tslint', tslint)
module.exports = environment
