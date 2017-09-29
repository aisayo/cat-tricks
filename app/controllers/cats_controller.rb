class CatsController < ApplicationController
  before_action :current_cat, only: [:edit, :show]

  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.new(cat_params)
    @cat.user_id = current_user.id if current_user
    #raise params.inspect
    if @cat.save
      redirect_to cat_path(@cat)
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  private
    def cat_params
      params.require(:cat).permit(:name, :color, trick_ids:[], tricks_attributes: [:name])
    end

    def current_cat
      @cat = Cat.find_by_id(params[:id])
    end

end
