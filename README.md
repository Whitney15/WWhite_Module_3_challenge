# Password Generator Starter Code
# USER Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# Acceptance Criteria
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
        
        - pop up window of prompts

WHEN prompted for password criteria
THEN I select which criteria to include in the password

         - series of pop up questions to ask "yes" or "no"

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

        - condition statement if...else

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

        question Yes or No for Lowercase
        question Yes or No for Uppercase
        question Yes or No for Numeric
        question Yes or No for Special Characters 

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

        Alert to pick at least one character  

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

        password generates

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

        password written on password box?

# Acceptance Criteria
https://courses.bootcampspot.com/courses/3901/files/2564719/preview