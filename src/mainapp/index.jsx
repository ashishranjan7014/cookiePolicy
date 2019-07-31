import React, { useEffect } from 'react';
import { PageView, initGA, Event } from '../tracking';
import Routers from '../router';

const MainApp = () => {
    useEffect(() => {
        initGA('UA-000000-1');
        PageView();
        Event()
    })
    return (
        <Routers />
    );
};

export default MainApp;