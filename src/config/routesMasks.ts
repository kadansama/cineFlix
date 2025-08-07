export const routesMasks = {
    main:{
        mask: '/', 
        create: ()=> '/'
    }, 
    favorite:{
        mask: '/favorite',
        create: () => '/favorite'
    }, 
    login:{
        mask: '/login',
        create: () => '/login'
    }, 
    signup: {
        mask: '/signup', 
        create: ()=> '/signup'
    }
}