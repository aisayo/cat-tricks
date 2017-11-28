class AddColumnToTricks < ActiveRecord::Migration[5.1]
  def change
    add_column :tricks, :description, :text
  end
end
