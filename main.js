const displayBar = document.createElement('div');

function doStyling(rect, selected_text){
    displayBar.innerText=selected_text;
    document.body.appendChild(displayBar);  // temporarily load to determine the dimensions
    const dimension=displayBar.getBoundingClientRect()  // dimensions calculated by the browser
    document.body.removeChild(displayBar);
    displayBar.style.position='absolute';
    displayBar.style.width = `${dimension.width}px`;;        // this should be dynamic
    displayBar.style.height = `${dimension.height}px`;
    displayBar.style.zIndex = '1000';
    displayBar.style.opacity= '0.9';        // fairly opaque but there is some transparency
    displayBar.style.top = `${rect.top + window.scrollY - (dimension.height+1)}px`; // Position above the selected text
    displayBar.style.left = `${rect.left + window.scrollX}px`; // Position at the left of the selected text
    displayBar.style.backgroundColor = 'black';
    displayBar.style.padding = '5px';
    displayBar.style.color='red';
}

const handleSelection = () => {
    const selected_text = window.getSelection().toString().trim();
    if (selected_text.length > 0) {
        // Creating a new div object displayBar        
        const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        doStyling(rect, selected_text);
        displayBar.innerText=selected_text;
        document.body.appendChild(displayBar);
    };
};

const handleClick=()=>{

};

document.addEventListener('mouseup', handleSelection);
// document.addEventListener('click', handleClick);
// Ideas:
// Display bar position needs to be rethought
// remove the popup on double click or a single click outside the box
// Dynamically resizing the pop up window if there is a long list of synonyms
// Based on the background of the webpage, dynamically change the color of the popup to make it more appealing 

