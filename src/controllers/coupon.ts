import { Response, Request, NextFunction } from 'express';

export function getCoupons(req: Request, res: Response, next: NextFunction): void {
  res.send('Coupons');
}
