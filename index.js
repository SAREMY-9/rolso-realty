import React from "react";
import { createRoot } from "react-dom/client";
import Services from "./react-components/Services.js";

const root = createRoot(document.getElementById("services-root"));
root.render(<Services />);
