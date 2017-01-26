Rails.application.routes.draw do
  root 'static_pages#index'
  match '/sendme', to: 'static_pages#sendme', via: 'get'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
