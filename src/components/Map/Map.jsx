import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import './Map.css'

async function fetchIps() {
    const query = await fetch('http://192.168.1.18:8080/api/v1/geolocate')
    const ips = await query.json()
    return ips
}

export const  Map = () => {
        const [ips, setIps] = useState([])
        useEffect(function() {
            fetchIps().then((fetchedIps) => setIps(fetchedIps))
        }, [])
    
    return(
        <MapContainer center={[21.201454,-39.9573199]} zoom={2} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {ips.map(coordinate => (
            <Circle key={coordinate[0]} center={coordinate[1]} radius={10000} pathOptions={{ color: coordinate[2]>0?'red':'green' }}> 
                <Popup>
                    {coordinate[0]}
                </Popup>
            </Circle>
            
            ))}
        </MapContainer>
    )
}
    
