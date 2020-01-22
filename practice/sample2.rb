class SignupsController < ApplicationController
  before_action :authenticat_user!, only: :done

  def indx
    delete_session
    redirect_to root_path if user_signed_in?
  end

  def step1
    
    @user = if session[:password_confirmation]
        User.new(
            nickname: session[:nickname],
            email: session[:email],
            password_confirmation: session[:password_confirmation]
        )
    else
      User.new
    end
end


def step1_validates

  @user = 
      if session[:password_confirmation].present?
        set_user_when_sns(user_params)
      else
        set_user_when_email(user_params)
      end
  @user.valid?
  skip_phonenumber_validate(@user.errors)

  if verify_recaptcha(model: @user)
