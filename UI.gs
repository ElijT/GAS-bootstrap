//I am serving the bootstrap example from getbootstrap.com
//https://getbootstrap.com/docs/4.0/examples/jumbotron/

//Very sample I hope that it will worked served by GAS ;-)))

function doGet(e) {
  //This function will serve the html GET request
  var template = HtmlService.createTemplateFromFile('index');
  
  return template.evaluate()
  .setTitle('Jumbotron Template for Bootstrap')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
