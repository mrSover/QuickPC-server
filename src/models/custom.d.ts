declare namespace Express {
    interface Request {
        files?: { [fieldname: string]: Express.Multer.File[] } | Express.Multer.File[];
    }
}