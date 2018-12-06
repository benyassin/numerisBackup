import Strate from '../models/Strate';


// Lister les découpages sans géométrie by : commune - province - region :

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

const listbyProvince = (req, res) => {
    Strate.findAll({ where: { id_province: req.query.province, code_strat: req.query.strate } }).then((strates) => {
        res.status(200).json(strates);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const listbyRegion = (req, res) => {
    Strate.findAll({ where: { id_region: req.query.region, code_strat: req.query.strate } }).then((strates) => {
        res.status(200).json(strates);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}


// Download Strate by commune - province - region :

const downloadStrateByCommune = (req, res) => {
    Strate.findAll({ where: { id_commune: req.params.commune, code_strat: req.params.strate } }).then((strates) => {
        let stratesArray = [];
        strates.forEach(strate => {
            let pdata = {
                ogc_fid: strate.ogc_fid,
                code_strat: strate.code_strat,
                nom_strat: strate.nom_strat,
                id_region: strate.id_region,
                id_province: strate.id_province,
                id_commune: strate.id_commune
            };
            stratesArray.push({ "type": "Feature", "properties": pdata, "geometry": strate.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": stratesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const downloadStrateByProvince = (req, res) => {
    Strate.findAll({ where: { id_province: req.params.province, code_strat: req.params.strate } }).then((strates) => {
        let stratesArray = [];
        strates.forEach(strate => {
            let pdata = {
                ogc_fid: strate.ogc_fid,
                code_strat: strate.code_strat,
                nom_strat: strate.nom_strat,
                id_region: strate.id_region,
                id_province: strate.id_province,
                id_commune: strate.id_commune
            };
            stratesArray.push({ "type": "Feature", "properties": pdata, "geometry": strate.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": stratesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const downloadStrateByRegion = (req, res) => {
    Strate.findAll({ where: { id_region: req.params.region, code_strat: req.params.strate } }).then((strates) => {
        let stratesArray = [];
        strates.forEach(strate => {
            let pdata = {
                ogc_fid: strate.ogc_fid,
                code_strat: strate.code_strat,
                nom_strat: strate.nom_strat,
                id_region: strate.id_region,
                id_province: strate.id_province,
                id_commune: strate.id_commune
            };
            stratesArray.push({ "type": "Feature", "properties": pdata, "geometry": strate.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": stratesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

// Download Strate national :

const downloadStrateNational = (req, res) => {
    Strate.findAll({ where: { code_strat: req.params.strate } }).then((strates) => {
        let stratesArray = [];
        strates.forEach(strate => {
            let pdata = {
                ogc_fid: strate.ogc_fid,
                code_strat: strate.code_strat,
                nom_strat: strate.nom_strat,
                id_region: strate.id_region,
                id_province: strate.id_province,
                id_commune: strate.id_commune
            };
            stratesArray.push({ "type": "Feature", "properties": pdata, "geometry": strate.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": stratesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}


export default {
    list,
    listbyCommune,
    listbyProvince,
    listbyRegion,
    downloadStrateByCommune,
    downloadStrateByProvince,
    downloadStrateByRegion,
    downloadStrateNational
  };
  