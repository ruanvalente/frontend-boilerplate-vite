import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutPage } from '../about'

describe('<AboutPage />', () => {
  it('renders correctly', () => {
    render(<AboutPage />)
    const element = screen.getByTestId('about-page')
    expect(element).toBeTruthy()

    const text = "AboutPage"
    expect(element.textContent).eql(text)
  })
})
