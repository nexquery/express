/*
 * 		Hesap Defterim - Server
 *
 * 	Dosya:
 * 		validate.ts
 *
 * 	Kodlama:
 * 		Burak (Nexor)
 *
 * 	Tarih:
 * 		28.08.2025, 18:00:57
 */

export function isNumeric(value: string)
{
    const desen = /^-?\d+(\.\d+)?$/;
    return desen.test(value.trim());
}

export function IsValidEmail(email: string)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

export function isEmptyString(value: string | null | undefined)
{
    return !value || value.trim().length === 0;
}