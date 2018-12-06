import express from 'express'
import communeCtrl from '../../api/controllers/CommuneController'
import Auth from '../../helpers/jwt'

const router = express.Router();

router.route('/')
    .get(communeCtrl.allCommunes);
// router.route('/:commune')
//     .get(communeCtrl.getCommuneById);
router.route('/:province')
    .get(communeCtrl.getCommuneByProvince);
router.route('/commune/:commune')
    .get(communeCtrl.getGeoCommuneById);

// router.route('/reg')
//     .get(decoupCtrl.allRegions);
//   .post(userCtrl.create);
// router.route('/:userId')
//   .put(Auth, userCtrl.update)
//   .delete(Auth, userCtrl.remove);



/** Load user when API */
//router.param('userId',Auth, userCtrl.load);

export default router