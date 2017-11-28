class TricksController < ApplicationController
  before_action :current_cat

  def new
    @trick = Trick.new(cat_ids: params[:cat_id])
  end

  def index
    @tricks = @cat.tricks
  end

  def create
    @cat = Cat.find_by(id: params[:trick][:cat_ids])
    @trick = Trick.new(trick_params)
    if @trick.save
      redirect_to cat_trick_path(@cat, @trick)
    else
      render :new
    end
  end

  def show
    #raise params.inspect
    @trick = Trick.find_by_id(params[:id])
  end

  private

    def trick_params
      params.require(:trick).permit(:name, :cat_ids)
    end

    def current_cat
      @cat = Cat.find_by_id(params[:cat_id])
    end



end
