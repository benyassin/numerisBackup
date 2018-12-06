import express from 'express'
import strateCtrl from '../../api/controllers/StrateController'



const router = express.Router();

// router.route('/commune')
router.route('/commune/:commune/strate/:strate')
    .get(strateCtrl.downloadStrateByCommune);

router.route('/province/:province/strate/:strate')
    .get(strateCtrl.downloadStrateByProvince);

router.route('/region/:region/strate/:strate')
    .get(strateCtrl.downloadStrateByRegion);


router.route('/strate/:strate')
    .get(strateCtrl.downloadStrateNational);

    


export default router