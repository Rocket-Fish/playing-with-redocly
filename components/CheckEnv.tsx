import React from "react";

export const CheckEnv = ({ trueChildren, falseChildren }) => {
  console.log(process.env.ENV_TRUTHYNESS, trueChildren, falseChildren);
  return (
    <div>
      {process.env.ORG_NAME === "true"
        ? trueChildren
        : process.env.ORG_NAME === "false"
        ? falseChildren
        : "CRITICAL ERROR ENV_TRUTHYNESS incorrectly setup"}
    </div>
  );
};

export default CheckEnv;
