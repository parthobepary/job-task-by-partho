import React from 'react';
import ConferenceInfo from '../components/conferneceinfo/ConferenceInfo';
import NavBar from '../layout/NavBar';

const Conference = () => {
    return (
        <div>
            <NavBar>
                <ConferenceInfo></ConferenceInfo>
            </NavBar>
        </div>
    );
};

export default Conference;