import React from 'react';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(
    <App organisation='GYG'
         num_ratings={42}
         updated_at='2017-08-01 12:00'
         average={3.67487}
         url='http://example.com'
    />
  );
});

it('renders always given content', () => {
  const tree = renderer.create(
    <App organisation='GYG'
         num_ratings={42}
         updated_at='2017-08-01 12:00'
         average={3.67487}
         url='http://example.com'
    />
  ).toJSON()
    expect(tree).toMatchSnapshot()
});
