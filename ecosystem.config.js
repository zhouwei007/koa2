module.exports = {
  apps: [{
    name: 'API',
    script: './app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    watch_options: {
      "usePolling": true
    },
    max_memory_restart: '1G',
    output: "log/out.log",
    error: "log/error.log",
    log_type: "json",
    log_date_format: "YYYY-MM-DD HH:mm Z",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
    {
      name: "static-file",
      script: "serve",
      env: {
        PM2_SERVE_PATH: ".",
        PM2_SERVE_PORT: 8080,
      },
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['45.32.174.108'],
      port:22,
      ref: 'origin/master',
      repo: 'git@github.com:zhouwei007/koa2.git',
      path: '/www/test',
      ssh_options: "StrictHostKeyChecking=no",// sshkey校验取消
      env:{
        "NODE_ENV":'production'
      },
      'post-deploy': 'git pull origin && master npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
