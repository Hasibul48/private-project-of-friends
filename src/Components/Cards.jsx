import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'

function Cards() {

    const [stdData, setStdData] = useState([]);

    useEffect(() => {
        fetch('Class-Ten.json')
            .then((data) => data.json())
            .then((json) => setStdData(json))
    }, []);

    return (
        <div>

            <div className="container mx-auto mt-36">
                <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider md:pb-14 pb-6'>All Students</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        stdData.map(item => <SingleCard key={item.name} name={item.name} phnNum={item.phone_number} email={item.email} img={item.imgSource} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards