Rails.application.routes.draw do

  root 'static_pages#index'
  match '/message_sent' , to: "static_pages#thankyou", via: :get
  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
