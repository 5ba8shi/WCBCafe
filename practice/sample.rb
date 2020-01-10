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