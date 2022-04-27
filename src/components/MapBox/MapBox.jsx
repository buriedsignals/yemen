import { useRef, useState, useEffect } from 'react'
import * as Style from './MapBox.syles'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import useStore from '@/helpers/store'

export default function MapBox() {
  const [mapFilterDate] = useStore((state) => [state.mapFilterDate])
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnVyaWVkc2lnbmFscyIsImEiOiJjbDBhdmlhZTgwM3dtM2RxOTQ5cndsYXl0In0.Gvcq3DBOKDVRhy3QLjImiA'
  const mapRef = useRef(null)
  const map = useRef(null)
  useEffect(() => {
    if (map.current) {
      let filter = ['all']
      if (useStore.getState().mapFilterDate != 'All') {
        filter.push(["in", "years", useStore.getState().mapFilterDate]);
      }
      map.current.setFilter('yemen', filter);
    }
  }, [
    useStore.getState().mapFilterDate
  ])
  useEffect(() => {
    if (map.current) {
      map.current.resize();
    }
  }, [
    useStore.getState().openPopup
  ])
  useEffect(() => {
    if (map.current) map.current.resize()
    if (map.current) return
    mapboxgl.clearStorage()
    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/buriedsignals/cl233ifc5000314rz6gwh27q5',
    })
    map.current.dragRotate.disable()
    map.current.touchZoomRotate.disableRotation()
    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'bottom-right'
    )

    map.current.on('click', (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ['yemen'],
      })
      if (!features.length) {
        return
      }
      const feature = features[0]
      // feature.properties.media_url = "https://www.youtube.com/embed/Buq0poVzSZU"
      useStore.setState({
        openPopup: true,
        popupProperties: feature.properties,
      })
      setTimeout(() => {
        map.current.flyTo({center: feature.geometry.coordinates})
      }, 0)
    })
  }, [])
  return (
    <>
      <Style.MapContainer
        ref={mapRef}
      />
    </>
  )
}
