import './styles/index.css';
import '@esri/calcite-components/dist/components/calcite-button.js';
import { setAssetPath } from '@esri/calcite-components/dist/components';
import { CalciteButton } from '@esri/calcite-components-react';

import React from 'react';
import { createRoot } from 'react-dom/client';

(() => {
    // setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets');

    const root = createRoot(document.getElementById('root'));

    root.render(
        <CalciteButton iconStart="launch">
            This is a launch button
        </CalciteButton>
    );
})();
