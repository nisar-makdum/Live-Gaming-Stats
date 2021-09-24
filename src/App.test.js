import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App';

afterEach(() => {
  cleanup()
})

test('test', () => {
  expect(true).toBe(true)
})

test('it will render App component', () => {
  render(<App />)
  const appElement = screen.getByTestId('test-App')
  expect(appElement).toBeInTheDocument()
})


test('matches snapshot for App component', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})