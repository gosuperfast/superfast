# config/initializers/session_store.rb
Rails.application.config.session_store :cookie_store,
                                       key: '_superfast_session',
                                       domain: :all,
                                       same_site: :lax # this shares session cookie between domain and subdomain
