import {Observable, fromObject} from '@nativescript/core'

export function onload(args) {
    console.log('login "onload" is called')
    let container = args.object
    container.bindingContext = {
        loginMessage: `Welcome to ${container.appName}`,
        name: "test user"
    }
    console.log("login's appName property (after bindingContext change):", container.appName)
}
