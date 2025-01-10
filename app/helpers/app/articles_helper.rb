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
      when 'button'
        "<a href='#{block['data']['link']}' class='flex min-w-[84px] max-w-[480px] cursor-pointer items-center \
                                       justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-700 \
                                       text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]'>#{block['data']['text']}</a>"
      else
        ''
      end
    end

    content_html.join("\r\n").html_safe
  end
end
