Rails.application.routes.draw do
  get 'contacts/new'

  root 'static_pages#index'
  match "/sendme" => "static_pages#sendme", via: [:get, :post]
  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
