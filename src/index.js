import React from 'react'
import { createRoot } from 'react-dom/client'
import 'navigator.sendbeacon'
import packageJson from '../package.json'

import App from './App'
import Client from './client'

const { name: APP_NAME, version: APP_VERSION } = packageJson

navigator.sendBeacon(
  'https://api.apps.austauschkompass.de/' + APP_NAME + '/track',
  JSON.stringify({ version: APP_VERSION, url: document.location.href })
)

const root = document.getElementById('schnet-ratings-widget')
const client = new Client()

if (root) {
  const organisation = root.dataset.organisation
  client.getStats(organisation)
    .then(res => {
      if (res.errors) {
        console.warn(res.errors[0].title)
      } else {
        createRoot(root).render(
            <App organisation={res.data.organisation_shortname}
                 num_ratings={res.data.num_ratings}
                 updated_at={res.data.updated_at}
                 average={res.data.average}
                 url={'https://www.schueleraustausch.net/organisationen/' + res.data.organisation_slug + '/bewertungen' }
                 />
            );
      }

    })
}
