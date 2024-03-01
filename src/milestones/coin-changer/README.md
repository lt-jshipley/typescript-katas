## Kata: CoinChanger

#### Challenge

> Create a function that takes in an amount of money to be exchanged and returned back in US coins. Make sure the coins returned are the least number of coins that are possible. US Coins are: Quarters (25), Dimes (10), Nickels (5), and Pennies (1). We want the return value to be an array that holds all of the coins coming back.

> Finally we need a way to run the coin changer for the money values of 1 to 99.

**Example Outcomes (but not limited to)**
- When we pass in 1, we get back -> [ 1 ]
- When we pass in 7, we get back -> [ 5, 1, 1 ]
- When we pass in 20, we get back -> [ 10, 10 ]
- When we pass in 25, we get back -> [ 25 ]
- When we pass in 30, we get back -> [ 25, 5 ]
- When we pass in 41, we get back -> [ 25, 10, 5, 1 ]
- When we pass in 60, we get back -> [ 25, 25, 10 ]
- When we pass in 99, we get back -> [ 25, 25, 25, 10, 10, 1, 1, 1, 1 ]