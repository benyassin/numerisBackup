import Strate from '../models/Strate';

const list = (req, res) => {

    const { offset = 0, limit = 5000 } = req.query;
    Strate.findAll({
      offset: offset,
      limit: limit,
      where:{
          id_region:37,code_strat:10
      }
    }).then((strates) => {
      res.status(200).json(strates);
    }).catch((e) => {
      res.status(500).json({ error: e.message });
    });
  
};

const listbyCommune = (req, res) => {
    Strate.findAll({where:{id_commune:req.query.commune,code_strat:req.query.strate}}).then((strates) => {
        res.status(200).json(strates);
    }).catch((e) => {
        res.status(500).json({error: e.message});
    })
}

export default {
    list,
    listbyCommune
  };
  