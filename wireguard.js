/**
 * @file WireGuard VPN Configuration
 * @description Configuration for WireGuard VPN connection
 *
 * @version 1.0
 */
const WireGuard = require('wireguard-js');

const privateKey = 'AIIeeUDvk3NeAFJ9BWCQvPJize/9WZibMnGJ/0rt5k4=';
const address = '10.7.0.10/24';
const publicKey = 'kHDoekeYhBvfW9a9UQ+UCmpbG423eejTjcjW+DT+JF0=';
const allowedIPs = '10.7.0.1/32';
const endpoint = '127.0.0.1:51820';
const persistentKeepalive = 25;

const wg = new WireGuard();
wg.setPrivateKey(privateKey);
wg.setAddress(address);
wg.setPublicKey(publicKey);
wg.addAllowedIPs(allowedIPs);
wg.setEndpoint(endpoint);
wg.setPersistentKeepalive(persistentKeepalive);
