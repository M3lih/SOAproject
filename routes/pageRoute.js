import express from 'express';
import * as pageController from '../controllers/pageController.js';



const router = express.Router();

router.route("/").get(pageController.getindexPage);
router.route("/about").get(pageController.getaboutPage);  
router.route("/register").get(pageController.getregisterPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/logout").get(pageController.getLogout);


export default router;