/*
 * 		Hesap Defterim - Server
 *
 * 	Dosya:
 * 		token.ts
 *
 * 	Kodlama:
 * 		Burak (Nexor)
 *
 * 	Tarih:
 * 		28.08.2025, 17:40:52
 */

import 'dotenv/config';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { Request } from 'express';

// T tipini, payload'un bir obje olduğunu belirtmek için kullanıyoruz.
//
// const token = createToken({ user_id: 1, name: 'Burak' });
//
// veya
//
// const token = createToken<{ user_id: number, name: string }>({ user_id: 1, name: 'Burak' });
//
// Obje olarak belirtilirse bu değer kesin var olduğu belirtilir.
//
export const createToken = <T extends object>(payload: T): string =>
{
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
        throw new Error('SECRET_KEY ortam değişkeni tanımlı değil.');
    }
    return jwt.sign(payload, secretKey);
};

// <T extends object> ifadesi, dönen payload'un yapısını dinamik olarak belirler.
//
// const token = createToken<{ user_id: number, name: string }>({ user_id: 1, name: 'Burak' });
//
// const p = verifyToken<{ user_id: number, name: string }>(token);
//
// console.log(p?.user_id, p?.name);
//
// -----------------------------------------
//
// const p = verifyToken<any>(token);
// console.log(p.user_id, p.name);
//
//
// Veya interface ile kesin gereken tipler belirlenebilir, bu tiple <any> içerisine eklenecek.
//
export const verifyToken = <T extends object>(token: string): T | null =>
{
    try
    {
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error('SECRET_KEY ortam değişkeni tanımlı değil.');
        }

        // jwt.verify, T tipine uygun olarak çözülür.
        const decoded = jwt.verify(token, secretKey);

        // Eğer decoded'ın beklenen bir obje tipi olduğuna eminsek,
        // onu T tipine dönüştürebiliriz.
        return decoded as T;
    }
    catch (error)
    {
        // Hata durumunda null döndürmek en güvenli yoldur.
        console.error('Token doğrulama hatası:', (error as VerifyErrors).message);
        return null;
    }
};

// Headerdan gelen tokeni kontrol edecek
//
// Başlangıç: Authorization: Bearer <token>
//
export const getHeaderToken = (req: Request): string | null =>
{
    const token = req.headers['authorization']?.split(' ')[1] || null;
    if(!token) return null;
    return token;
}