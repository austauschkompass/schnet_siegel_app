import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Client from './client'

const root = document.getElementById('schnet-ratings-widget')

const client = new Client({
  // DEPRECATED: we should not rely on build process to set defaults...
  host: process.env.REACT_APP_API_HOST,
  prefix: process.env.REACT_APP_API_PREFIX
})

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
