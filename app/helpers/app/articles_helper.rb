module App::ArticlesHelper
  def display_content(content)
    parsed_content = JSON.parse(content)

    content_html = parsed_content['blocks'].map do |block|
      # debugger
      case block['type']
      when 'paragraph'
        "<p>#{block['data']['text']}</p>"
      when 'header'
        "<h#{block['data']['level']}>#{block['data']['text']}</h#{block['data']['level']}>"
      when 'list'
        list_items = block['data']['items'].map { |item| "<li>#{item}</li>" }.join
        "<ul>#{list_items}</ul>"
      when 'code'
        CGI.escapeHTML(block['data']['code'])
        "<pre><code>#{block['data']['code']}</code></pre>"
      else
        ''
      end
    end

    content_html.join("\r\n").html_safe
  end
end
