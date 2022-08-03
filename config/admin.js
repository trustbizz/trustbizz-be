module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '42865f28d853373bbeace668725d5fad'),
  },
});
