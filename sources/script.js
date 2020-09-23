const currStyle = document.getElementById("current-style")
const styleSelect = document.querySelector('[pick-style]')

styleSelect.addEventListener('change', select => {
  if(styleSelect.value == 'normal'){
    currStyle.href="style_base.css"
  }
  
  if(styleSelect.value == 'dark'){
    currStyle.href="style_dark.css"
  }
})