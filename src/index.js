import React from "react";
import PropTypes from "prop-types";
import { SvgLoader, SvgProxy } from "react-svgmt";

import Carte from "./Carte";
import { hasPetiteCouronne, normalizeDpt } from "./departements";

const France = ({ greenColor, orangeColor, redColor, highlightColor, departements }) => {
  const dpts = [
    ...departements,
    ...(hasPetiteCouronne(departements) ? ["75-92-93-94"] : [])
  ];

  return (
    <SvgLoader svgXML={Carte}>
      <SvgProxy selector="#carte" fill={greenColor} />
      {dpts.map(dpt => (
        <SvgProxy
          key={dpt}
          selector={`#dpt-${normalizeDpt(dpt)}`}
          fill={highlightColor}
        />
      ))}
    </SvgLoader>
  );
};

France.propTypes = {
  greenColor: PropTypes.string,
  orangeColor: PropTypes.string,
  redColor: PropTypes.string,
  departements: PropTypes.array,
  highlightColor: PropTypes.string
};

France.defaultProps = {
  greenColor: "#74B4FF",
  orangeColor: "#FF8C00",
  redColor: "#FF0000",
  highlightColor: "#b3ff75",
  departements: []
};

export default France;
