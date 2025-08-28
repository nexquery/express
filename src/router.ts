/*
 * 		Diyet Zamanı Client
 * 
 * 	Dosya:
 * 		router.ts
 * 
 * 	Kodlama:
 * 		Burak (Nexor)
 * 
 * 	Tarih:
 * 		28.08.2025, 13:01:28
 */

import { Router } from 'express';
import { getProfile, createProfile } from './routes/profil';

const apiRouter: Router = Router();

// /profil yoluna gelen GET isteğini getProfile fonksiyonuna yönlendirir
apiRouter.get('/profil', getProfile);

// /profil yoluna gelen POST isteğini createProfile fonksiyonuna yönlendirir
apiRouter.post('/profil', createProfile);

export default apiRouter;