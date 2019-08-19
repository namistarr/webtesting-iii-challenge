// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';



//Integration test:
describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); //generates a DOM tree

        //snapshots are a JSON representation of DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
    });

});

