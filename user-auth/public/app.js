var app = angular.module("myApp",["ui.router", "ngFileUpload"]);
    app.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/signup/signup.html");
        $stateProvider
            .state('signUp', {
                url: "/signup",
                templateUrl: "/signup/signup.html",
                controller: "SignUpController"
            })
            .state('chatProfile',{
                url:"/chat",
                templateUrl: "/profile/chat-profile.html",
                controller: "chatController"
            })
            .state('chatScreen',{
                url:'/chatScreen',
                templateUrl:"/chat/chat.html",
                controller: "chatMessengerController"
            })
    })



