import Communes from '../models/Commune';

const allCommunes = (req, res) => {
    Communes.findAll({
        offset: offset,
        limit: limit,
        attributes: { exclude: ['geometry', 'id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getCommuneById = (req, res) => {
    console.log("fct getProvinceById");
    console.log(req.params.commune);
    const { offset = 0, limit = 5000 } = req.query;
    Communes.findAll({
        offset: offset,
        limit: limit,
        where: { id_commune: req.params.commune },
        attributes: { exclude: ['geometry', 'id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getCommuneByProvince = (req, res) => {
    console.log("fct getProvinceByRegion");
    console.log(req.params.province);
    const { offset = 0, limit = 5000 } = req.query;
    Communes.findAll({
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
const getGeoCommuneById = (req, res) => {
    console.log("fct getGeoCommuneById");
    console.log(req.params.commune);
    const { offset = 0, limit = 5000 } = req.query;
    Communes.findAll({
        offset: offset,
        limit: limit,
        where: { id_commune: req.params.commune },
        attributes: { exclude: ['id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

export default {
    allCommunes,
    getCommuneById,
    getCommuneByProvince,
    getGeoCommuneById
};

