class CatsController < ApplicationController
  before_action :current_cat, only: [:edit, :show, :update, :destroy]

  def index
    @cats = Cat.most_talented
  end

  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.new(cat_params)
    @cat.user_id = current_user.id if current_user
    if @cat.save
      redirect_to cat_path(@cat)
    else
      flash[:notice] = "Please name your cat"
      render :new
    end
  end

  def update
    if @cat.update (cat_params)
      #raise params.inspect
      redirect_to cat_path(@cat)
    else
      render :edit
    end
  end

  def show
  end

  def edit
  end

  def destroy
    @cat.delete
    redirect_to root_path, notice: "#{@cat.name} was deleted"
  end

  private
    def cat_params
      params.require(:cat).permit(:name, :color, trick_ids:[], tricks_attributes: [:name])
    end

    def current_cat
      @cat = Cat.find_by_id(params[:id])
    end

end
