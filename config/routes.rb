Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  get '/cats/most_talented', to: 'cats#most_talented'

  resources :cats do
    resources :comments
  end

  resources :cat_tricks

  resources :tricks

  resources :users, only: [:show]

  get '/cat_indexes', to: 'cats#indexes'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
