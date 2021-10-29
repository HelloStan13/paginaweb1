jQuery(document).ready(listo);



function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault(); 
        jQuery("header .container  nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");
    
        
    });
    jQuery("header .container  nav a").click(function(){
        var dev = jQuery(this).attr("href");
    })

}
