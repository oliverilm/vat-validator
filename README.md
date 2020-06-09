### VAT number lookup system for ERPLY

The following solution was constructed in React JS, making use of some Bootstrap functionality.

Starting the project
```shell script
git clone https://github.com/oliverilm/vat-validator.git

cd vat-validator

yarn install
yarn start
```

#### Content
The service will run on port 3000 by default and is presenting the user a single form with an input field to enter the VAT number

![Image of the starting screen](http://i.imgur.com/czBL1up.png)

When inserting an incorrect VAT number, the user will be presented with an error

![Error screen](http://i.imgur.com/2m4PCcp.png)

Otherwise the resulting data for provided VAT number will be presented below the form.

![Resulting screen](http://i.imgur.com/4DVWpEq.png)

#### Used technologies

* Bootstrap - styling
* PropTypes - Runtime prop validation
* jsDoc - Code documentation
* Eslint - Code style validation and correction.

#### Additional functionality
Provided with the correct VAT number, a reference to google maps was added next to the address field

![Google maps location](http://i.imgur.com/eM9uPLh.png)

This is a link that will create a blank browser window with google maps, viewing the location provided for the current business.