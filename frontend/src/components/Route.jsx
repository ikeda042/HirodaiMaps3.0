import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonAppBar from './Navbar';
import MapalllNav from './MapallNav';
import buildings from './buildingsData';

function Route({props}) {
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

    const buildingId = queryParams.get('buildingId');
    const lat = buildings.find((item) => item.buildingId === buildingId).lat;
    const lon = buildings.find((item) => item.buildingId === buildingId).lon;
    const title = buildings.find((item) => item.buildingId === buildingId).title;
    return (
        <Link>
            <div>
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                    <ButtonAppBar checkpointID={checkpointID} />
                </div>
                <iframe
                    id="mapIframe"
                    src={"/map_routes/"+ checkpointID + "to" + buildingId+"/route.html?"+ "qrid="+QRID+"&lat=" +lat + "&lon=" + lon + "&title=" + title}
                    style={{
                        height: '600px',
                        width: `${windowWidth}px`, // ここでウィンドウの幅に基づいて幅を設定
                        border: '2px solid black',
                        marginTop: '121px',
                        marginBottom: '-40px',
                        marginLeft: '0px',
                        marginRight: '-10px'
                    }}
                    title="Map"
                ></iframe>
                <MapalllNav lat = {lat} lon = {lon} qrid = {QRID} />
            </div>
        </Link>
    );
}


export default Route;
