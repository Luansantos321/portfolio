import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/projetos/:slug"
                        element={<ProjetoDetalhes />}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;