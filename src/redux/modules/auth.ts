import { createActions, handleActions } from 'redux-actions'
import { takeEvery } from 'redux-saga/effects'

interface AuthState {
  token: string | null
  loading: boolean
  error: Error | null
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
}

const prefix = 'my-books/auth'

/**
 * action creators
 *
 * success(token:string)
 * fail(error:Error)
 * pending()
 */
export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  { prefix }
)

// reducer  handleActions<State타입, Payload타입>
const reducer = handleActions<AuthState, string | Error>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload as string,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      token: null,
      loading: true,
      error: action.payload as Error,
    }),
  },
  initialState,
  { prefix }
)

export default reducer

// saga

export function* authSaga() {
  //yield takeEvery()
}
