import {Observable, fromObject} from '@nativescript/core'

export function onload(args) {
    console.log('login "onload" is called')
    let container = args.object
    container.bindingContext = {
        loginMessage: `Welcome to ${container.appName}`,
        name: "test user"
    }
    
    let greeterVM = {
        greeterMessage: `Hello ${container.bindingContext.name}`
    }
    let greeter = container.getViewById('greeter')
    greeter.bindingContext = greeterVM
    
    console.log("login's appName property (after bindingContext change):", container.appName)
}
