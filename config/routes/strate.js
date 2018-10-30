import express from 'express'
import strateCtrl from '../../api/controllers/StrateController'



const router = express.Router();

router.route('/commune')
  .get(strateCtrl.listbyCommune);
router.route('/')
  .get(strateCtrl.list);

/** Load user when API */
//router.param('userId',Auth, userCtrl.load);

export default router