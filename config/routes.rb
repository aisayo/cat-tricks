Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  get '/cats/most_talented', to: 'cats#index'

  resources :cats do
<<<<<<< HEAD
    resources :comments
  end

  #resources :tricks
  #resources :cat_tricks
=======
    resources :tricks, only: [:index, :show, :new, :edit]
  end

  resources :tricks
>>>>>>> 004a8e20b75f5c362ab30972fb2a4e800d0d6098

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
