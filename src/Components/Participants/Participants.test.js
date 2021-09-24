import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import GetParticipants from "./Participants"


afterEach(() => {
    cleanup()
})

test('test', () => {
    expect(true).toBe(true)
})

test('it will render GetParticipants component', () => {
    render(<GetParticipants />)
    const GetParticipantsElement = screen.getByTestId('test-GetParticipants')
    expect(GetParticipantsElement).toBeInTheDocument()
})

test('matches snapshot for GetCommunityImages', () => {
    const tree = renderer.create(<GetParticipants />).toJSON()
    expect(tree).toMatchSnapshot()
})