var profile = {      
    basePath: "./", 
    layerOptimize: "shrinksafe.keepLines", 
    releaseDir: "./release",
    hasReport: true,

    packages:[ 
        { 
            name: "dojo", 
            location: "./dojo-release-1.7.1-src/dojo" 
        }, 
        { 
            name: "dijit", 
            location: "./dojo-release-1.7.1-src/dijit" 
        },
        { 
            name: "mycompany", 
            location: "./mycompany"
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
