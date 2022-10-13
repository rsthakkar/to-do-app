import { taskSwagger } from './controllers/TaskController';

let swaggerPathDataArr = [
    taskSwagger
];

let swaggerJson = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "ToDoApp",
        "description": "ToDo app created by rudra for learning node and react",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "servers": [
        {
            "url": "/",
            "description": "basic path"
        }
    ],
    "paths": {
        "/cats": {
            "get": {
                "tags": [
                    "Cats"
                ],
                "summary": "Get all cats in system",
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                }
            }
        }
    }
}

// this code will add routes dynamicall from all jsons
swaggerPathDataArr.map((swaggerPathData) => {
    Object.keys(swaggerPathData).map(key => {
        swaggerJson.paths[key] = swaggerPathData[key];
    });
})

export default swaggerJson;
