class CatTricksController < ApplicationController
  before_action :current_cat_trick, only: [:edit, :update]

  def edit
  end

  def update
    @cat = Cat.find_by_id(@cat_trick.cat_id)
    @cat_trick.update (cat_trick_params)
    redirect_to cat_path(@cat)
  end

  private
    def cat_trick_params
      params.require(:cat_trick).permit(:rating)
    end

    def current_cat_trick
      @cat_trick = CatTrick.find_by_id(params[:id])
    end

end
