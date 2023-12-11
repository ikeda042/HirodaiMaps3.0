import React from 'react';
import ButtonAppBar from './Navbar';
import BottomNav from './BottomNavigation';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function MapAll({ props }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

    return (
        <Link>
            <div>
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                    <ButtonAppBar checkpointID={checkpointID} />
                </div>
                <iframe
                    id="mapIframe"
                    src={"/map/map.html#16/34.4012/132.7153"}
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