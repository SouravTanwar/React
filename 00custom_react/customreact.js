function customRender(reactElement, container){
    /*
    const domElemet = document.createElement(reactElement.type)
    domElemet.innerHTML = reactElement.children
    domElemet.setAttribute('href',reactElement.props.href)                               // multiple attribute can be redundant so used loops in next approach
    domElemet.setAttribute('target',reactElement.props.target) 

    container.appendChild(domElemet)
    */

    const domElemet = document.createElement(reactElement.type)
    domElemet.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop == 'children') continue;                              // in our code we have specified children separately so its a safety check nothing to do with our code
        domElemet.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElemet)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}



const mainContainer = document.getElementById('root')

customRender(reactElement , mainContainer)
