const displayBar = document.createElement('div');
const cross_button=document.createElement('span');

function styleCrossButton(){
    displayBar.appendChild(cross_button);
    cross_button.class='close-btn';
    cross_button.style.position='absolute';
    cross_button.style.padding="1px 1px 1px 1px"
    cross_button.style.top='1px';
    cross_button.style.right='3px';
    cross_button.innerText='X';
    cross_button.style.color='white';
    cross_button.style.cursor='pointer';
}

function styleContainer(rect){
    displayBar.class="auto-size";
    displayBar.style.position='absolute';
    displayBar.style.zIndex = '1000';
    displayBar.style.opacity= '0';                  // fix to stop flickering because right now the div is randomly placed on the screen
    displayBar.style.backgroundColor = 'black';     // this will be dynamically changed based on the theme of the webpage (if black, make it bright)
    displayBar.style.padding = '15px 15px 15px 15px';
    displayBar.style.color='red';

    // Style and add the cross button to the main container
    styleCrossButton();
    document.body.appendChild(displayBar);

    // Correct position calculation of the div and placing it right above the text
    const dimension = displayBar.getBoundingClientRect();       // this is the dimension of my div determined by the browser
    displayBar.style.top = `${rect.top + window.scrollY - (dimension.height+10)}px`; // Position above the selected text
    displayBar.style.left = `${rect.left + window.scrollX}px`; // Position at the left of the selected text
    displayBar.style.opacity= '0.8';                            // fairly opaque but there is some transparency
    displayBar.style.fontWeight='800';
}

function formatText(selected_text){
    return `${selected_text}\n${selected_text}\n${selected_text}\n${selected_text}\n${selected_text}\n${selected_text}\n`;

}

const handleSelection = () => {
    const selected_text = window.getSelection().toString().trim();
    if (selected_text.length > 0) {
        // Creating a new div object displayBar        
        const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        const displayText=formatText(selected_text);
        displayBar.innerText=displayText;
        styleContainer(rect);
    };
};

const handleClick=()=>{

};

document.addEventListener('mouseup', handleSelection);
cross_button.addEventListener('click', ()=>{
    displayBar.remove();
});

// document.addEventListener('click', handleClick);
// Ideas:
// Based on the background of the webpage, dynamically change the color of the popup to make it more appealing 

