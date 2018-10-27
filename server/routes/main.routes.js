import { Router } from 'express';
import * as MainController from '../controllers/main.controller';
import { checkToken, checkTokenAdmin } from './auth';
const router = new Router();

router.route('/projects').post(MainController.createProject);

router.route('/updateProjects').post(MainController.updateProject);

router.route('/deleteProjects').post(MainController.deleteProject);

router.route('/setFeaturedProject').post(MainController.setFeaturedProject);

router.route('/projects').get(MainController.getProjects);

router.route('/project/:id').get(MainController.getProject);

router.route('/users').get(MainController.getUsers);

router.route('/users/signin').post(MainController.signin);

// router.route('/users/signup').post(MainController.signup);

router.use('/users/authcheck', checkToken, MainController.authCheck);

router.use('/users/authcheckAdmin', checkTokenAdmin, MainController.authCheckAdmin);

router.route('/users/customersignin').post(MainController.customerSignin);

router.route('/users/customersignup').post(MainController.customerSignup);

router.use('/users/getNow', checkToken, MainController.getNow);

router.route('/users/userSignup').post(MainController.userSignup);

router.use('/users/checkBalance', checkToken, MainController.checkBalanceFromFront);

router.route('/user/guide').get(MainController.getUserGuide);

router.use('/user', checkToken, MainController.getUser);

router.use('/orders', checkTokenAdmin, MainController.getOrders);

router.use('/deleteOrder', checkTokenAdmin, MainController.deleteOrder);

router.route('/updateUser').put(MainController.updateUser);

router.route('/upload').post(MainController.uploadFile);

router.route('/uploadVideo').post(MainController.uploadVideoFile);

router.route('/fxrate').get(MainController.getFxRate);

router.use('/tickets', checkTokenAdmin, MainController.getMyTickets);

export default router;
