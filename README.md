# Test React App
My first React project. Don't mind if it's buggy sometimes :)

## Important!
I used `json-server` to test this application. So make sure you run it as well as `npm start`
* use `npx json-server -p 3500 -w data/data.json` you may choose your own location as the last argument
* get started with this data.json:
```json
{
  "saved-kanji-list": [
    {
      "id": 1,
      "checked": false,
      "writing": "人",
      "onReadings": ["ニン", "ジン"],
      "kunReadings": ["ひと"],
      "meaning": "human"
    },
    {
      "id": 2,
      "checked": false,
      "writing": "一",
      "onReadings": ["イチ"],
      "kunReadings": ["ひと.つ"],
      "meaning": "one"
    },
    {
      "id": 3,
      "checked": false,
      "writing": "実",
      "onReadings": ["ジツ"],
      "kunReadings": ["み", "みの.る"],
      "meaning": "reality"
    }
  ]
}
```

## Screenshot
![image](https://user-images.githubusercontent.com/55813967/218232156-65327719-a4da-4882-a5b8-f59b8a8c565a.png)
