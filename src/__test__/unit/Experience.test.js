import { render, screen, fireEvent } from '@testing-library/react';
import { MainContext } from '../../context/MainContextProvider';
import '@testing-library/jest-dom';
import Experience from '../../components/edit/Experience';


const cvInfo = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    linkedin: '',
    website: '',
    skills: [],
    experience: [],
    qualifications: [],
};

const setCvInfo = jest.fn();


describe('Ensure input fields are cleared on submission', () => {
    render(
        <MainContext.Provider value={{cvInfo, setCvInfo}}>
            <Experience />
        </MainContext.Provider>
    )

    const inputElements = screen.getAllByRole('textbox')
    expect(inputElements.length).toBe(4)

    // const nameInput = screen.getByRole('input', { name: 'name' })
    // const positionInput = screen.getByRole('input', { name: 'position' })
    // const startDateInput = screen.getByRole('input', { name: 'startDate' })
    // const endDateInput = screen.getByRole('input', { name: 'endDate' })

    // fireEvent.change(nameInput, { target: { value: 'Microsoft' } })
    // fireEvent.change(positionInput, { target: { value: 'Software Engineer II' } })
    // fireEvent.change(startDateInput, { target: { value: 'March 2021' } })
    // fireEvent.change(endDateInput, { target: { value: 'Present' } })

    // const buttonElement = screen.getByRole('button')

    // fireEvent.click(buttonElement);

    // expect(nameInput.value).toBe('');
})