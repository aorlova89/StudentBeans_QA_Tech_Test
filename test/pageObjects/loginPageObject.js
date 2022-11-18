const ParentPageObject = require('./parentPageObject')
const {assert} = require("chai");

class LoginPageObject extends ParentPageObject {
  emailSelector = '#email'
  passwordSelector = '#password'
  captchaFrameSelector = '[title="reCAPTCHA"]'
  captchaCheckbox = '#recaptcha-anchor-label'
  invalidTestEmail = 'test@test.com'
  invalidTestPassword = 'testingStuff'
  buttonSelector = '[element="button"]'

  async verifyLoginPage() {
    await this.isElementEqualToExpected($('p=Log in to your Student Beans account'), 'Log in to your Student Beans account')
  }

  async fill() {
    const email = await $(this.emailSelector)
    const password = await $(this.passwordSelector)
    await email.setValue(this.invalidTestEmail)
    await password.setValue(this.invalidTestPassword)

    let frame = await $(this.captchaFrameSelector)
    await browser.switchToFrame(frame)
    await $(this.captchaCheckbox).click()
    // ugly hack to pass captcha manually
    await browser.pause(10000)
    await browser.switchToParentFrame()
    await $$(this.buttonSelector)[3].click() // not the best selector for login btn
  }

  async verifyErrorMsg() {
    const err = await $('p*=The password you entered is incorrect')
    assert(await expect(await err.getText(), 'Actual does not match expected').to.contain('The password you entered is incorrect. Please try again'))
  }
}

module.exports = LoginPageObject
