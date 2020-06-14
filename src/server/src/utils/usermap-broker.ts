import config from '../config/config';
import base64 from 'base-64';
import fetch from 'node-fetch';

export default class Usermap {
  public static ACCESS_TOKEN = '';

  public static url(username: string): string {
    return encodeURI(`https://kosapi.fit.cvut.cz/usermap/v1/people?query=name=="${username}"`);
  }

  public static async fetchAccessToken(): Promise<any> {
    const url = config.usermap.tokenEndpoint;
    const credentials = base64.encode(config.usermap.credentials as string);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`
      // Scope: 'urn:ctu:oauth:umapi.read'
    };

    return await fetch(url, {
      method: 'POST',
      headers: headers,
      body: 'grant_type=client_credentials'
    });
  }
}
