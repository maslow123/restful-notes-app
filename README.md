# restful-notes-app
Simple restful application notes

## Langkah - langkah cara pemakaian program

1. Pertama download / git clone dulu semua filenya.
2. Jika sudah, jalankan program dengan membuka cmd setelah itu masuke ke directory filenya, dan jika silahkan download software nodejsnya terlebih dahulu di link [nodejs](https://nodejs.org/). Dan jika sudah silahkan buka cmd kamu dan silahkan ketikkan perintah sebagai berikut
```
npm install -g <package_name>
```
karena kita menggunakan banyak library, seperti misalnya express,cors,querystring, dan lodas.isempty. Maka kita install saja sebutuhnya, kita ketikkan saja perintah dibawah ini dalam CMD
```
npm install --global <package_name>
```
kode diatas merupakan penginstallan package secara global, yang berarti kita tidak perlu menginstall package lagi ketika kita membuat folder baru / project baru.

3. Jika package sudah siap, saatnya untuk penggunaan program. Pertama kita ketikkan pada CMD perintah
```
node index.js
```
4. Apabila sudah selesai, maka akan program akan berjalan dengan ditandai munculnya **console.log** bertuliskan seperti gambar dibawah ini<br>
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-1.JPG)
5. Dan jika sudah seperti gambar diatas, langkah selanjutnya yaitu kita mulai dengan membuka tools yang bernama **POSTMAN** yang mana tools ini sangat diperlukan sekali untuk pembuatan API. Karna dengan menggunakan **POSTMAN** ini kita dapat mengecek secara realtime dalam pembuatan API.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-2.JPG)

6. Jika sudah membuka toolsnya, langkah selanjutnya yaitu pilih method GET dan masukkan portnya yaitu **localhost:3000/notes**

7. Jika kita menekan button send,jika kita membuka parameter notes, dengan port 3000, yang mana isinya merupakan data-data yang ada pada database dengan jumlah 10 data, serta menampilkan status terkini server dan lain sebagainya.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-3.JPG)
8. Selanjutnya jika kita menuliskan query string setelah parameters ***notes*** seperti misalnya :
```
localhost:3000/notes?id=3
```
maka data yang dihasilkan berupa notes yang memiliki nilai id = 3, seperti gambar dibawah ini
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-4.JPG)
*mengapa kok nilai totalPages = null ? karena kita belum mengisi/memasukkan querystring untuk pages dan limit*

9.Disini kita menggunakan query string, untuk pengertian querystring sendiri menurut saya yaitu kita bisa mengirim data melalui query url, untuk lebih jelasnya seperti url dibawah ini
```
localhost:3000/notes?pages=1&limit=3
```

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-5.JPG)

*url diatas memiliki query string yaitu pages=1 & limit=3 yang mana fungsinya untuk **membuat 1 halaman pertama berisikan data yang ada pada table description***

10. Selain itu, silahkan coba url 
```
localhost:3000/notes?search=bandung
```
dan lihat hasilnya.

11. Adapun selain method **GET**, kita bisa menggunakan method **POST** dengan memasukkan url seperti dibawah ini<br>
![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-6.JPG)
*fungsinya untuk apa sih url diatas?* Fungsinya yaitu untuk mengirim data yang kita masukkan didalam body POSTMAN, kedalam database table description yang mana nilainya berupa inputan yang sesuai dengan nama keynya.dan apabila berhasil maka... coba kalian simpulkan sendiri.

12. Selain itu jika ingin menghapus data, kita bisa mengikuti masukkan url ini 
```
localhost:3000/notes/{id_note_yang_ingin_dihapus}
```
* jangan lupa untuk diganti methodnya dari **POST** menjadi **DELETE**

13. Dan untuk updatenya, caranya hampir sama dengan POST yang membedakannya adalah, jika update(PATCH) dia harus menambahkan 1 parameter lagi setelah end point **notes**, untuk lebih mudahnya lagi simak baik-baik gambar dibawah ini.<br>

![alt text](https://raw.githubusercontent.com/maslow123/restful-notes-app/master/documentation/cap-7.JPG)

*disini saya ingin mengubah kalimat sebelumnya "I want trip to jogja" => "I want trip to bandung" dan jangan lupa masukkan parameter setelah notes, parameter yang diisi merupakan id dari data tersebut.*

14. Selesai.


