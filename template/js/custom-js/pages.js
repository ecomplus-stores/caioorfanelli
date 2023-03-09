// Add your custom JavaScript for storefront pages here.
UPLOADCARE_LOCALE = "pt";
UPLOADCARE_STORE = 'auto';
UPLOADCARE_LOCALE_TRANSLATIONS = {
    buttons: {
      choose: {
        files: {
            one: 'escolha imagem'
        }
      }
    }
}
storefront.on('widget:@ecomplus/widget-user', () => {
    setTimeout(() => {
        const widget = window.uploadcare.Widget('#c-653930167813636560500000')
        widget.onUploadComplete(function(info) {
            // Handle uploaded file info.
            console.log(info)
            document.getElementById('c-653930167813636560500000').click()
        });
    }, 800)
})
