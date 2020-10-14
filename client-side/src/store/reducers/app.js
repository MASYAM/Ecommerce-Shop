// @flow

import * as appTypes from '../../constants/appActionTypes';

import { ViewActionStateInfo } from '../../models/common/ViewActionStateInfo';
import { ActionStatusType } from '../../constants/actionStatusTypes';

type ViewBasedRequestsMapDataProp = {[key: string]: ViewActionStateInfo}

type ViewBasedRequestsMapProp = {[key: string]: ViewBasedRequestsMapDataProp}

export type AppReducerStates = {
    viewBasedRequests: ViewBasedRequestsMapProp,
};
const initialState: AppReducerStates = {
    viewBasedRequests: {},
};

export default function appReducer(
    state: AppReducerStates = initialState,
    action,
) {
    const { viewId, actionId = type, type, payload = {}, status, lastRequest } = action;

    if (!type) {
        return state;
    }
    let _actionId = actionId || type;
    let _lastRequest = lastRequest || Date.now();
    const { error = null } = payload;

    // For Dismiss View
    if (type === appTypes.DISMISS_VIEW) {

        const newState = { ...state };
        if (newState.viewBasedRequests[viewId]) {
            newState.viewBasedRequests[viewId] = undefined;
            delete newState.viewBasedRequests[viewId];
        }
        return newState;
    }
    // For Reset action state
    if (type === appTypes.RESET_VIEW_ACTION_STATE) {
        const newState = { ...state };
        if (newState.viewBasedRequests[viewId] && newState.viewBasedRequests[viewId][_actionId]) {
            newState.viewBasedRequests[viewId][_actionId] = undefined;
            delete newState.viewBasedRequests[viewId][_actionId];
        }
        return newState;
    }

    // If the request does not have viewId and status, ignore it.
    if (!status || !viewId) {
        return state;
    }

    console.log('[AppReducer] VBR: viewId=%s, actionId=%s, status=%s, ', viewId, _actionId, status);
    const newState = { ...state };
    const prevViewBasedRequests = state.viewBasedRequests || {};
    newState.viewBasedRequests = {
        ...prevViewBasedRequests,
    };

    const map = newState.viewBasedRequests[viewId] || {};
    map[_actionId] = { viewId, actionId: _actionId, status, lastRequest: _lastRequest, error };

    newState.viewBasedRequests[viewId] = map;


    return newState;
}
