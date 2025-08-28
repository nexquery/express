# Express
Mobil uygulamalarım için kullandığım hazır, boş express paketi.

# Kurulum
Projeyi VSCode, Cursour veya farklı bir IDE ile açıp terminale şu komutu girin.  
Bu tüm gerekli paketleri kuracaktır.
```
npm install
```

# Paketlerin Güncellenmesi
Proje gereği yeni paket sürümleri çıkmış olabilir, bunları her zaman en son sürüme kurmak iyidir.
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
