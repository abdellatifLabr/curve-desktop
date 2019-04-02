const { Options, Dataset, Type } = require('../db');
const placeholders = require('./placeholders');
const Op = require('sequelize').Op;
module.exports = (View) => {
    return {
        getAll: (projectId) => {
            return View.findAll({ 
                where: {
                    projectId: projectId
                }
            });
        },
        get: (id) => {
            return View.findByPk(id, {
                include: [{
                    model: Dataset,
                    include: [Type],
                    order: [
                        ['id', 'DESC']
                    ]
                }, Options]
            });
        },
        create: (view, createOptions) => {
            return new Promise((res, rej) => {
                View.create(view)
                    .then(view => {
                        if (createOptions) {
                            Options.create({
                                viewId: view.dataValues.id,
                                json: JSON.stringify(placeholders.options)
                            })
                            .then(options => res(view))
                            .catch(rej);
                        } else {
                            res(view);
                        }
                    })
                    .catch(rej);
            });
        },
        update: (view) => {
            return new Promise((res, rej) => {
                View.update(view, {
                    where: { id: view.id }
                })
                .then(() => res(view))
                .catch(rej);
            });
        },
        delete: (id) => {
            return View.destroy({ where: { id: id } });
        },
        deleteAll: (projectId) => {
            return View.destroy({ where: { projectId: projectId } });
        }
    }
}