import { Request, Response } from 'express';

export class DefaultController {
  protected async handleRequest(
    action: () => Promise<any>,
    req: Request,
    res: Response
  ) {
    try {
      const result = await action();
      return res.status(200).send(result);
    } catch (error: any) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message, statusCode: error.statusCode });
    }
  }
}
