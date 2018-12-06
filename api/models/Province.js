import { sequelize, Sequelize } from '../../config/sequelize';

const Provinces = sequelize.define('province', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_province: {
        type: Sequelize.INTEGER
    },
    nom: {
        type: Sequelize.STRING
    },
    id_region: {
        type: Sequelize.INTEGER
    },
    geometry: {
        type: Sequelize.GEOMETRY
    },
}, {
        timestamps: false
    });




export default Provinces;

    