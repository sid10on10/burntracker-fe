let endpoint = {
    "dev": "https://dev-webapp.quickblink.io",
    "local": "http://localhost:5000",
    "current": "local"
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
    "page": {
        "list": "/api/pages/",
        "detail": "/api/pages/",
        "update": "/api/pages/",
        "create": "/api/pages/",
        "duplicate": "/api/duplicate/"
    },
    "user": {
        "detail": '/api/get/user/',
        "update": '/api/update/user/'
    },
    "subscription": {
        "stripe": "/api/subscription/stripe/create",
        "create": "/api/subscription/create/",
        "update": "/api/subscription/update/",
        "cancel": "/api/subscription/cancel/",
        "invoice": "/api/subscription/invoice/raw/"
    },
    "issues": {
        "get": "/api/get/issues/",
        "get_page": "/api/get/issues/?page_id="
    }
}

export { endpoint, routes }