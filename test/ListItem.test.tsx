import React from 'react';
import { Provider } from 'react-redux'
import store from '../src/redux/store';
import ListItem from '../src/components/list/ListItem';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe("ListItem test", () => {
    test("should show title and description", () => {
		const testProps = {
			title: 'Test Title',
			desc: 'Test description'
		}

        render(
			<Provider store={store}>
				<ListItem title={testProps.title} desc={testProps.desc} completed={false} id="test_id"/>
			</Provider>
		);

        expect(screen.getByText(testProps.title)).toBeDefined()
        expect(screen.getByText(testProps.desc)).toBeDefined()
    })
})