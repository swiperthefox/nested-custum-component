# nested-custum-component
A minimal code example for issue report to the nativascript project

## Usage

Check out and run "tns run platform" in the folder.

## Expected Output vs Actual Output

In expect, the app should show 
    
    Welcome to Nested Component Test
    Hello, test user

It shows the following instead

    Welcome to Nested Component Test
    Hello, [object object]

## Reason
The `user` property in `login.xml`

    <greeter:greeter user="{{ name }}" />
    
didn't get the right value for `name`, because the bindingContext for the `login` component is not created yet when the `greeter` element is created.

## Workaround and Solution
- Workaround: Since `greeter` inherits the binding context from login by default, so it can use the properties of the binding context of `login`. But this means that `greeter` can only render data of its parent, not able to have it's own behavior code. 

Code is in `inherited-bindingContext` branch.

- Solution(?): Do not pass the data via property. When the parent compoent is loaded, select the child element, and create the binding context for it. The binding context can define behaviors of the child, as well as property values.

Code is in `parent-bind-for-child` branch.

## More Unexpected Behaviors
If we put the app to background, then bring it back, the text displayed becomes:

    Welcome to [object object]
    Hello, [object object]

Here is the related code for the "welcome" message:

    export function onload(args) {
        console.log('login "onload" is called')
        let container = args.object
        container.bindingContext = {
            loginMessage: `Welcome to ${container.appName}`,
            name: "test user"
        }
        console.log("login's appName property (after bindingContext change):", container.appName) // {}??
    }
    
After assigned a new value to the `container`'s bindingContext, the value of `container.appName` changed to `{}`. When we bring the app back from background, `onload` is called again, but now `container.appName` has lost it original value.
