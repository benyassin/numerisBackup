import express from 'express'
import provinceCtrl from '../../api/controllers/ProvinceController'
import Auth from '../../helpers/jwt'

const router = express.Router();

router.route('/')
    .get(provinceCtrl.allProvinces);
// router.route('/:province')
//     .get(provinceCtrl.getProvinceById);
router.route('/:region')
    .get(provinceCtrl.getProvinceByRegion);

router.route('/province/:province')
    .get(provinceCtrl.getGeoProvinceById);


// router.route('/reg')
//     .get(decoupCtrl.allRegions);
//   .post(userCtrl.create);
// router.route('/:userId')
//   .put(Auth, userCtrl.update)
//   .delete(Auth, userCtrl.remove);



/** Load user when API */
//router.param('userId',Auth, userCtrl.load);

export default router