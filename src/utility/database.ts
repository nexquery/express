/*
 * 		Hesap Defterim - Server
 *
 * 	Dosya:
 * 		database.ts
 *
 * 	Kodlama:
 * 		Burak (Nexor)
 *
 * 	Tarih:
 * 		28.08.2025, 17:29:42
 */

import 'dotenv/config';
import mysql from 'mysql2/promise';


/*
	ResultSetHeader:
		Tekli INSERT, UPDATE, DELETE, TRUNCATE işlemleri için.

	ResultSetHeader[]:
		Çoklu INSERT, UPDATE, DELETE, TRUNCATE işlemleri için.

	RowDataPacket:
		Sadece SELECT işlemleri için.

	RowDataPacket[][]:
		Çoklu SELECT işlemleri için.
*/


const SQL = mysql.createPool(
{
    host:                   process.env.MYSQL_HOST as string,
    user:                   process.env.MYSQL_USER as string,
    password:               process.env.MYSQL_PASSWORD as string,
    database:               process.env.MYSQL_DATABASE as string,
    waitForConnections:     true,
    connectionLimit:        10,
    maxIdle:                10,
    idleTimeout:            60000,
    queueLimit:             0,
    enableKeepAlive:        true,
    keepAliveInitialDelay:  0,
    multipleStatements:     true,
});

export const Database_Connect = async () =>
{
    try
    {
        await SQL.query('SELECT 1');
        console.log('Veritaban bağlantısı kuruldu.');
    }
    catch (error)
    {
        console.error('Veritaban bağlantısı kurulamadı:', error);
        process.exit(1);
    }
}

export default SQL;