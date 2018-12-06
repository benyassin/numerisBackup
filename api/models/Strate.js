import { sequelize, Sequelize } from '../../config/sequelize';

const Strate = sequelize.define('strate', {
  ogc_fid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  code_strat: {
    type: Sequelize.INTEGER,
  },
  nom_strat: {
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
  },{tableName:'strate'});

export default Strate