import { Router } from 'express';
import * as MainController from '../controllers/main.controller';
const router = new Router();

router.route('/users').post(MainController.getUser);

router.route('/user').post(MainController.getUser);

router.route('/user').put(MainController.updateUser);

router.route('/upload').post(MainController.uploadFile);

router.route('/uploadVideo').post(MainController.uploadVideoFile);

router.route('/projects').post(MainController.createProject);

router.route('/projects').get(MainController.getProject);


export default router;

