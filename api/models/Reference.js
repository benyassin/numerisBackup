import { sequelize, Sequelize } from '../../config/sequelize';

const Reference = sequelize.define('reference', {
    code: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: Sequelize.STRING
    },
    id_region: {
        type: Sequelize.INTEGER
    },
    id_province: {
        type: Sequelize.INTEGER
    },
    id_commune: {
        type: Sequelize.INTEGER
    },
    geometry: {
        type: Sequelize.GEOMETRY
    },
}, {
        timestamps: false
    }, { tableName: 'reference' });

export default Reference