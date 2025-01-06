module App
  class ArticlesController < ApplicationController
    before_action :authenticate_user!, only: %i[new create]
    # before_action :set_article, only: %i[show edit destroy]

    def new
      @article = Article.new
    end

    def create
      @article = Article.new(article_params)
      @article.user = current_user
      if @article.save
        redirect_to @article, notice: 'Article was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    private

    def article_params
      params.fetch(:article, {}).permit(:title, :body, :description)
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end
  end
end
