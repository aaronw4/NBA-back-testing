import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { StatsContext } from './Context/StatsContext';
import { ResultsContext } from './Context/ResultsContext';

function renderWithRouter(component, stats = {}, results = {}) {
    function Wrapper({children}) {
        return (
            <StatsContext.Provider value={stats}>
                <ResultsContext.Provider value={{results}}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </ResultsContext.Provider>
            </StatsContext.Provider>
        )
    };

    return (
        render (component, {wrapper: Wrapper})
    )
}

export {renderWithRouter};
export * from '@testing-library/react';