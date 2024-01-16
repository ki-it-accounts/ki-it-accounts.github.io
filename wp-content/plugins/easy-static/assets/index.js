const anchorLinks = document.querySelectorAll('a[href*="#"]'); // Select all hash links

for (let item of anchorLinks) { // Loop through each link
    item.addEventListener('click', function (e) {
        let hashval = item.getAttribute('href');
        if (hashval && hashval.trim().length > 0 && hashval.trim() !== '#') {
            //remove everything before the hash
            hashval = hashval.substring(hashval.indexOf('#'));
            let target = document.querySelector(hashval);
            if(target)
            {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, null, hashval);
                e.preventDefault();// Change the URL hash
            }
        }
    });
}

let actual_button = document.querySelectorAll('.wp-block-uagb-modal a');
if (actual_button.length > 0) {
    actual_button = actual_button.item(0);
    const modal_buttons = document.getElementsByClassName('open_astra_modal');
    for (let modal_button of modal_buttons) {
        modal_button.addEventListener('click', function () {
            actual_button.click();
        });
    }

    //function that calls the actual_button after 10 seconds of page load
    function call_button() {
        actual_button.click();
    }
    setTimeout(call_button, 15000);
}