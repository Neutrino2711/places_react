import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './PlaceForm.css';

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

const UpdatePlace = () => {

    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return <div>
            <h2>Could not find place!</h2>
        </div>
    }


    return (
        <form className='place-form'>
            <Input
                id="title"
                element="input"
                type="input"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter valid Title."
                onInput={() => { }}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter valid description(min 5 chars)."
                onInput={() => { }}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disable={true}>UPDATE PLACE</Button>
        </form>
    );
};

export default UpdatePlace;