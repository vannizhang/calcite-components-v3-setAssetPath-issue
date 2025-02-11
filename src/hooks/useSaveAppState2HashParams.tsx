import { useAppSelector } from '@store/configureStore';
import { selectMapCenter, selectMapZoom } from '@store/Map/selectors';
import { saveMapCenterToHashParams } from '@utils/url-hash-params';
import React, { useEffect } from 'react';

export const useSaveAppState2HashParams = () => {
    const mapCenter = useAppSelector(selectMapCenter);
    const zoom = useAppSelector(selectMapZoom);

    useEffect(() => {
        saveMapCenterToHashParams(mapCenter, zoom);
    }, [mapCenter, zoom]);
};
