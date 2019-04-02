const { Project, View, Dataset, Options, Type, Unit } = require('../db');

module.exports = {
    projectsProvider: require('./projects')(Project),
    viewsProvider: require('./views')(View),
    optionsProvider: require('./options')(Options),
    typesProvider: require('./types')(Type),
    unitsProvider: require('./units')(Unit),
    datasetsProvider: require('./datasets')(Dataset)
}