// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";

const serverUrl = 'https://localhost:7209/api';
// const serverUrl='https://smartcertify-api.azurewebsites.net/api';

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  adb2cConfig: {
    clientId: '588fe00e-c38a-429b-a2bb-911ca90643a7',

    // Updated scopes for your Microsoft Entra API
    readScopeUrl: 'api://e804dde0-314b-4184-8c17-dab34714269a/access_as_user',
    writeScopeUrl: 'api://e804dde0-314b-4184-8c17-dab34714269a/access_as_user',

    scopeUrls: [
      'api://e804dde0-314b-4184-8c17-dab34714269a/access_as_user'
    ],

    apiEndpointUrl: serverUrl
  },

  cacheTimeInMinutes: 30,
};