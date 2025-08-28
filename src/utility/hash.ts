/*
 * 		Hesap Defterim - Server
 *
 * 	Dosya:
 * 		hash.ts
 *
 * 	Kodlama:
 * 		Burak (Nexor)
 *
 * 	Tarih:
 * 		28.08.2025, 17:37:50
 */

import bcrypt from 'bcrypt';

export const Sifre_Hash = async (sifre: string) =>
{
    const saltRounds = 10;
    const hashedSifre = await bcrypt.hash(sifre, saltRounds);
    return hashedSifre;
}

export const Sifre_Dogrula = async (sifre: string, hashedSifre: string) =>
{
    const result = await bcrypt.compare(sifre, hashedSifre);
    return result;
}