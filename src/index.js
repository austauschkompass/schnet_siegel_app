import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Client from './client'
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('schnet-ratings-widget')
const client = new Client()

if (root) {
  const organisation = root.dataset.organisation
  client.getStats(organisation)
    .then(res => {
      if (res.errors) {
        console.warn(res.errors[0].title)
      } else {
        ReactDOM.render(
            <App organisation={res.data.organisation_shortname}
                 num_ratings={res.data.num_ratings}
                 updated_at={res.data.updated_at}
                 average={res.data.average}
                 url={'https://www.schueleraustausch.net/organisationen/' + res.data.organisation_slug + '/bewertungen' }
                 />,
            root);
      }

    })
}
registerServiceWorker();
