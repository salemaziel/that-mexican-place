import React from 'react'

//import S1Hero from "./s1Hero"
import S2BizDetailsCard from "./s2BizDetailsCard"
//import S3MenuButton from "./s3MenuButton"
//import S2Features from "./s2Features"
//import S3SplitSections from './s3SplitSections'

//import S4FeaturedSpecials from "./s4FeaturedSpecials"
//import S4Stats from './s4Stats'
//import S5Testimonials from './s5Testimonials'
//import S6CTA from './s6CTA'

//import S1Hero2 from "./s1Hero2"
//import BG from "../../../images/mexican-serape-blanket-wooden-plank-background-wood-120257083.jpg"
//import BG from "../../../images/mexican-decoration.jpg"
//import BG from "../../../images/tacos+07.jpg"
import BG from "../../../images/front-restaurant.jpg"


import S1Hero3 from "./s1Hero3"


const HomePage = (props) => {
    return(
        <>
        <S1Hero3
        bgImage={BG}
        Title="That Mexican Place"
        Description="California Made, With Mexican Roots"
        ButtonText=""
        BelowButtonText=""
        />

        <S2BizDetailsCard />
        {/*<S4FeaturedSpecials />
       <S3MenuButton />*/}

       


        </>
    )
} 

export default HomePage