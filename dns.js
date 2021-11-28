import dns from 'dns';

dns.lookup('upwork.com', (err, addresses, family) => {
  console.log(addresses);
  console.log(family);
});
dns.resolve('w3schools.com', (err, records) => {
  console.log(records[1]);
});
