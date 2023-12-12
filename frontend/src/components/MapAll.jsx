import React from 'react';
import ButtonAppBar from './Navbar';
import BottomNav from './BottomNavigation';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MapAll({ props }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation(); 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getQridFromQueryParam = param => new URLSearchParams(window.location.search).get(param);
    const QRID = getQridFromQueryParam("qrid");

    const checkpointID = QRID ? QRID : "0";
    const queryParams = new URLSearchParams(location.search);
    const lat = queryParams.get('lat');
    const lon = queryParams.get('lon');

    return (
        <Link>
            <div>
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                    <ButtonAppBar checkpointID={checkpointID} />
                </div>
                <iframe
                    id="mapIframe"
                    src={"/map/map_large.html#14/" + lat + "/" + lon + "/&title=現在地"}
                    style={{
                        height: '600px',
                        width: `${windowWidth}px`, // ここでウィンドウの幅に基づいて幅を設定
                        border: '2px solid black',
                        marginTop: '60px',
                        marginBottom: '90px'
                    }}
                    title="Map"
                ></iframe>
                <BottomNav />
            </div>
        </Link>
    );
}

export default MapAll;