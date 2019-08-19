// Test away!
import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';


describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('should default to unlocked and open', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/open/i)).toBeTruthy();
        expect(queryByText(/unlocked/i)).toBeTruthy();
    });

    it('should display closed if closed prop is true', () => {
        const { queryByText } = render(<Display closed={true} locked={true} />);
        expect(queryByText(/closed/i));
    });

    it('should display open if closed prop is false', () => {
        const { queryByText } = render(<Display closed={false} locked={true} />);
        expect(queryByText(/open/i));
    });

    it('should display locked if locked prop is true', () => {
        const { queryByText } = render(<Display closed={true} locked={true} />);
        expect(queryByText(/locked/i));
    });

    it('should display unlocked if locked prop is false', () => {
        const { queryByText } = render(<Display closed={false} locked={false} />);
        expect(queryByText(/unlocked/i));
    });

    it('should use red-led class when locked or closed', () => {

    });

    it('should use green-led class when unlocked or open', () => {

    });
    
});