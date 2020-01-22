class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    callback_for(:facebook)
  end

  def google_oauthn
    callback_for(:google)
  end

  def callback_for(provider)
    info = User.find_oauth(request.env["omniauth.auth"])
    @user = User.where(nickname: info[:user][:nickname]).or(User.where(email: info[:user][:email])).first || info[:user]

    if @user.persisted?

      sign_in_and_redirect @user, event: :authentication
      set_flash_message(:notice, :success, kind: "#{provider}".capitalize) if is_navigational_format?
    else

      session[:nickname] = info[:user][:nickname]
      session[:email] = info[:user][:email]

      session[:password_confirmation] = SecureRandom.alphanumeric(30)


      if SnsCredential.find_by(uid: info[:sns][:uid], provider: info[:sns][:provider]).nil?

        session[:uid] = info[:sns][:uid]
        session[:provider] = info[:sns][:provider]
      end

      redirect_to step1_signups_path
    end
  end

  def fialure
    redirect_to root_path
  end
end



end