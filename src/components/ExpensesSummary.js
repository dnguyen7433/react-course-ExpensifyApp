import React from "react";
import {connect} from "react-redux";
import expenseTotal from "../selectors/expense-total";
import selectExpenses from '../selectors/expenses';
import numeral from "numeral";
export const ExpensesSummary = (props) => {
    const expenseCount = props.expenses.length;
    const expenseWord = props.expenses.length === 1 ? "expense":"expenses";
    const totalExpense = numeral(expenseTotal(props.expenses) / 100).format('$0,0.00')
    return (
        <div>
            Viewing {expenseCount} {expenseWord} totalling {totalExpense}
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state.expenses);
    return {
    expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect(mapStateToProps)(ExpensesSummary);