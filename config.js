let endpoint = {
    "dev": "https://hilarious-calf-suit.cyclic.app/",
    "local": "http://localhost:5000",
    "current": "dev"
}

let routes = {
    "auth": {
        "register": "/register",
        "refresh": "/api/token/refresh/",
        "login": "/login",
        "verify": "/verify",
        "google": "/glogin/",
        "changePassword": '/change_password/',
        "forgot_password": '/forgot_email/',
        "reset_password": '/reset_password/',
    },
    "profile": {
        "get": "/profile",
        "post": "/profile"
    },
    "exercise": {
        "add": "/exercise/add",
        "logs": "/exercise/logs"
    },
    "user": {
        "detail": '/api/get/user/',
        "update": '/api/update/user/'
    }
}

export { endpoint, routes }