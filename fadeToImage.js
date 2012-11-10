(function($) {

    $.fn.fadeToimage= function(options) {

        var defaults = {  
           container: "",  
           speed: "slow"
        }
        var options = $.extend(defaults, options);
        var flag=true;
        $(defaults.container+' img:first').addClass('_active_');
   
     
        return this.each(function() {
            $(this).on('click',function(event){
               event.preventDefault();
                if(flag){
                    flag=false;
                    var img = new Image();
                        img.src=$(this).attr('href');
                        img.className ="next_image";
                        $(defaults.container).append(img);
                        $(img).on('load',function(){
                            $('img._active_').fadeOut(defaults.speed,function(){
                                $('img._active_').remove();    
                                $('img.next_image').addClass('_active_'); 
                                $('img.next_image').removeClass('next_image');
                                flag=true;
                            });
                        });
                }
                
            });
        });
        
    }

})(jQuery);