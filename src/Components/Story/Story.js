import React from "react";
import Header from "../Header/Header";
import "./Story.scss";

const Story = () => {
  return (
    <div>
      <Header />

      <section className="story">
        <div className="story__heading">
          <h1>The Shopify Awards</h1>
        </div>

        <div clasname="story__blurb">
          <p>
            The Shopify Awards, popularly known as the Shopies, are awards for
            artistic and technical merit in the Devloper world. Given annually
            by the Shopify, the awards are in recognition of excellence in
            cinematic achievements, as assessed by the Shopify's voting
            membership. The various category winners are awarded a copy of a
            golden statuette, officially called the "Shopify Award of Merit",
            although more commonly referred to by its nickname, the "Shoppie".
          </p>
        </div>
      </section>
    </div>
  );
};

export default Story;
