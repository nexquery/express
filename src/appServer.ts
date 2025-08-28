/*
 * 		Hesap Defterim - Server
 *
 * 	Dosya:
 * 		appServer.ts
 *
 * 	Kodlama:
 * 		Burak (Nexor)
 *
 * 	Tarih:
 * 		28.08.2025, 11:45:22
 */

import 'dotenv/config';
import apiRouter from './router';
import express, { Application, Request, Response } from 'express';
import { errorHandler, notFound } from './middleware/errorHandler';
import { Database_Connect } from './utility/database';

const API_URL = '/api';

(async () =>
{
    // Database Kurulumu Henüz Yok
    await Database_Connect();

    // Expressin ayarlarını yapılandır
    const app: Application = express();
    const PORT = process.env.WEB_PORT || 3000;

    // JSON verilerini parse et
    app.use(express.json());

    // End Point (127.0.0.1:3000/api/*)
    app.use(API_URL, apiRouter);

    // Root End Point
    app.get('/', (req: Request, res: Response) =>
    {
        res.send('Merhaba, TypeScript Destekli Express API!');
    });

    // Hata Yakalamaları Etkinleştir (Tüm Routerlardan sonra eklenmeli)
    app.use(notFound);
    app.use(errorHandler);

    // Sunucuyu başlatma
    app.listen(PORT, () =>
    {
        console.log(`Sunucu http://127.0.0.1:${PORT}${API_URL}/ adresinde çalışıyor.`);
    });
})();