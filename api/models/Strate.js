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
  wkb_geometry: {
    type: Sequelize.GEOMETRY
  },
},{tableName:'strate'});

export default Strate