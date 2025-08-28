/*
 * 		Hesap Defterim - Server
 * 
 * 	Dosya:
 * 		profil.ts
 * 
 * 	Kodlama:
 * 		Burak (Nexor)
 * 
 * 	Tarih:
 * 		28.08.2025, 12:36:45
 */

import { Request, Response } from 'express';

// Profil bilgilerini getiren fonksiyon
export const getProfile = (req: Request, res: Response) =>
{
    res.json(
    {
        message: 'Profil bilgileri başarıyla alındı.', 
        profile:
        {
            id: 1,
            name: 'Ali Veli',
            username: 'aliveli123',
        },
    });
};

// Yeni bir profil oluşturan fonksiyon
export const createProfile = (req: Request, res: Response) =>
{
    const newProfile = req.body;
    if (!newProfile.name || !newProfile.username)
    {
        return res.status(400).json(
        {
            error: 'İsim ve kullanıcı adı zorunludur.'
        });
    }
    res.status(201).json(
    {
        message: 'Profil başarıyla oluşturuldu.', 
        profile: newProfile
    });
};