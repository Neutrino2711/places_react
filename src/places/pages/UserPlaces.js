import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Summit Building',
        description: 'One of vercatile spot to enjoy, work and many more.',
        imageUrl: 'https://summitbuilding.in/wp-content/uploads/2023/09/2022-09-09.jpg',
        address: 'Summit Building, TCG 3, 3, Padera - Raebareli Rd, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
        location: {
            lat: 26.8651022,
            lng: 81.0094014,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Summit Building',
        description: 'One of vercatile spot to enjoy, work and many more.',
        imageUrl: 'https://summitbuilding.in/wp-content/uploads/2023/09/2022-09-09.jpg',
        address: 'Summit Building, TCG 3, 3, Padera - Raebareli Rd, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
        location: {
            lat: 26.8651022,
            lng: 81.0094014,
        },
        creator: 'u2'
    },
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;