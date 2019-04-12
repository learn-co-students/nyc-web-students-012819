Rails.application.routes.draw do

namespace :api do
  namespace :v1 do
    resources :users, only: [:create]
    get "/get_user", to: "users#get_user"
  end

end

end