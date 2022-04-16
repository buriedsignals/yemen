import { MapboxEvent } from 'mapbox-gl'
import MapBox from '../MapBox/MapBox'
import * as Style from './Map.syles'

export default function Map() {
  return (
    <Style.MapContainer>
      <MapBox />
    </Style.MapContainer>
  )
}
