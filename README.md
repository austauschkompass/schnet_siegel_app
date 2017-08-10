# Schueleraustausch.net Bewertungssiegel Widget


Consider you are an organisation with the slug __exe__ and api-token 'your-token-here' and want to include the widget, add the following to your own website's `<body>`:

```
<div id='schnet-siegel-widget' data-organisation='exe' data-token='your-token-here'></div>
<script src='https://assets.schueleraustausch.de/js/schnet-siegel-widget.js'></script>
```

## SCHDE-Api: 

single organisation:

```
curl -H "Authorization: Token token=xxxxxx" http://localhost:3000/api/v2/rating_stats/gyg
```
all organisations:
```
curl -H "Authorization: Token token=xxxxxx" http://localhost:3000/api/v2/rating_stats
```
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
