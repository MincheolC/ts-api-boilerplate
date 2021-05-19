import mongoose from 'mongoose';

export type CouponDocument = mongoose.Document & {
  name: string;
  category: mongoose.Types.ObjectId | null | undefined;
  product: mongoose.Types.ObjectId | null | undefined;
  leastOrderPrice: number;
  fixedDiscount: number;
  percentDiscount: number;
  maximumFixedDiscount: number;
  maximumPercentDiscount: number;
  expiredAt: Date;
}

const couponSchema = new mongoose.Schema<CouponDocument>(
  {
    name: { type: String, unique: true },
    category: mongoose.Types.ObjectId,
    product: mongoose.Types.ObjectId,
    leastOrderPrice: Number,
    fixedDiscount: Number,
    percentDiscount: Number,
    maximumFixedDiscount: Number,
    maximumPercentDiscount: Number,
    expiredAt: Date,
  }, {
    timestamps: true,
  }
);

export const Coupon = mongoose.model<CouponDocument>('Coupon', couponSchema);