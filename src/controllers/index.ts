import { Response, Request, NextFunction } from 'express';

export function get(req: Request, res: Response, next: NextFunction): void {
  res.send('API Boilerplate');
}
