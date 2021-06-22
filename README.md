# nested-custum-component
A minimal code example for issue report to the nativascript project

## Usage

Check out and run "tns run platform" in the folder.

## Expected

In the app, it should show 
    
    Welcome to Nested Component Test
    Hello, test user

## The Actual Output

It shows the following instead

    Welcome to Nested Component Test
    Hello, [object object]

## Reason
The `user` property in `login.xml`

    <greeter:greeter user="{{ name }}" />
    
Didn't get the right value for `name`, because the bindingContext is not established yet when the `greeter` element is created.
