
function isTruthy(value){
    if (!value) return false;
    return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI mode
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
    "plugins": [
        "prettier",        
    ],
    "extends": [
        "react-app",
        "prettier",
        "prettier/react"        
    ],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "jasmine": true
    },
    "globals": {},
    "rules": {
        "prettier/prettier" : [
            "error",
            {
                "trailingComma": "none",
                "singleQuote": true,
                "printWidth": 120,
                "semi" : false,
                "tabWidth": 4           
            }
        ],
        "no-unused-vars": [WARNING,
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        "no-empty": [WARNING,
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-function": [WARNING,
            {
                "allow": [
                    "arrowFunctions"
                ]
            }
        ],
        "no-mixed-operators": ERROR,
        "no-console": [WARNING,
            {
                "allow": [
                    "warn",
                    "error",
                    "info"
                ]
            }
        ],
        "eqeqeq": [OFF]

    }
}
