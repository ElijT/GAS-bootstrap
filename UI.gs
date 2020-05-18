function doGet(e) {
  // Retrieve and process any URL parameters, as necessary.
  //In the case below all parameters will be acepted and give the same result, you may want to update here if you want
  if (e.parameter.edit == "form" & e.parameter.entry) {
    return EditEntry(e.parameter.entry);
      LoadPage();    
  } else {
    return LoadPage();
  }
    
}




function LoadPage() {
  var template = HtmlService.createTemplateFromFile('index');
  
 // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
  .setTitle('Bootstrap boilerplate')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setFaviconUrl('https://img.icons8.com/cotton/64/000000/monitor.png')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}
