function documentManipulation() {

    // Retrieve all necessary elements from DOM
    const multimediaElements = document.querySelectorAll('img, iframe, video, link[rel="stylesheet"]');
    const allElements = document.body.querySelectorAll('*');
    const body = document.querySelector('body');

    // Create empty array for divs
    const divs = [];

    // Create banner image
    let banner = document.createElement('img');
    banner.src = 'https://www.freeiconspng.com/uploads/red-ribbon-banner-png-12.png';
    banner.style.width = '720px';
    banner.style.height = '90px';

    // Remove all multimedia content andd css style
    multimediaElements.forEach(element => element.parentNode.removeChild(element));

    // Filter all elements with text from the page and put the text in div elements
    const visibleElementsWithText = Array.from(allElements)
        .filter(element => Array.from(element.childNodes).find(node => node.nodeType === 3 && node.textContent.trim().length > 1))
        .forEach(node => {
            const screenWidth = window.innerWidth;
            let div = document.createElement('div');
            div.textContent = node.textContent;
            div.style.width = screenWidth + 'px';
            divs.push(div);
        });

    // Insert sample banner between each div
    divs.forEach(function (div) {
        body.insertBefore(div, banner.nextSibling);
        body.insertBefore(banner.cloneNode(true), div.nextSibling);
    });
}

documentManipulation();