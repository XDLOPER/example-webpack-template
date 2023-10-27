
##  **Temel Seviye Uygulamalar İçin Webpack Configrayonu**

> Desteklenenler
- EJS şablon motorunu destekler.
- Handlebars şablon motorunu destekler (tavsiye).
- Jquery destekler.

> Bilgi
- Public klasörü html dosyalarını yürüttüğümüz yerdir.
- Script taglar için varsayılan dosya ismi index'tir index dosyaları dışındaki dosyalara script'ler inject edilmez.
-   Ejs Şablon motorunda include işlemlerinde include('./example') değil include ./example diye yazılmalıdır.
  
  >Uyarı!
  - Aynı dizinde index.html, index.ejs, indx.hbs gibi aynı isimli farklı uzantılı şablon motorlarını aynı isimle farklı dizinde kullanabilir aynı dizinde kullanamazsınız.

> Gelecek Güncelleme Özellikleri
- ejs ve hbs tam çalışması için çalışmalar devam ediyor.
- uzantı ismi girmeden otomatik uzantı tanılama sistemi yapılacak

> Genel webpack klasör Ağacı

📦webpack  
 ┣ 📂constants  
 ┃ ┗ 📜index.ts  
 ┣ 📂plugin  
 ┃ ┗ 📜plugins.ts  
 ┣ 📂utils  
 ┃ ┣ 📜findExt.ts  
 ┃ ┗ 📜web-file-find.ts  
 ┣ 📜webpack.config.dev.ts  
 ┣ 📜webpack.config.main.ts  
 ┗ 📜webpack.config.prod.ts

hazırlayan: **y.yasir.k**