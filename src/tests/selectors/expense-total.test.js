import expenseTotal from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expense", () => {
    expect(expenseTotal([])).toBe(0);
})

test("should correctly add up a single expense", () => {
    expect(expenseTotal([expenses[0]])).toBe(expenses[0].amount);
})

test("should correctly add up multiple expenses", () => {
    let Total = expenses[0].amount + expenses[1].amount + expenses[2].amount ;
    expect(expenseTotal(expenses)).toBe(Total);
})