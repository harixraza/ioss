module.exports = ({ env }) => ({
  auth: {
    secret: 'EPY5YCin6Ew60k5QCYJuqw==',
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
