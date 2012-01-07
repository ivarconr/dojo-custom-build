var profile = {      
    basePath: "./", 
    layerOptimize: "shrinksafe.keepLines", 
    releaseDir: "../release",
    hasReport: true,

    copyOnly: function(filename, mid){
		var list = {
			"mycompany/dojo.profile":1,
			"mycompany/package.json":1
        }
    },

    packages:[ 
        { 
            name: "dojo", 
            location: "../dojo-release-1.7.1-src/dojo" 
        }, 
        { 
            name: "dijit", 
            location: "../dojo-release-1.7.1-src/dijit" 
        },
        { 
            name: "mycompany", 
            location: "./", 
            resourceTags: {
                test: function() {return false},
                copyOnly: function(filename, mid){
	                return profile.copyOnly(filename, mid);
                },
                amd: function(filename, mid){
	                return !profile.copyOnly(filename, mid) && /\.js$/.test(filename);
                }
            }
        }
    ], 

    layers: {             
        "mycompany/layers/core": { 
            include: [ 
                "dijit/_Widget",
                "dijit/_Templated"
            ],
        },
        "mycompany/layers/example": { 
            include: [ 
                "mycompany/widgets/Example"
            ],
            exclude: [
                "mycompany/layers/core"
            ]
        }
    }
};
