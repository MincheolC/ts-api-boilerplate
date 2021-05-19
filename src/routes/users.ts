import express from 'express';
import * as userController from '../controllers/users';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */

router.get('/', userController.getUsers);

export default router;
