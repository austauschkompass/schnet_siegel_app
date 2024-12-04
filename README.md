# Schueleraustausch.net Bewertungssiegel Widget

Consider you are an organisation with the slug __exe__ and want to include the widget,
add the following to your own website's `<body>`:

```
<div id='schnet-ratings-widget' data-organisation='exe'></div>
<script src='https://assets.schueleraustausch.de/js/schnet-ratings-widget.js'></script>
```

## Usage as React Component

You can also install this repository as a dependency and integrate the Widget as a React component.

To add it to your `package.json` run:

```
yarn add git+ssh://git@github.com/austauschkompass/schnet_siegel_app.git#semver:^0.1.1
```

Then import and use it in your project via (assuming your organisation slug is `exe`):

```jsx
import { SchnetSiegelComponent } from 'schnet_siegel_app'

const MyComponent = () => {

  return (
    <>
      <h1>My Component</h1>
      <SchnetSiegelComponent organisation={'exe'} />
    </>
  )
}

```
