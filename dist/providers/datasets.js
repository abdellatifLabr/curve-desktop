const Op = require('sequelize').Op;
module.exports = (Dataset) => {
    return {
        create: (dataset) => {
            return Dataset.create(dataset);
        },
        update: (dataset) => {
            return new Promise((res, rej) => {
                Dataset.update(dataset, {
                    where: { id: dataset.id }
                })
                .then(() => res(dataset))
                .catch(rej);
            });
        },
        delete: (id) => {
            return Dataset.destroy({ where: { id: id } });
        },
        bulkUpdate: async (datasets) => {
            for (let ds of datasets) {
                await Dataset.update(ds, {
                    where: { id: ds.id }
                });
            }
        },
        bulkCreate: async (datasets) => {
            for (let ds of datasets) {
                await Dataset.create(ds);
            }
        }
    }
}