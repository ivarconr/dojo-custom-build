define("mycompany/widgets/Example", [
     "dojo/_base/declare", 
    "dojo/text!./templates/tem.html",
    "dijit/_Widget",
    "dijit/_Templated",
    "dojo/store/Memory",
    "dijit/form/ComboBox"], 
    function(declare, template, _Widget, _Templated, Memory, ComboBox) {
        return declare([_Widget, _Templated],{
            // where to look for template
            templateString : template,
            constructor: function() {
                this.message = "hello world";
            },
            postCreate: function() {
                var stateStore = new Memory({
                    data: [
                        {name:"Beer", id:"beer"},
                        {name:"Wine", id:"wine"},
                        {name:"Vodka", id:"vodka"}
                    ]
                });

                new ComboBox({
                    id: "drinkSelect",
                    name: "drink",
                    value: "Wine",
                    store: stateStore,
                    searchAttr: "name"
                }, this.comboContainer);
            }
        });    
});
