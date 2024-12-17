import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fa, faker } from '@faker-js/faker';
import Register_Page from "../../e_Commerce_Page/registration_Page";

const register = new Register_Page;

Given("The user is on the registration page", ()=>{
    register.home_page()
    register.registration_Page()
})

When("The user enters their name, email, and password", ()=>{
    register.create_account(faker.person.firstName(), faker.person.lastName(), faker.internet.email(), "Test1234@", "Test1234@")
})

When("I submit the registration form", ()=>{
    register.submit()
})

Then("The user should be registered successfully",()=>{
    register.validate_registration_details()
})
Then("The user should be redirected to the welcome page", ()=>{
    register.Validate_Login_Page_url()
})

