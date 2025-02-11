import './styles/index.css';
import '@components/calcite-components';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';
import { AppLayout } from '@components/AppLayout/AppLayout';

(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <ReduxProvider store={configureAppStore(preloadedState)}>
            <AppContextProvider>
                <AppLayout />
            </AppContextProvider>
        </ReduxProvider>
    );
})();
