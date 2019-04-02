const { View, Dataset, Options, Type } = require('../db');
const Op = require('sequelize').Op;
module.exports = (Project) => {
    return {
        getAll: () => {
            return Project.findAll({ 
                order: [
                    ['id', 'DESC']
                ]
            });
        },
        getProject: (id, includes) => {
            if (!includes) {
                return Project.findByPk(id);   
            } else {
                return Project.findOne({
                    where: { id: id },
                    include: [
                        {
                            model: View,
                            include: [
                                Options,
                                {
                                    model: Dataset,
                                    include: [Type]
                                }
                            ]
                        }
                    ]
                });
            }
        },
        search: (term) => {
            return Project.findAll({
                where: {
                    title: {
                        [Op.like]: `%${term}%`
                    }
                },
                order: [
                    ['id', 'DESC']
                ]
            })
        },
        create: (project) => {
            return Project.create(project);
        },
        update: (project) => {
            return new Promise((res, rej) => {
                Project.update(project, {
                    where: { id: project.id }
                })
                .then(() => res(project))
                .catch(rej);
            });
        },
        delete: (id) => {
            return Project.destroy({ where: { id: id } });
        }
    }
}