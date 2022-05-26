/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars


process.env.AWS_SDK_LOAD_CONFIG='yes'
const aws=require('aws-sdk');
const secrets = new aws.SecretsManager();

module.exports = (on, config) => {
  return new Promise((resolve,reject) => {
    secrets.getSecretValue({
        SecretId: "amplify/cypress-react"
      },(err,data)=>{
        if (err) reject(err);
        let pw = JSON.parse(data.SecretString);
        if(!config.env) config.env={};
        config.env.CognitoPW=pw.CognitoPW;
        resolve(config);
      })
    })
}
