import App from './App'
import Client from './client'
import React, { useState, useEffect } from 'react'

const SchnetSiegelComponent = ({ organisation }) => {
  const client = new Client({
    host: 'https://www.schueleraustausch.de',
    prefix: '/api/v2',
  })
  const [stats, setStats] = useState()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await client.getStats(organisation)
        if (res.errors) {
          console.warn(res.errors[0].title)
        } else {
          setStats(res.data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchStats()
  }, [])

  if (stats) {
    return (
      <App
        organisation={stats.organisation_shortname}
        num_ratings={stats.num_ratings}
        updated_at={stats.updated_at}
        average={stats.average}
        url={
        `https://www.schueleraustausch.net/organisationen/${stats.organisation_slug}/bewertungen`
        }
      />
    )
  }
  else {
    return (
      <p>Loading...</p>
    )
  }
}

export {
  App as BareApp,
  SchnetSiegelComponent,
  Client
}
