import React from 'react';

import Button from "../../Button"

const S6CTA = (props) => {
  return (
    <>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">{props.Title}</h3>
        <p className="mt-8 text-xl font-light">
            {props.Description}
          
        </p>
        <p className="mt-8">
          <Button size="xl">{props.ButtonText}</Button>
        </p>
      </section>
    </>
  );
};

export default S6CTA;
