
  
  

##  **Temel Seviye Uygulamalar İçin Webpack Configrayonu**

  

> Desteklenenler

- Ejs şablon motorunu client-side için destekler include gibi fonksiyonlar işlevsizdir.

- Handlebars şablon motorunu destekler (tavsiye).

- Jquery destekler.

  

> Bilgi

- Public klasörü html dosyalarını yürüttüğümüz yerdir.

- Script taglar için varsayılan dosya ismi index'tir index dosyaları dışındaki dosyalara script'ler inject edilmez.

- Ejs Şablon motorunda include işlemlerinde include('./example') değil include ./example diye yazılmalıdır.   

  
	

> Gelecek Güncelleme Özellikleri

- ejs ve hbs tam çalışması için çalışmalar devam ediyor.

- uzantı ismi girmeden otomatik uzantı tanılama sistemi yapılacak

  
 Genel webpack klasör Ağacı 
    📦webpack
    ┣ 📂constants
    ┃ ┗ 📜index.ts
    ┣ 📂plugin
    ┃ ┣ 📜plugins.ts
    ┃ ┗ 📜webpack-html-web-plugin.ts
    ┣ 📂utils
    ┃ ┗ 📜findExt.ts
    ┣ 📜webpack.config.dev.ts
    ┣ 📜webpack.config.main.ts
    ┗ 📜webpack.config.prod.ts
  

hazırlayan: **y.yasir.k**