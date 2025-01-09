module App::ArticlesHelper
  def display_content(content)
    parsed_content = JSON.parse(content)

    content_html = parsed_content['blocks'].map do |block|
      case block['type']
      when 'paragraph'
        "<p>#{block['data']['text']}</p>"
      else
        ''
      end
    end

    content_html.join.html_safe
  end
end
