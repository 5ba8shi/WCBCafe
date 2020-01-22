class SignupsController < ApplicationController
  before_action :authenticat_user!, only: :done

  def indx
    delete_session
    redirect_to root_path if user_signed_in?
  end

  def step1
    
    @user = if session[:password_confirmation]
        User.new(
          User.new(
            nick
          )
        )
    end
end