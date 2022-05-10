export let domManager = {
    addChild(parentIdentifier, childContent) {
        const parent = document.querySelector(parentIdentifier);
        if (parent) {
            parent.insertAdjacentHTML("beforeend", childContent);
        } else {
            console.error("could not find such html element: " + parentIdentifier);
        }
    },
    addEventListener(parentIdentifier, eventType, eventHandler) {
        const parent = document.querySelector(parentIdentifier);
        if (parent) {
            parent.addEventListener(eventType, eventHandler);
        } else {
            console.error("could not find such html element: " + parentIdentifier);
        }
    },
    removeChild(parentIdentifier, childContent) {
        const parent = document.querySelector(parentIdentifier);
        const child = document.querySelector(childContent);
        if (parent) {
            child.remove();
        } else {
            console.error("could not find such html element: " + parentIdentifier);
        }
    },
};
