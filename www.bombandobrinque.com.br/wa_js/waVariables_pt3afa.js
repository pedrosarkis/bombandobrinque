var WaJsVariable = {};
WaJsVariable.form_post_url="wa_php/comp/{{waId}}/form_post.php";
WaJsVariable.search_index_filename="wa_js/waSearchIndex_{{lang}}.js";
var WaTranslator = {};
var WaIdContext = '5CB7339535F27';
WaTranslator.tr = function(key) 
{ 
key = key.toLowerCase();
    return (this.messages[key]!=undefined)?this.messages[key]:'*'+key+'*';
}; 
WaTranslator.messages={
"%1 result found !":"%1 resultado(s) encontrado(s)",
"cookiebanner:i understand":"Got it!",
"cookiebanner:learn more":"Learn more",
"cookiebanner:this website use cookie to ensure good experience on our website":"This site uses cookies to ensure the best browsing experience",
"enter your password":"Enter your password",
"feature no available in preview":"Feature not available in preview mode",
"form successfully sent !":"Form successfully sent !",
"form:email field":"Contact e-mail",
"form:firstname field":"Nome",
"form:label my form":"My form",
"form:lastname field":"Sobrenome",
"form:my choices":"Escolher",
"form:my message sample":"My message",
"form:sample choice value":"Melhor",
"form:upload - select file":"Select File(s)",
"invalid email !":"Invalid email address !",
"label button send form":"Enviar",
"no email":"Undefined email !",
"no php support on server !":"No PHP support on Server !",
"page under construction":"P\u00e1gina em constru\u00e7\u00e3o",
"recaptcha not validated !":"verifica\u00e7\u00e3o reCaptcha falhou!",
"search placeholder":"Pesquisa",
"shop_loading_error":"Shop is not configured",
"untitled page":"Untitled page",
};

//Selectors
var waImageGalleryClassSelector = "wa-image-gallery-tobind";
var waImageGalleryNoIndicatior = "wa-image-gallery-no-thumbs";
var waImageGalleryIdLinkSelectorPattern = "wa-gal-link";
var waCarouselIdLinkSelectorPattern = "wa-compcarousel-link";
var waCarouselIdSelectorPattern = "wa-compcarousel";
