class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Redirect to subdomain dashboard after sign-in
  def after_sign_in_path_for(resource)
    # Replace `subdomain` with the attribute that stores the user's subdomain
    dashboard_url(subdomain: resource.subdomain)
  end
end
