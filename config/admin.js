module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '442cbf619ab77b5a97a0442234c0ee25'),
  },
});
