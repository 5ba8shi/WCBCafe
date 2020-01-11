upstream app_server {
  # sharedの中を参照するよう変更
  server unix:/var/www/<アプリケーション名>/shared/tmp/sockets/unicorn.sock;
}

server {
  listen 80;
  server_name <Elastic IPを記入>;

  # currentの中を参照するよう変更
  root /var/www/<アプリケーション名>/current/public;

  location ^~ /assets/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
    # currentの中を参照するよう変更
    root   /var/www/<アプリケーション名>/current/public;
  }

  try_files $uri/index.html $uri @unicorn;

  location @unicorn {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_pass http://app_server;
  }

  error_page 500 502 503 504 /500.html;
}

group :production do
  gem 'unicorn', '5.4.1'
end

pid "#{app_path}/tmp/pids/unicorn.pid"

listen 3000

stderr_path "#{app_path}/log/unicorn.stderr.log"

stdout_path "#{app_path}/log/unicorn.studout.log"

timeout 60

