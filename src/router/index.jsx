//路由配置

import { createBrowserRouter } from "react-router-dom";
import EditorPanel from "../pages/EditorPanel";
import SimulatorPanel from "../pages/SimulatorPanel";
import VerifierPanel from "../pages/VerifierPanel";
import LustrePanel from "../pages/LustrePanel";
import App from "../App";

//配置路由实例

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <EditorPanel />
            },
            {
                path: 'editor',
                element: <EditorPanel />
            },
            {
                path: 'simulator',
                element: <SimulatorPanel />
            },
            {
                path: 'verifier',
                element: <VerifierPanel />
            }
        ]
    },
    {
        path:'/lustre',
        element:<LustrePanel/>
    }
])

export default router