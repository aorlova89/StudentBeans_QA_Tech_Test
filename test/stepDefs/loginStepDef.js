const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/loginPageObject')

const loginPageObject = new LoginPageObject()

Given('I open the log in function', async () => {
  await loginPageObject.goToLoginPage()
  await loginPageObject.verifyLoginPage()
})

When('I use the credentials email: test@test.com password: testingStuff', async () => {
  await loginPageObject.fill()
})

Then('Error message should display', async () => {
  await loginPageObject.verifyErrorMsg()
})
