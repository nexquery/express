# Express
Mobil uygulamalarım için kullandığım hazır, boş express paketi.

# Kurulum
Projeyi VSCode, Cursour veya farklı bir IDE ile açıp terminale şu komutu girin.  
Bu tüm gerekli paketleri kuracaktır.
```
npm install
```

# Paketlerin Güncellenmesi
Proje gereği yeni paket sürümleri çıkmış olabilir, bunları her zaman en son sürüme güncellemek iyidir.
```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

# Projenin Derlenmesi ve Başlatılması
Projeyi derlemek için şu komutu girin.
```
npm run build
```
Projeyi başlatmak için
```
npm run start
```
Projeyi developer modda başlatmak için  
(Bu nodemon ile başlatılır, bir dosya değişiklik yapıp kaydederseniz sunucu otomatik olarak yeniden başlatılır)
```
npm run dev
```

# Paket Listesi
- express
- typescript
- dotenv
- mysql2
- jsonwebtoken
- bcrypt

# Manuel Kurulum
İlk önce bir klasör oluşturup package.json dosyasını aşağıdaki komut ile oluşturalım.
```
npm init -y
```
Daha sonra gerekli paketleri kuralım.
```
npm install -D typescript @types/node ts-node ts-node-dev
npm install dotenv mysql2 express @types/express jsonwebtoken @types/jsonwebtoken bcrypt @types/bcrypt
```
Şimdi TypeScript ayarlarını yapalım
```
npx tsc --init
```
**tsconfig.json** ayarlarını güncelleyelim
```
{
    // Visit https://aka.ms/tsconfig to read more about this file
    "compilerOptions":
    {
        // File Layout
        "rootDir": "./src",
        "outDir": "./dist",

        // Environment Settings
        // See also https://aka.ms/tsconfig/module
        "module": "commonjs",
        "target": "es2024",
        "types": [],
        // For nodejs:
        // "lib": ["esnext"],
        // "types": ["node"],
        // and npm install -D @types/node

        // Other Outputs
        "sourceMap": false,
        "declaration": false,
        "declarationMap": false,

        // Stricter Typechecking Options
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,

        // Style Options
        // "noImplicitReturns": true,
        // "noImplicitOverride": true,
        // "noUnusedLocals": true,
        // "noUnusedParameters": true,
        // "noFallthroughCasesInSwitch": true,
        // "noPropertyAccessFromIndexSignature": true,

        // Recommended Options
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "jsx": "react-jsx",
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true,
    }
}
```
**package.json** dosyasını düzenleyelim
```
{
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "App.js",
    "scripts":
    {
        "build": "tsc",
        "start": "ts-node dist/App.js",
        "dev": "ts-node-dev --respawn --transpile-only src/App.ts"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "devDependencies": {
    "@types/node": "^24.10.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
    }
}
```
Son olarak **src** adında klasör oluşturup **App.ts** adında dosya oluşturup şunları ekleyelim
```ts
import express, { Application, Request, Response } from 'express';

// Express uygulamasını başlat
const app: Application = express();
const PORT: number = 3000;

// Ana sayfa için basit bir route tanımla
app.get('/', (req: Request, res: Response) => {
    res.send('TypeScript ve Express.js ile merhaba!');
});

// Uygulamayı belirtilen portta dinlemeye başla
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
```
