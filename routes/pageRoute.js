import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route("/").get(pageController.getindexPage);
router.route("/about").get(pageController.getaboutPage);  

export default router;