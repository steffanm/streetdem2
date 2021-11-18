import React from "react";
import ButtonSignUp from "../common/buttonSignUp";
import { H2, H5, Text } from "@blueprintjs/core";

const Home = () => {
  return (
    <div>
      <H2></H2>
      <br />
      <H5>How It Works</H5>
      <Text>
        1. Create an account. <br /> 2. Take steps to improve your life with the
        help of our participating providers, who will add a record to your
        account.
        <br /> 3. Then use the records of all your hard work to ask prosecutors
        and courts to reduce your charges or sentences.
        <br />
      </Text>
      <br />
      <H5>Ready to get started?</H5>
      <Text>
        For service providers, public defenders, prosecutors, and courts
        interested in participating, please email us{" "}
        <a href="mailto: functional@streetdemocracy.org">
          functional@streetdemocracy.org
        </a>
        .
      </Text>
      <ButtonSignUp />
    </div>
  );
};
export default Home;
