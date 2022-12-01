export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

export function receiveTransactionsAction(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    payload: transactions,
  }
}
