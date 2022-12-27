interface Build_Type {
    name: String | string,
    author?: String | string,
    license?: String | string,
    keywords?: Array<String | string>,
    repository?: {
        url?: String | string,
        type?: String | string,
    },
    homepage?: String | string,
    bugs?: {
        url?: String | string,
        email?: String | string,
    },
    build : {
        files?: Array<String | string>,
        type : "Package" | "TestApp",
        link? : Array<String | string>,
    }
}

export interface Config_Type {
    package_json: {
        name: String | string,
        version?: String | string,
        description?: String | string,
        author?: String | string,
        license?: String | string,
        keywords?: Array<String | string>,
    }
    builds: Array<Build_Type>
}

const Test_Config : Config_Type = {
    package_json: {
        name: "Test",
        version: "1.0.0",
        description: "Test",
        author: "Test",
        license: "MIT", 
        keywords: ["Test", "Test"]
    },
    builds: [
        {
            name: "Test",
            build: {
                type: "Package",
                files: [
                    "dist"
                ]
            }
        },
        {
            name: "Test",
            build: {
                type: "TestApp",
                files: [
                    "dist"
                ]
            }
        }
    ]
}