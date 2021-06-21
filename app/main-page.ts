/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Observable, Page } from '@nativescript/core'

class TestViewModel {
	appName = "Nested Custom Component Test"
}
export function onNavigatingTo (args) {
    const page = args.object;
    let vm = new TestViewModel()
    page.bindingContext = vm
};

export function onload(args) {
    console.log('page "onload" is called.')
}