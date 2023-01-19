
import * as dotenv from 'dotenv'
dotenv.config();
// https://openapi.shl.se/seasons/2022/games.json?teamIds[]=FBK

const baseurl = "https://openapi.shl.se";
const config = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: baseurl + "/oauth2/token"
  }
};


// grant_type: "client_credentials"
//         },
// headers: {
//   "User-Agent": this.options.userAgent
// }

const {
  ClientCredentials,
  ResourceOwnerPassword,
  AuthorizationCode
} = require('simple-oauth2');

async function run() {
  const client = new AuthorizationCode(config);

  const authorizationUri = client.authorizeURL({
    redirect_uri: 'http://localhost:3000/callback',
    scope: '<scope>',
    state: '<state>'
  });

  // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
  res.redirect(authorizationUri);

  const tokenParams = {
    code: '<code>',
    redirect_uri: 'http://localhost:3000/callback',
    scope: '<scope>',
  };

  try {
    const accessToken = await client.getToken(tokenParams);
  } catch (error) {
    console.log('Access Token Error', error.message);
  }
}

run();