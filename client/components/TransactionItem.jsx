import React from "react";

function TransactionItem({ transactionData }) {

  return (
    <li>
    {`${transactionData.Code} $${transactionData.Amount * -1} `}
    {
      transactionData.Category
        ?
        <>
          <button>Edit</button>
          <button>Delete</button>
        </>
        :
        <button>Add</button>
    }
    </li>
  )
}

export default TransactionItem
