"use client";

import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function APIDocs() {
  return (
    <>
      <SwaggerUI url="http://localhost:8080/openapi.json" />
    </>
  );
}

export default APIDocs;
