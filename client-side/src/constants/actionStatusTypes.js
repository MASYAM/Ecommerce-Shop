// @flow

const COMPLETED = 'completed';
const PENDING = 'pending';
const STARTED = 'started';
const ERROR = 'error';
const UNKNOWN = 'unknown';

export const ActionStatusTypeValues = {
  UNKNOWN,
  PENDING,
  COMPLETED,
  STARTED,
  ERROR,
};

export type ActionStatusType = $Keys<typeof ActionStatusTypeValues>
