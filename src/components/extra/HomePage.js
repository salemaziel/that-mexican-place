import React from 'react'

import S1Hero from "./s1Hero"
import S2HoursLocation from "./s2HoursLocation"


import BG from "../../../images/wood-bg.jpg"




const HomePage = (props) => {
    const businessHours = [
        { name: "Sunday", hours: "8:00am - 10:00pm" },
        { name: "Monday", hours: "8:00am - 10:00pm" },
        { name: "Tuesday", hours: "8:00am - 10:00pm" },
        { name: "Wednesday", hours: "8:00am - 10:00pm" },
        { name: "Thursday", hours: "8:00am - 10:00pm" },
        { name: "Friday", hours: "8:00am - 10:00pm" },
        { name: "Saturday", hours: "8:00am - 10:00pm" },
      ];

    return(
        <>
        <S1Hero
        bgImage={BG}
        Title="That Mexican Place"
        Description="California Made, With Mexican Roots"
        />

       
        <S2HoursLocation hours={businessHours} />
        {/*<S4FeaturedSpecials />
       <S3MenuButton />*/}

       


        </>
    )
} 

export default HomePage