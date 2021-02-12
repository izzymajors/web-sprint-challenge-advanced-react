import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

const { debug } = render(<CheckoutForm/>);


});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);


    userEvent.type(firstNameInput, "");
    userEvent.type(lastNameInput, "");
    userEvent.type(addressInput, "");
    userEvent.type(cityInput, "");
    userEvent.type(stateInput, "");
    userEvent.type(zipInput, "");

    const button = screen.getByRole('button', {name: /checkout/i});

    userEvent.click(button);

     const showSuccessMessage = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);

    expect(showSuccessMessage).toBeTruthy();
});
