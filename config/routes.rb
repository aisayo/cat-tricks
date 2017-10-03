Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  get '/cats/most_talented', to: 'cats#index'

  resources :cats do
    resources :tricks, only: [:index, :show, :new, :edit]
  end

  resources :tricks

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
