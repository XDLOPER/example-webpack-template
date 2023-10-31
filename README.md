
  

##  **Temel Seviye Uygulamalar İçin Proje Yönetim Konfigrasyonu**

  

> Desteklenenler

- Root klasör yolu '@' alias'ı ile çağırılabilir.

- EJS şablon motorunu destekler.

- Handlebars şablon motorunu destekler (tavsiye).

- SASS-css destekler.

- İsteğe bağlı react'ı destekler.

- Video,resim,json formatlarını Destekler.

- Jquery destekler.

  

> Bilgi

- Proje yönetim ana klasör ismi: __X-APP-Q__

- Ana script dosyası (index.js yada src/index.js) olmakla beraber konumu değiştirilmemesi tavsiye edilir.

- Bazı dosya uzantıları girilmesi zorunlu değildir. Örn(js,ts,jsx,jsx,...)

- Dotenv kuruludur klasör yolu: (__X-APP-Q__/config/dotenv/.env)

- Public klasörü html dosyalarını yürüttüğümüz yerdir.

- Script taglar için varsayılan dosya ismi index'tir index dosyaları dışındaki dosyalara script'ler inject edilmez.

- Ejs Şablon motorunda include işlemlerinde include('./example') değil include ./example diye yazılmalıdır.

> Uyarı!

- Aynı dizinde index.html, index.ejs, indx.hbs gibi aynı isimli farklı uzantılı şablon motorlarını aynı isimle farklı dizinde kullanabilir aynı dizinde kullanamazsınız.

  

> Gelecek Güncelleme Özellikleri

- ejs ve hbs tam çalışması için çalışmalar devam ediyor.

- uzantı ismi girmeden otomatik uzantı tanılama sistemi yapılacak

  

> Genel webpack klasör Ağacı

📦__X-APP-Q__  
 ┗ 📂config  
 ┃ ┣ 📂dotenv  
 ┃ ┃ ┗ 📜.env  
 ┃ ┗ 📂webpack  
 ┃ ┃ ┣ 📂constants  
 ┃ ┃ ┃ ┣ 📂data  
 ┃ ┃ ┃ ┃ ┗ 📜template-engine-data.json  
 ┃ ┃ ┃ ┗ 📜index.ts  
 ┃ ┃ ┣ 📂plugin  
 ┃ ┃ ┃ ┗ 📜plugins.ts  
 ┃ ┃ ┣ 📂utils  
 ┃ ┃ ┃ ┣ 📜findExt.ts  
 ┃ ┃ ┃ ┗ 📜web-file-find.ts  
 ┃ ┃ ┣ 📜webpack.config.dev.ts  
 ┃ ┃ ┣ 📜webpack.config.main.ts  
 ┃ ┃ ┗ 📜webpack.config.prod.ts

  

hazırlayan: **y.yasir.k**
