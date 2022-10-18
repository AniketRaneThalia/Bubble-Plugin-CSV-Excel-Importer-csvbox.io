function(instance, properties, context) {           
   
    
      $(document).ready(function() {         
        
     	document.addEventListener("import_done", function eventHandler(e) {
            
            //console.log(e.detail);
            if(e.detail.import_status == "success")
                {
            		instance.triggerEvent('import_success', function(){return console.log('success');});        
                }
            else
                {
                    instance.triggerEvent('import_fail', function(){return console.log('fail');});        
                }
            
 			 
    	});
        
        //console.log('ready');          
          
          div = window.u.div('', instance.canvas,'');
            div.css('width','100%');
            div.css('height','100%');             
    
				// creating button element
                var button = document.createElement('BUTTON');
                 
                // creating text to be
                //displayed on button
                var text = document.createTextNode(properties.button_text);
                 
                // appending text to button
                button.appendChild(text);
                button.style.width= '100%';
                button.style.height= '100%';
          		button.className += properties.button_classes;   
          		button.disabled = 'disabled';
          		button.setAttribute('data-csvbox', '');                
                 
                // appending button to div
                div.append(button);          		
          
          var userobj = {'user_id': properties.user_id};
          
          if(properties.custom_attribute_2_key)
              {
                  userobj[properties.custom_attribute_2_key] = properties.custom_attribute_2_value;
              }
          
           if(properties.custom_attribute_3_key)
              {
                  userobj[properties.custom_attribute_3_key] = properties.custom_attribute_3_value;
              }
          
           if(properties.custom_attribute_4_key)
              {
                  userobj[properties.custom_attribute_4_key] = properties.custom_attribute_4_value;
              }
          
           if(properties.custom_attribute_5_key)
              {
                  userobj[properties.custom_attribute_5_key] = properties.custom_attribute_5_value;
              }
          
          
          initializeImporter(properties.license_key, userobj);
          
            setTimeout(function() {
              button.removeAttribute('disabled');    
            }, 3000);
          
          
          div.click(function() {
              openModal();
            });  
           
                                 
	});    
   
}