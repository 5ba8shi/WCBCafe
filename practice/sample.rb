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