# Schueleraustausch.net Bewertungssiegel Widget


Consider you are an organisation with the slug __exe__ and want to include the widget,
add the following to your own website's `<body>`:

```
<div id='schnet-ratings-widget' data-organisation='exe'></div>
<script src='https://assets.schueleraustausch.de/js/schnet-ratings-widget.js'></script>
```

## SCHDE-Api:

single organisation:

```
curl http://localhost:3000/api/v2/rating_stats/gyg
```
all organisations:
```
curl http://localhost:3000/api/v2/rating_stats
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
