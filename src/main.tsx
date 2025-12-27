import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App.tsx";

// @ts-expect-error: root is not going to be null, ever.
const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)