import express from 'express';
import * as couponController from '../controllers/coupon';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */

router.get('/', couponController.getCoupons);

export default router;
