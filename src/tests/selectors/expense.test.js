input selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'zoo',
    note: 'one',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'high',
    note: 'one two',
    amount: 155,
    createdAt: -1000
}, {
    id: '3',
    description: 'credit bard',
    note: '',
    amount: 4500,
    createdAt: 
}]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2]
    ]);
});