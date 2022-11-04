// vite.config.js
import { defineConfig } from 'vite'

// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  
  "server":{
    // "cors": {"origin":false},
    "open":'./index.html',
    proxy: {
        'http://127.0.0.1:5173/wfs': {
          target: 'http://175.198.238.72:18443',
          changeOrigin: true,
          rewrite: (path) =>{
            const result = path.replace(/http:\/\/localhost:5173\/wfs/, 'http://175.198.238.72:18443/geoserver/ITS/ows');
            console.log("path:",path,"result",result);
            return result;
          } ,
          secure: false,
          ws: true
        }
      }
  
  }
})
