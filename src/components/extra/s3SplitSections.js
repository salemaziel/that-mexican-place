import React from 'react'
import SplitSection from "../../SplitSection"
import SvgCharts from '../../../svg/SvgCharts';



const S3SplitSections = (props) => {
    return(
        <>
            <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">{props.Title1}</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            
            {props.Description1}
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          {props.Title2}
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          {props.Description2}
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          {props.Title3}
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          {props.Description3}
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

        </>
    )
}

export default S3SplitSections