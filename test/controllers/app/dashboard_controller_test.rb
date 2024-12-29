require "test_helper"

class App::DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get app_dashboard_index_url
    assert_response :success
  end
end
