import React from 'react'

import { BsFacebook } from 'react-icons/bs';
import { Card, Button } from "flowbite-react";
function SingleCard({ name, phnNum, email, img, facebook }) {
    return (
        <Card
            className="max-w-sm mx-auto bg-[#15150B] text-white border-0 shadow-md shadow-themeColor"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={img}
        >
            <h5 className="text-2xl font-bold tracking-tight">
                {name}
            </h5>
            <p className="font-normal">
                <li>Phone: {phnNum}</li>
                <li>E-mail: {email}</li>
            </p>
            <Button onClick={() => {
                window.open(facebook)
            }} className={`mt-3 ${!facebook ? "opacity-25 pointer-events-none" : null}`} color="blue" pill>
                <BsFacebook className='mr-2 mt-1' /> Facebook
            </Button>
        </Card>
    )
}

export default SingleCard