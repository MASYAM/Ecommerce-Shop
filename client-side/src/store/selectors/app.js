// @flow

import { AppReducerStates } from '../reducers/app';
import { ViewActionStateInfo } from '../../models/common/ViewActionStateInfo';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

export const selectDatastore = ({ app }): AppReducerStates => app;

export const selectViewActionStatus = (
    state,
    viewId: string,
    actionId: string = 'default',
): ViewActionStateInfo => {
    const map = selectViewActionMap(state, viewId);

    if (map && map[actionId]) {
        return map[actionId];
    }
    return {
        viewId,
        actionId,
        lastRequest: 0,
        status: ActionStatusTypeValues.UNKNOWN,
    };
};

export const selectViewActionMap = (state, viewId: string): any => {
    const datastore = selectDatastore(state);
    if (!viewId || !datastore || !datastore.viewBasedRequests) {
        return {};
    }

    if (!datastore.viewBasedRequests || !datastore.viewBasedRequests[viewId]) {
        return {};
    }

    return { ...datastore.viewBasedRequests[viewId] };
};

export const getViewId = ({ navigation }): string => {
    return navigation && navigation.state ? navigation.state.key : '';
};
