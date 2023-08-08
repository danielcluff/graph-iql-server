import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";

import "graphiql/graphiql.css";

const fetcher = createGraphiQLFetcher({
  url: "http://localhost:4000/",
});

function App() {
  return <GraphiQL fetcher={fetcher} />;
}

export default App;
