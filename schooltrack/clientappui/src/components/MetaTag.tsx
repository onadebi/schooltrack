import React from "react";
import { Helmet } from "react-helmet-async";
import appsettings from "../config/appsettings";

interface IProps {
  title: string;
  description?: string;
}

const MetaTag: React.FC<IProps> = ({
  title = `ONX ${appsettings.appName}`,
  description=`${appsettings.appName}`,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </>
  );
};

export default MetaTag;