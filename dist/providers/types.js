module.exports = (Type) => {
    return {
        getAll: () => {
            return Type.findAll();
        },
        get: (name) => {
            return Type.findOne({ where: { name: name } });
        },
        create: (type) => {
            return Type.findOrCreate({ where: { name: type.name }, defaults: type });
        }
    }
}