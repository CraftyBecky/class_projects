// -Bring in toggle buttons (querySelectorAll)
const toggles = document.querySelectorAll('.faq-toggle')

// -Loop through nodelist (forEach)
// -Add click event (addEventListener)
// -Toggle the active class on the parent node (.parentNode & classList.toggle())
toggles.forEach (toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})




