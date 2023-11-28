# Current Plans
Login Screen containing a name input and a phone number input.
After Logging in, you get into a screen that asks if you want to create a card.  

We Got to add a screen group that is for configuring new user settings 
so maybe we have to add a token for a first-login?
## Country code picker
So turns out we need to create a country code picker, which is a hassle in itself, but
this is the current process of which I think it can be executed:
- Create an Array of Objects that hold all the information on the country codes
    - Initial List:
        - Jordan, Syria, Saudi Arabia, Yemen, Oman, Bahrain, UAE, and Egypt.
- Create an input component that sets the CC's dynamically through maybe the (`${}`) notation.
- Should be linked to some kind of state provider in order to be lifted into the database?
- PS: There is also button states, visiblity state, useEffect() to update the layout and other stuff that should be thought through.
- Do not forget to use (require()) for image links of all kind.

## Things to think about how to implement:
1. How to seperate Admins and normal users in terms of permissions (probably create another set of screens for admins?).
2. How to seperate costumers and Traders.
3. How do I go about the database schema? Is firebase suitable?

# Future Plans
 For now you enter your number and it registers into the system along side your name. However, I am thinking of expanding it into a normal login screen for Truck Drivers and Potential Employers