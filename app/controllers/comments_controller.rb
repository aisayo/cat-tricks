class CommentsController < ApplicationController
  before_action :set_cat

  def index
    @cat = Cat.find_by(id: params[:cat_id])
  end

  def new
    @comment = Comment.new(cat_id: params[:cat_id])
  end

  def create
    @comment = @cat.comment.build(comment_params)
    if @comment.save
      render json: @comment
    else
      render cat_path
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :cat_id)
    end

    def set_cat
      @cat = Cat.find(params[:cat_id])
    end

end
