const Op = require('sequelize').Op;
module.exports = (Options) => {
    return {
        create: (options) => {
            return Options.create(options);
        },
        update: (options) => {
            return new Promise((res, rej) => {
                Options.update(options, {
                    where: { id: options.id }
                })
                .then(() => res(options))
                .catch(rej);
            });
        },
        delete: (id) => {
            return Options.destroy({ where: { id: id } });
        }
    }
}