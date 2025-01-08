# config/initializers/session_store.rb
Rails.application.config.session_store :cookie_store,
                                       key: '_superfast_session',
                                       domain: :all
