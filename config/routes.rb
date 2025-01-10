Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Public facing site
  # Defines the root path route ("/")
  root 'home#index'

  # Other pages
  get 'product', to: 'home#product'

  # Private app
  constraints subdomain: /.+/ do
    devise_scope :user do
      authenticated do
        root to: 'app/dashboard#index', as: 'authenticated_root'
        namespace :app do
          get 'dashboard', to: 'dashboard#index'
          resources :articles, only: %i[new create index]
        end
      end
      unauthenticated do
        root to: 'users/sessions#new', as: 'unauthenticated_root'
      end
    end
  end

  #  redirect all unknown routes to root_url
  get '*path' => redirect('/')
end
