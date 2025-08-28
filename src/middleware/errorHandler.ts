/*
 * 		Hesap Defterim - Server
 * 
 * 	Dosya:
 * 		errorHandler.ts
 * 
 * 	Kodlama:
 * 		Burak (Nexor)
 * 
 * 	Tarih:
 * 		28.08.2025, 14:04:02
 */

import { Request, Response, NextFunction } from 'express';

// 404 (Sayfa Bulunamadı) Hata Yakalama Middleware'i
export const notFound = (req: Request, res: Response) =>
{
    res.status(404).json(
    {
        success: false,
        message: 'Ulaşmaya çalıştığınız sayfa bulunamadı.',
    });
};

// Genel Hata Yakalama Middleware'i
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>
{
    console.error(err.stack);
    res.status(500).json(
    {
        success: false,
        message: 'Sunucuda beklenmedik bir hata oluştu.',
    });
};