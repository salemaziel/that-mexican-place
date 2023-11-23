import React from 'react'

import S1Hero from "./s1Hero"
import S2BizDetailsCard from "./s2BizDetailsCard"
//import S3MenuButton from "./s3MenuButton"
//import S4FeaturedSpecials from "./s4FeaturedSpecials"

import BG from "../../../images/wood-bg.jpg"



const HomePage = (props) => {
    return(
        <>
        <S1Hero
        bgImage={BG}
        Title="That Mexican Place"
        Description="California Made, With Mexican Roots"
        ButtonText=""
        BelowButtonText=""
        />

        <S2BizDetailsCard />
        {/*<S4FeaturedSpecials /> */}
       
         {/*}   <S3MenuButton />*/}

        </>
    )
} 

export default HomePage