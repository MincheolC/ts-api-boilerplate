import { Response, Request, NextFunction } from 'express';

export function getProducts(req: Request, res: Response, next: NextFunction): void {
  res.send('Products');
}
