class CommentsController < ApplicationController

  def index
    @cat = Cat.find_by(id: params[:cat_id])
  end

  def new
    @comment = Comment.new(cat_id: params[:cat_id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to cat_path(@comment.cat)
    else
      flash[:notice] = "Please enter a comment"
      render :new
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :cat_id)
    end

end
