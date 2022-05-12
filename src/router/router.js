// Modules
import React, { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
//layouts
import { Footer, Header } from "../layouts";
//Pages
import { NoFound_404 } from "../views/page/404";
import { Home } from "../views/page/Home";

//subjects
import { InteresCompuestoHome, InteresCompuestoCalc, InteresCompuestoConcept } from "../views";

//Path
const path = require('./routerPath.json');
//interesPath
const InteresSimplePath = path.interes.intereSimple;
const InteresCompuestoPath = path.interes.interesCompuesto;

//ExportPath
export { InteresSimplePath, InteresCompuestoPath};

export const Render = () => {
    return (
        <StrictMode>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/a" element={<h1>intereSimple</h1>} />

                    <Route path={InteresCompuestoPath.path} element={<InteresCompuestoHome/>} />
                    <Route path={InteresCompuestoPath.subs.concept.path} element={<InteresCompuestoConcept/>}/>
                    <Route path={InteresCompuestoPath.subs.calc.path} element={<InteresCompuestoCalc/>}/>

                    <Route path="/about" element={<h3>Soy yo</h3>} />
                    <Route path="*" element={<NoFound_404 />} />
                </Routes>
            </main>
            <Footer />
        </StrictMode>
    );
};
