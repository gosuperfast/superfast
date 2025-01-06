class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Redirect to subdomain dashboard after sign-in
  def redirect_to_subdomain_dashboard(subdomain)
    # Replace `subdomain` with the attribute that stores the user's subdomain
    app_dashboard_url(subdomain:)
  end
end
