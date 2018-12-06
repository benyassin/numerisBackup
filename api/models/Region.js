import { sequelize, Sequelize } from '../../config/sequelize';

const Regions = sequelize.define('region', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_region: {
    type: Sequelize.INTEGER
  },
  nom: {
    type: Sequelize.STRING
  },
  geometry: {
    type: Sequelize.GEOMETRY
  },
}, {
        timestamps: false
    });

export default Regions;
