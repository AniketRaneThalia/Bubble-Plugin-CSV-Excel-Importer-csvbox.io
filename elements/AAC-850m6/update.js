function(instance, properties, context) {
    
    $(document).ready(function() {

        if(CSVBoxImporter) {
            
            let userObj = {
				'user_id': properties.user_id
            };
            
            if (properties.custom_attribute_2_key) {
            	userObj[properties.custom_attribute_2_key] = properties.custom_attribute_2_value;
            }
            
            if (properties.custom_attribute_2_key) {
            	userObj[properties.custom_attribute_2_key] = properties.custom_attribute_2_value;
            }

            if (properties.custom_attribute_3_key) {
                userObj[properties.custom_attribute_3_key] = properties.custom_attribute_3_value;
            }

            if (properties.custom_attribute_4_key) {
                userObj[properties.custom_attribute_4_key] = properties.custom_attribute_4_value;
            }

            if (properties.custom_attribute_5_key) {
                userObj[properties.custom_attribute_5_key] = properties.custom_attribute_5_value;
            }

            let importer = new CSVBoxImporter(properties.license_key, userObj, function(result, data) {
                if(result) {
                    instance.triggerEvent('import_success');
                }else{
                    instance.triggerEvent('import_fail');
                }
            },{
                libraryVersion: '3.1.0',
                framework: 'Bubble'
            });

            importer.setUser({
                user_id: 'default123'
            });

            var button = document.createElement('BUTTON');
            var text = document.createTextNode(properties.button_text);

            button.appendChild(text);
            button.className += properties.button_classes;
            button.disabled = 'disabled';
            button.setAttribute('data-csvbox', '');

			instance.canvas.empty();
            
            instance.canvas.append(button)

            importer.listen("onReady", function() {
                if(button) button.removeAttribute('disabled');
                else console.log("button not initialised")
            });
            
            button.addEventListener("click", function(){
                importer.openModal();
            });

        }

    });

}