export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['abu78GDzRipGZNg==','pc3lH61r1njS8yK7+B5Plw==','OB/003t3u5DroUQh5mdpHw==','cXrkKWGEDnd46b9234OIGg==']),
  },
});
