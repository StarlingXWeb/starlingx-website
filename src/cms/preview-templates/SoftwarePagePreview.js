/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { SoftwarePageTemplate } from "../../templates/software-page";

const SoftwarePagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  const entryIntro = entry.getIn(["data", "intro", "columns"]);
  const columnsList = entryIntro ? entryIntro.toJS() : [];

  const entryArchitecture = entry.getIn(["data", "architecture", "columns"]);
  const architectureColumns = entryArchitecture ? entryArchitecture.toJS() : [];

  const entryIntegration = entry.getIn([
    "data",
    "integration",
    "table",
    "columns",
  ]);
  const integrationColumns = entryIntegration ? entryIntegration.toJS() : [];

  if (data) {
    return (
      <SoftwarePageTemplate
        title={entry.getIn(["data", "title"])}
        subTitle={entry.getIn(["data", "subTitle"])}
        intro={{
          video: entry.getIn(["data", "intro", "video"]),
          text: entry.getIn(["data", "intro", "text"]),
          columns: columnsList,
        }}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

SoftwarePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SoftwarePagePreview;
