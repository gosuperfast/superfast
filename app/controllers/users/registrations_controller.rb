# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]

  def create
    # Build the organization first
    organization = Organization.new(organization_params)

    if organization.save
      # Build the user and associate with the organization through membership
      build_resource(sign_up_params)
      membership = Membership.new(user: resource, organization: organization)

      if resource.save && membership.save
        # Handle successful user creation and login
        yield resource if block_given?
        if resource.persisted?
          if resource.active_for_authentication?
            set_flash_message! :notice, :signed_up
            sign_up(resource_name, resource)
            respond_with resource, location: after_sign_up_path_for(resource)
          else
            set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
            expire_data_after_sign_in!
            respond_with resource, location: after_inactive_sign_up_path_for(resource)
          end
        else
          clean_up_passwords resource
          set_minimum_password_length
          respond_with resource
        end
      else
        # Handle membership creation failure
        flash[:alert] = membership.errors.full_messages.join(', ')
        organization.destroy # Rollback organization creation
        redirect_to new_user_registration_path
      end
    else
      # Handle organization creation failure
      flash[:alert] = organization.errors.full_messages.join(', ')
      redirect_to new_user_registration_path
    end
  end

  private

  def organization_params
    params.require(:user).require(:organization).permit(:publication_name)
  end

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :full_name)
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [ :full_name ])
  end
end
