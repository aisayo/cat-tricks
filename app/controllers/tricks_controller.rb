class TricksController < ApplicationController

  def new
    @trick = Trick.new
  end

end
