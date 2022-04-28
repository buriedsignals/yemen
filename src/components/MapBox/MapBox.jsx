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
      setTimeout(() => {
      map.current.resize();
      }, 0)
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ['yemen'],
      })
      if (!features.length) {
        useStore.setState({
          openPopup: false
        })
        map.current.resize();
        return
      }
      const feature = features[0]
      const coordinates = feature.geometry.coordinates.slice();
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        }
      const popup = new mapboxgl.Popup({
        anchor: 'top-left',
        offset: [-((feature.layer.paint['circle-radius'] * 2.75) / 2), -((feature.layer.paint['circle-radius'] * 2.75) / 2)],
      })
        .setLngLat(coordinates)
        .setHTML(
          `
            <div class="marker" style="width: ${ feature.layer.paint['circle-radius'] * 2.75 }px; height: ${ feature.layer.paint['circle-radius'] * 2.75 }px"></div>
          `
        )
        .addTo(map.current)

      useStore.setState({
        openPopup: true,
        popupProperties: feature.properties,
      })
      setTimeout(() => {
        map.current.flyTo({center: coordinates})
      }, 0)
    })
  }, [])
  useEffect(() => {
    if (!useStore.getState().openPopup) {
      const popup = document.getElementsByClassName('mapboxgl-popup');
      if ( popup.length ) {
          popup[0].remove();
      }
    }
  }, [useStore.getState().openPopup])
  return (
    <>
      <Style.MapContainer
        ref={mapRef}
      />
    </>
  )
}
