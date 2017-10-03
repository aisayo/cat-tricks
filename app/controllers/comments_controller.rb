class CommentsController < ApplicationController
  before_action :current_cat, only: [:new, :edit, :show, :update]

  def new
    @comment = Comment.new(cat_id: params[:cat_id])
    #@comment = @cat.comments.build
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to cat_path(@comment.cat)
    else
      render :new
    end
  end


  private
    def comment_params
      params.require(:comment).permit(:body, :cat_id)
    end

    def current_cat
      @cat = Cat.find_by_id(params[:id])
    end

end
