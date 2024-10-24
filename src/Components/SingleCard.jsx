import React from 'react'

import { Card } from "flowbite-react";
function SingleCard({ name, phnNum, email, img }) {
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
        </Card>
    )
}

export default SingleCard