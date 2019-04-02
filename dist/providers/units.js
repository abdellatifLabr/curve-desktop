module.exports = (Unit) => {
    return {
        getAll: () => {
            return Unit.findAll();
        },
        create: (unit) => {
            return Unit.findOrCreate({ where: unit });
        }
    }
}