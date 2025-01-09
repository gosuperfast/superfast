# Pin npm packages by running ./bin/importmap

pin 'application'
pin '@hotwired/turbo-rails', to: 'turbo.min.js'
pin '@hotwired/stimulus', to: 'stimulus.min.js'
pin '@hotwired/strada'
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js'
pin_all_from 'app/javascript/controllers', under: 'controllers'

pin 'tailwindcss-stimulus-components' # @6.1.2
pin 'trix'
pin '@rails/actiontext', to: 'actiontext.esm.js'

pin '@fortawesome/fontawesome-free', to: 'https://ga.jspm.io/npm:@fortawesome/fontawesome-free@6.1.2/js/all.js'
pin "@editorjs/editorjs", to: "@editorjs--editorjs.js" # @2.30.7
pin "@editorjs/header", to: "@editorjs--header.js" # @2.8.8
pin "@editorjs/list", to: "@editorjs--list.js" # @2.0.2
pin "@editorjs/paragraph", to: "@editorjs--paragraph.js" # @2.11.7
