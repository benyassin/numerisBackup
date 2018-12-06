import Regions from '../models/Region';

// const allRegions = (req, res) => {
//     const { offset = 0, limit = 5000 } = req.query;
//     regions.findAll({
//         offset: offset,
//         limit: limit
//     }).then((allregionss) => {
//         res.status(200).json(allregionss);
//     }).catch((e) => {
//         res.status(500).json({ error: e.message });
//     });
// };

const allRegions = (req, res) => {
    console.log("ayouuuuuuuuuuuuuuuuuuuuub");
    const { offset = 0, limit = 5000 } = req.query;
    Regions.findAll({
        offset: offset,
        limit: limit,
        attributes: { exclude: ['geometry', 'id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};

const getRegionById = (req, res) => {
    console.log("fct getRegionById");
    console.log(req.params.region);
    const { offset = 0, limit = 5000 } = req.query;
    Regions.findAll({
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
const getGeoRegionById = (req, res) => {
    console.log("fct getRegionById");
    console.log(req.params.region);
    const { offset = 0, limit = 5000 } = req.query;
    Regions.findAll({
        offset: offset,
        limit: limit,
        where: { id_region: req.params.region },
        attributes: { exclude: ['id'] },
        order: [['nom', 'ASC']]
    }).then((data) => {
        // console.log(data);
        res.status(200).json(data);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
};


// export default allRegions;
export default {
    allRegions,
    getRegionById,
    getGeoRegionById
};
