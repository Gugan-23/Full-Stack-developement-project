import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Location = () => {
    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [formData, setFormData] = useState({
        latitude: '',
        longitude: '',
        name: '',
        description: ''
    });

    useEffect(() => {
        const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
        setLocations(storedLocations);
    }, []);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { latitude, longitude, name, description } = formData;
        const newLocation = { name, description, latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

        if (name && description && !isNaN(newLocation.latitude) && !isNaN(newLocation.longitude)) {
            const updatedLocations = [...locations, newLocation];
            setLocations(updatedLocations);
            localStorage.setItem('locations', JSON.stringify(updatedLocations));
            alert("Location added successfully!");
            setFormData({ latitude: '', longitude: '', name: '', description: '' });
        } else {
            alert("Please provide valid inputs.");
        }
    };

    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation([latitude, longitude]);
            },
            (error) => {
                alert(error.message);
            }
        );
    };

    const handleShowDetails = () => {
        let details = "Stored Locations:\n";
        locations.forEach((loc, index) => {
            details += `${index + 1}. Name: ${loc.name}, Description: ${loc.description}, Latitude: ${loc.latitude}, Longitude: ${loc.longitude}\n`;
        });
        alert(details);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                width: '20%',
                backgroundColor: 'rgba(181, 37, 37, 0.038)',
                padding: '20px',
                boxSizing: 'border-box',
                backdropFilter: 'blur(5px)',
                position: 'fixed',
                height: '100vh'
            }}>
                <h1>Add Location</h1>
                <nav>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="/user-dashboard">Home</a></li>
                        <li><button onClick={handleCurrentLocation}>Current Location</button></li>
                        <li><button onClick={handleShowDetails}>Details</button></li>
                    </ul>
                </nav>
            </div>
            <main style={{ marginLeft: '20%', width: '80%', padding: '20px' }}>
                <div style={{ height: '500px', width: '100%', marginBottom: '20px' }}>
                    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {locations.map((loc, index) => (
                            <Marker key={index} position={[loc.latitude, loc.longitude]}>
                                <Popup>
                                    <b>{loc.name}</b><br />{loc.description}
                                </Popup>
                            </Marker>
                        ))}
                        {currentLocation && (
                            <Marker position={currentLocation}>
                                <Popup>
                                    You are here
                                </Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </div>
                <form onSubmit={handleSubmit} style={{
                    width: '100%',
                    maxWidth: '500px',
                    backgroundColor: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'left'
                }}>
                    <label htmlFor="latitude">Latitude:</label>
                    <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleFormChange}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <label htmlFor="longitude">Longitude:</label>
                    <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleFormChange}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <label htmlFor="name">Location Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#555',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>Add Location</button>
                </form>
            </main>
        </div>
    );
};

export default Location;
