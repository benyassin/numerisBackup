import Provinces from '../models/Province';


const allProvinces = (req, res) => {
    console.log("ayouuuuuuuuuuuuuuuuuuuuub");
    const { offset = 0, limit = 5000 } = req.query;
    Provinces.findAll({
        offset: offset,
        limit: limit,
        attributes: { exclude: ['geometry', 'id'] }, 
        order: [['nom', 'ASC'] ]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getProvinceById = (req, res) => {
    console.log("fct getProvinceById");
    console.log(req.params.province);
    const { offset = 0, limit = 5000 } = req.query;
    Provinces.findAll({
        offset: offset,
        limit: limit,
        where: { id_province: req.params.province },
        attributes: { exclude: ['geometry', 'id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getProvinceByRegion = (req, res) => {
    console.log("fct getProvinceByRegion");
    console.log(req.params.region);
    const { offset = 0, limit = 5000 } = req.query;
    Provinces.findAll({
        offset: offset,
        limit: limit,
        where: { id_region: req.params.region },
        attributes: { exclude: ['geometry', 'id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getGeoProvinceById = (req, res) => {
    console.log("fct getGeoProvinceById");
    console.log(req.params.province);
    const { offset = 0, limit = 5000 } = req.query;
    Provinces.findAll({
        offset: offset,
        limit: limit,
        where: { id_province: req.params.province },
        attributes: { exclude: ['id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

export default{
    allProvinces,
    getProvinceById,
    getProvinceByRegion,
    getGeoProvinceById
};

