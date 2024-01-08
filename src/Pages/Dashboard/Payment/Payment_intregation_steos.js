/**
 * 1. install stripe and react stripe js
 * 2. create checkout form with card element (card element contains: card number, expiration date, zip code)
 * 3. create stripe account and use publishable key pk
 * 4. use test card and display card error
 * 5. get card information
 * 6. create a payment method
 * 7. one the server side install stripe: npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card']
 * make sure you provide amount in cents (multiply price with 100)
 * 
 * 9. call payment intent api to get client secret and store in a state.
 * 10. use confirmCardPayment api with client secrct card info
 */