class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.order('cereated_at ASC')
  end

  def create
    @todo = Todo.create(todo_params)
    respond_to do |format|
      format.html { redirect_to :root }
      format.json { render json: @todo}
  end

  private
  def todo_params
    params.require(:todo).permit(:content)
  end
end


{user_name: "testさん", cereated_at: "2019-09"}

def create
  @post = Post.create(post_params)
end

json.text @post.text


listen 3000

listen "#{app_path}/tmp/sockets/unicorn.sock"

cd /var/www/chat-space
git pull origin master


upstream app_server {
  # Unicornと連携させるための設定。アプリケーション名を自身のアプリ名に書き換えることに注意。今回であればおそらくchat-space
  server unix:/var/www/<アプリケーション名>/tmp/sockets/unicorn.sock;
}

# {}で囲った部分をブロックと呼ぶ。サーバの設定ができる
server {
  # このプログラムが接続を受け付けるポート番号
  listen 80;
  # 接続を受け付けるリクエストURL ここに書いていないURLではアクセスできない
  server_name <Elastic IP>;

  # クライアントからアップロードされてくるファイルの容量の上限を2ギガに設定。デフォルトは1メガなので大きめにしておく
  client_max_body_size 2g;

# 接続が来た際のrootディレクトリ
  root /var/www/<アプリケーション名>/public;

# assetsファイル(CSSやJavaScriptのファイルなど)にアクセスが来た際に適用される設定
  location ^~ /assets/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
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


# config valid only for current version of Capistrano
# capistranoのバージョンを記載。固定のバージョンを利用し続け、バージョン変更によるトラブルを防止する
lock '<Capistranoのバージョン>'

# Capistranoのログの表示に利用する
set :application, '<自身のアプリケーション名>'

# どのリポジトリからアプリをpullするかを指定する
set :repo_url,  'git@github.com:<Githubのユーザー名>/<レポジトリ名>.git'

# バージョンが変わっても共通で参照するディレクトリを指定
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '<このアプリで使用しているrubyのバージョン>' #カリキュラム通りに進めた場合、2.5.1か2.3.1です

# どの公開鍵を利用してデプロイするか
set :ssh_options, auth_methods: ['publickey'],
                  keys: ['<ローカルPCのEC2インスタンスのSSH鍵(pem)へのパス（例：~/.ssh/key_pem.pem）>'] 

# プロセス番号を記載したファイルの場所
set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }

# Unicornの設定ファイルの場所
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
set :keep_releases, 5

# デプロイ処理が終わった後、Unicornを再起動するための記述
after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end

upstream app_server {

  server unix:/var/www/<アプリケーション名/shared/tmp/sockets/unicorn.sock;
}

server {
  listen 80;
  server_name <Elastic IP>;

  root /var/www/app/current/public;

  location ^~ /assets/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
    root  /var/www/<アプリ>/current/public;
  }
  try_files $uri/index.html $uri @unicorn;

  location @unicorn {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

  error_page 500 502 503 504
}

#サーバ上でのアプリケーションコードが設置されているディレクトリを変数に入れておく
app_path = File.expand_path('../../', __FILE__)

#アプリケーションサーバの性能を決定する
worker_processes 1

#アプリケーションの設置されているディレクトリを指定
working_directory app_path

#Unicornの起動に必要なファイルの設置場所を指定
pid "#{app_path}/tmp/pids/unicorn.pid"

#ポート番号を指定
listen 3000

#エラーのログを記録するファイルを指定
stderr_path "#{app_path}/log/unicorn.stderr.log"

#通常のログを記録するファイルを指定
stdout_path "#{app_path}/log/unicorn.stdout.log"

#Railsアプリケーションの応答を待つ上限時間を設定
timeout 60

#以下は応用的な設定なので説明は割愛

preload_app true
GC.respond_to?(:copy_on_write_friendly=) && GC.copy_on_write_friendly = true

check_client_connection false

run_once = true

before_fork do |server, worker|
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.connection.disconnect!

  if run_once
    run_once = false # prevent from firing again
  end

  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exist?(old_pid) && server.pid != old_pid
    begin
      sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
      Process.kill(sig, File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH => e
      logger.error e
    end
  end
end

after_fork do |_server, _worker|
  defined?(ActiveRecord::Base) && ActiveRecord::Base.establish_connection
end