import Reference from '../models/Reference';


// Lister les données de références sans géométrie by code référence && by : commune - province - region :

const listbyCommune = (req, res) => {
    Reference.findAll({ where: { id_commune: req.query.commune, code: req.query.code } }).then((references) => {
        res.status(200).json(references);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const listbyProvince = (req, res) => {
    Reference.findAll({ where: { id_province: req.query.province, code: req.query.code } }).then((references) => {
        res.status(200).json(references);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const listbyRegion = (req, res) => {
    Reference.findAll({ where: { id_region: req.query.region, code: req.query.code } }).then((references) => {
        res.status(200).json(references);
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

// Download les données de Références by commune - province - region :

const downloadReferenceByCommune = (req, res) => {
    Reference.findAll({ where: { id_commune: req.params.commune, code: req.params.code } }).then((references) => {
        let referencesArray = [];
        references.forEach(reference => {
            let pdata = {
                // ogc_fid: reference.ogc_fid,
                code: reference.code,
                nom: reference.nom,
                id_region: reference.id_region,
                id_province: reference.id_province,
                id_commune: reference.id_commune
            };
            referencesArray.push({ "type": "Feature", "properties": pdata, "geometry": reference.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": referencesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const downloadReferenceByProvince = (req, res) => {
    Reference.findAll({ where: { id_province: req.params.province, code: req.params.code } }).then((references) => {
        let referencesArray = [];
        references.forEach(reference => {
            let pdata = {
                // ogc_fid: reference.ogc_fid,
                code: reference.code,
                nom: reference.nom,
                id_region: reference.id_region,
                id_province: reference.id_province,
                id_commune: reference.id_commune
            };
            referencesArray.push({ "type": "Feature", "properties": pdata, "geometry": reference.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": referencesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

const downloadReferenceByRegion = (req, res) => {
    Reference.findAll({ where: { id_region: req.params.region, code: req.params.code } }).then((references) => {
        let referencesArray = [];
        references.forEach(reference => {
            let pdata = {
                // ogc_fid: reference.ogc_fid,
                code: reference.code,
                nom: reference.nom,
                id_region: reference.id_region,
                id_province: reference.id_province,
                id_commune: reference.id_commune
            };
            referencesArray.push({ "type": "Feature", "properties": pdata, "geometry": reference.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": referencesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}

// Download Reference national :
const downloadReferenceNational = (req, res) => {
    Reference.findAll({ where: { code: req.params.code } }).then((references) => {
        let referencesArray = [];
        references.forEach(reference => {
            let pdata = {
                // ogc_fid: reference.ogc_fid,
                code: reference.code,
                nom: reference.nom,
                id_region: reference.id_region,
                id_province: reference.id_province,
                id_commune: reference.id_commune
            };
            referencesArray.push({ "type": "Feature", "properties": pdata, "geometry": reference.geometry })
            console.log(pdata);
        })


        res.status(200).json({ "type": "FeatureCollection", "features": referencesArray });
    }).catch((e) => {
        res.status(500).json({ error: e.message });
    })
}


export default {
    list,
    listbyCommune,
    listbyProvince,
    listbyRegion,
    downloadReferenceByCommune,
    downloadReferenceByProvince,
    downloadReferenceByRegion,
    downloadReferenceNational
};
