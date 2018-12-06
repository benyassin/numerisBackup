import express from 'express'
import regionCtrl from '../../api/controllers/RegionController'
import Auth from '../../helpers/jwt'

const router = express.Router();

router.route('/')
    .get(regionCtrl.allRegions);
router.route('/:region')
    .get(regionCtrl.getRegionById);
router.route('/region/:region')
    .get(regionCtrl.getGeoRegionById);

// router.route('/reg')
//     .get(decoupCtrl.allRegions);
//   .post(userCtrl.create);
// router.route('/:userId')
//   .put(Auth, userCtrl.update)
//   .delete(Auth, userCtrl.remove);



/** Load user when API */
//router.param('userId',Auth, userCtrl.load);

export default router