describe('webdriveruniversit -contact us page', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url('/Contact-Us/contactus.html');
    });
    it('valid submission -submit all information', async() => {
        
        await browser.pause(5000);
        //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const contactAddress = await $('//*[@name="email"]');
        //message
        const contactMessage = await $('//*[@name="message"]');
        //submit button
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue("Dimon");
        // await browser.pause(3000);

        await lastName.setValue("Baran");
        // await browser.pause(3000);

        await contactAddress.setValue("Dimon@email.com");
        // await browser.pause(3000);

        await contactMessage.setValue("Dimon still catche birds behind his house and eats them");
        // await browser.pause(3000);

        await submitButton.click();
        // await browser.pause(3000);

        const successfullSubmissionHeader = $('#contact_reply >h1');
        await expect(successfullSubmissionHeader).toHaveText('Thank You for your Message!');
    });
    it.only('invalid submission - dont submit all information', async () => {
       
        await browser.pause(5000);
        //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const contactAddress = await $('//*[@name="email"]');
        //message
        const contactMessage = await $('//*[@name="message"]');
        //submit button
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue("Dimon");
        // await browser.pause(3000);

        await lastName.setValue("Baran");
        // await browser.pause(3000);

        await contactAddress.setValue("Dimon");
        // await browser.pause(3000);

        await contactMessage.setValue("Dimon still catche birds behind his house and eats them");
        // await browser.pause(3000);

        await submitButton.click();
        // await browser.pause(3000);

        const failedSubmissionHeader = $('//body');
        await expect(failedSubmissionHeader).toHaveTextContaining('Error: Invalid email address');
    });
});