class CreateTricks < ActiveRecord::Migration[5.1]
  def change
    create_table :tricks do |t|
      t.string :name
      
      t.timestamps
    end
  end
end
