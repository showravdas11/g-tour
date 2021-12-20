import React, { useEffect, useState } from 'react';
import SeeSingleService from '../SeeSingleService/SeeSingleService';

const SeeAllServices = () => {
    const [singles, setSingles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tour')
            .then(res => res.json())
            .then(data => setSingles(data))
    }, [])
    return (
        <div className="container">
            <h1 className='mt-5 text-center'>Find The Best Tour</h1>
            <div className="row">
                {
                    singles.map(single => <SeeSingleService
                        key={single.name}
                        single={single}
                    >
                    </SeeSingleService>)
                }
            </div>
        </div>
    );
};

export default SeeAllServices;