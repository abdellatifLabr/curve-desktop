const Sequelize = require('sequelize');
const path = require('path');
const { app } = require('electron');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(app.getPath('userData'), 'curve.sqlite')
});

const Project = db.define('project', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const View = db.define('view', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Dataset = db.define('dataset', {
    json: {
        type: Sequelize.JSONB,
        allowNull: false
    }
});

const Type = db.define('type', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    placeholder: {
        type: Sequelize.JSONB,
        allowNull: false
    }
});

const Unit = db.define('unit', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    equiv: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Options = db.define('options', {
    json: {
        type: Sequelize.JSONB,
        allowNull: false
    }
});

Project.hasMany(View, {
    onDelete: 'CASCADE'
});
View.belongsTo(Project, {
    onDelete: 'CASCADE'
});
View.hasMany(Dataset, {
    onDelete: 'CASCADE'
});
Dataset.belongsTo(View, {
    onDelete: 'CASCADE'
});
View.hasOne(Options, {
    onDelete: 'CASCADE'
});
Options.belongsTo(View, {
    onDelete: 'CASCADE'
});
Type.hasMany(Dataset);
Dataset.belongsTo(Type);

async function init() {
    await db.sync();
}

init();

module.exports = { Project, View, Dataset, Options, Type, Unit };