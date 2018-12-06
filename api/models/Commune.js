import { sequelize, Sequelize } from '../../config/sequelize';

const Communes = sequelize.define('commune', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_commune: {
        type: Sequelize.INTEGER
    },
    nom: {
        type: Sequelize.STRING
    },
    id_province: {
        type: Sequelize.INTEGER
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

    
export default Communes;

    