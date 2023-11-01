import { useEffect, useState } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './Map.css'

async function fetchIps() {
    const query = await fetch('http://192.168.1.18:8080/api/v1/geolocate')
    const ips = await query.json()
    return ips
}

export const  Map = () => {
        const [ips, setIps] = useState([])
        console.log(ips)
        const array = [[3.4481066,-76.5671378], [3.4541254,-76.5282079], [4.6486206,-74.2726238], [6.2443677,-75.6636144], [10.9839694,-74.9004204]]
        useEffect(function() {
            fetchIps().then((fetchedIps) => setIps(fetchedIps))
        }, [])
    
    return(
        <MapContainer center={[3.4541254,-76.5282079]} zoom={13} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {array.map(coordinate => (
            <Marker key={coordinate} position={coordinate}>
                <Popup>{coordinate}</Popup>
            </Marker>
            ))}
        </MapContainer>
    )
}
    
