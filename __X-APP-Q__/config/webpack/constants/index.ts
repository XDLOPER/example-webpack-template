import path from 'path'

// GLOBAL CONSTANTS
export const __SOURCE__:string = 'src'
export const __WEB_FILE_PATH__:string = __SOURCE__+'/public'

export const __ENV_PATH__:string = path.resolve('__X-APP-Q__','config','dotenv', '.env')
export const __INPUT_PATH__:string = path.resolve(__SOURCE__,'index.js')
export const __STYLE_PATH__:string = path.resolve(__SOURCE__,'styles/global.scss')