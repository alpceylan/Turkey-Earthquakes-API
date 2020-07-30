[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Turkey Earthquakes API

An API Service that you can get datas about earthquakes in Turkey.

Türkiye'deki deprem verilerini çekebileceğiniz bir API servisi.

<img src="https://user-images.githubusercontent.com/31375123/88917771-fe218080-d270-11ea-8532-01cfe02c7827.jpg" width=25% height=25%>

## Live Version

You can access live version through this url, please read entire document before using it.

Canlı versiyonuna aşağıdakı link ile ulaşabilirsiniz, lütfen kullanmadan önce tüm dokümanı okuyun.

https://turkiyedepremler.herokuapp.com/api

## Launching the API

You can launch the api with the code below.

API'yi aşağıdaki kod ile ayağa kaldırabilirsiniz.


Without nodemon:

```bash
npm start
```
If you have nodemon globally installed:

```bash
npm run start:dev
```

## Routes

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/ | `GET` | Empty | List latest 500 earthquakes. |
| /api/last-24-hours | `GET` | Empty | List earthquakes that happened in last 24 hours. |
| /api/by-date/:date | `GET` | Empty | You can get earthquakes in the date you want with this route the usage is like this: /20200729 (2020/07/29) |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Her zaman pull requestleri bekliyoruz. Büyük değişiklikler için ilk olarak issue açınız.

## Data

Datas are pulling from Kandilli Rasathanesi that affiliated to Bogazici University. Before using this api for commercial purpose please contact with Bogazici University.

Veriler Boğaziçi Üniversitesi Rektörlüğüne bağlı olan Kandilli rasathanesinden alınmaktadır. Ticari amaçlı kullanmadan önce lütfen Boğaziçi Üniversitesi ile iletişime geçin.

You can contact with me through ismetalpceylan@gmail.com

## License
[MIT](https://choosealicense.com/licenses/mit/)
