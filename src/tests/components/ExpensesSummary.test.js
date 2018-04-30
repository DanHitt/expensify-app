import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect (wrapper).toMatchSnapshot();
});

test('should render expenses summary with multi expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={4444444} />);
    expect (wrapper).toMatchSnapshot();
});