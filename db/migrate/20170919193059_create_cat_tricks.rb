class CreateCatTricks < ActiveRecord::Migration[5.1]
  def change
    create_table :cat_tricks do |t|
      t.integer :cat_id
      t.integer :trick_id

      t.timestamps
    end
  end
end
