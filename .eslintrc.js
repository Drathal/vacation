
function isTruthy(value){
    if (!value) return false;
    return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports ={
    "extends": "react-app",
    "env": {
    "browser": true,
    "jest": true
  },
    "globals": {
        "STORYBOOK_REACT_CLASSES": true,
        "it": false,
        "expect": false,
        "jasmine": false
    },
    "rules": {
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
        "arrow-parens": [WARNING,
            "as-needed"
        ],
        "no-console": [WARNING,
            {
                "allow": [
                    "warn",
                    "error",
                    "info"
                ]
            }
        ],
        "comma-dangle": [WARNING
        ],
        "quotes": [WARNING,
            "single"
        ],
        "curly": WARNING,
        "eqeqeq": [OFF
        ],
        "semi": [WARNING,
            "never"
        ],
        "no-extra-semi": OFF,
        "space-in-parens": [WARNING,
            "never"
        ],
        "object-curly-spacing": [WARNING,
            "always"
        ],
        "indent": [WARNING,
            4,
            {
                "CallExpression": {
                    "arguments": "first"
                },
                "SwitchCase": 1,
                "MemberExpression": 1,
                "FunctionDeclaration": {
                    "body": 1,
                    "parameters": 2
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1
            }
        ],
        "strict": [ERROR,
            "never"
        ],
        "react/jsx-uses-react": ERROR,
        "react/jsx-uses-vars": ERROR,
        "react/react-in-jsx-scope": ERROR,
        "react/jsx-curly-spacing": [WARNING,
            {
                "when": "always",
                "allowMultiline": true,
                "children": true,
                "spacing": {
                    "objectLiterals": "never"
                }
            }
        ]
    },
    "plugins": [
        "react"
    ]
}
