import { Router } from 'express';
import * as MainController from '../controllers/main.controller';
import { checkToken, checkTokenAdmin } from './auth';
const router = new Router();



// Get all Posts
router.route('/posts').get(MainController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(MainController.getPost);

// Add a new Post
router.route('/posts').post(MainController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(MainController.deletePost);

// Get help content
router.route('/projects').post(MainController.createProject);

router.route('/updateProjects').post(MainController.updateProject);

router.route('/deleteProjects').post(MainController.deleteProject);

router.route('/projects').get(MainController.getProjects);

router.route('/project/:id').get(MainController.getProject);

router.route('/users').get(MainController.getUsers);

router.route('/users/signin').post(MainController.signin);

router.route('/users/signup').post(MainController.signup);

router.use('/users/authcheck', checkToken, MainController.authCheck);

router.use('/users/authcheckAdmin', checkTokenAdmin, MainController.authCheckAdmin);

router.route('/users/customersignin').post(MainController.customerSignin);

router.route('/users/customersignup').post(MainController.customerSignup);

router.use('/users/getNow', checkToken, MainController.getNow);

router.route('/users/userSignup').post(MainController.userSignup);

router.route('/users/getCryptoAddr/:email/:projectID').post(MainController.getCryptoAddr);

router.use('/users/checkBTCBalance', checkToken, MainController.checkBTCBalance);

router.use('/users/checkLTCBalance', checkToken, MainController.checkLTCBalance);

router.use('/users/checkETHBalance', checkToken, MainController.checkETHBalance);

router.use('/user', checkToken, MainController.getUser);

router.route('/user').put(MainController.updateUser);

router.route('/upload').post(MainController.uploadFile);

router.route('/uploadVideo').post(MainController.uploadVideoFile);

router.route('/fxrate').get(MainController.getFxRate);

export default router;
