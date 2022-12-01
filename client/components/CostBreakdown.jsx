import React from "react";
import CostSummary from "./CostSummary";
import GraphSummary from "./GraphSummary";

function CostBreakdown() {
  return (<>
    <h2>The CostBreakdown component</h2>
    <GraphSummary />
    <CostSummary />
  </>)

}

export default CostBreakdown