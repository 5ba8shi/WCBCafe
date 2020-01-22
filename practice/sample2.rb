clasa User < ApplicationRecord
 devise :ominiauthable, omniauth_providers: %i[facebook google_oauth2]
 has_many :sns_credentials, dependent: :destroy

 def self.find_oauth(auth)
  uid = auth.uid
  provider = auth.provider
  snscredential = SnsCredential.where(uid: uid, provider: provider).first

  if snscredential.present?
    user = User.where(email: auth.info.email).first

    unless user.present?
      user = User.new(
        nickname: auth.info.name,
        email: auth.info.email
      )
    end
    sns = snscredential

    #活用例 info = User.find_oauth(auth)
          #session
end