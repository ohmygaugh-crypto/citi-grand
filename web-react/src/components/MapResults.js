import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import MapGL, { Marker } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapResults() {
  const theme = useTheme()

  const style = {
    padding: '4px',
    color: '#fff',
    background: '#1978c8',
    borderRadius: '50%',
    cursor: 'pointer',
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 540,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const [viewport, setViewport] = useState({
    latitude: 47.78,
    longitude: -111.41,
    zoom: 11,
  })

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <MapGL
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/light-v9"
              accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={setViewport}
            />
            <Marker longitude={-111.41} latitude={47.78}>
              <div style={style}></div>
            </Marker>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <p>Detail View </p>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
