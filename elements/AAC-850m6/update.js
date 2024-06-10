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
            
            
            let configuration = {
                libraryVersion: '3.2.1',
                framework: 'Bubble'
            };

            if(properties.data_location) {
                switch(properties.data_location) {
                    case "Europe (Germany)":
                        configuration.data_location = "eu-central-1";
                        break;
                }
            }

            let importer = new CSVBoxImporter(properties.license_key, userObj, function(result, data) {
                if(result) {
                    instance.triggerEvent('import_success');
                }else{
                    instance.triggerEvent('import_fail');
                }
            }, configuration);

            importer.setUser(userObj);

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