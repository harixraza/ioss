module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: 'vAGlZMrjKoYS+BCI8jAA3g==,yyphqbB+XJw299a7M1oKWQ==,vq/8MvG+4yiX1M/hD0NYqg==,m5DMIcsXd/qAKRJIOEW8Vg==',
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
