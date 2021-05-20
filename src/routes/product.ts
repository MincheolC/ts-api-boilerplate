import express from 'express';
import * as productController from '../controllers/product';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */

router.get('/', productController.getProducts);

export default router;
