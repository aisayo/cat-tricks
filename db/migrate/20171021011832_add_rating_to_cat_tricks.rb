class AddRatingToCatTricks < ActiveRecord::Migration[5.1]
  def change
    add_column :cat_tricks, :rating, :integer, :default => 1
  end
end
