const conf = {
  server: {
    address: '127.0.0.1',
    port: 51820,
  },
  peers: [
    {
      publicKey: 'kHDoekeYhBvfW9a9UQ+UCmpbG423eejTjcjW+DT+JF0=',
      allowedIPs: ['10.7.0.1/32'],
      persistentKeepalive: 25,
    },
  ],
};

const interfaces = [
  {
    privateKey: 'AIIeeUDvk3NeAFJ9BWCQvPJize/9WZibMnGJ/0rt5k4=',
    address: '10.7.0.10/24',
    peers: conf.peers,
  },
];

const configs = interfaces.map((iface) => {
  const peerConfigs = iface.peers.map((peer) => {
    return `PublicKey = ${peer.publicKey}
AllowedIPs = ${peer.allowedIPs.join(',')}
PersistentKeepalive = ${peer.persistentKeepalive}`;
  }).join('\n');

  return `[Interface]
PrivateKey = ${iface.privateKey}
Address = ${iface.address}

[Peer]
${peerConfigs}
`;
}).join('\n');

$done({ conf: configs });
