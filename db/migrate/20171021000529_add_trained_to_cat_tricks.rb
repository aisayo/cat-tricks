class AddTrainedToCatTricks < ActiveRecord::Migration[5.1]
  def change
    add_column :cat_tricks, :trained, :boolean, :default => false
  end
end
