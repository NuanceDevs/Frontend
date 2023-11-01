export {default} from 'next-auth/middleware'

//authentication set to specific routes
export const config = {matcher: '/login'}