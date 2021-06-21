export function onload(args) {
    console.log('greeter "onload" is called')
    let container = args.object
    container.bindingContext = {
        greeterMessage: `Hello, ${container.user}`
    }
}
