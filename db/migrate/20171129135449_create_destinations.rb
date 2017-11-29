class CreateDestinations < ActiveRecord::Migration[5.1]
  def change
    create_table :destinations do |t|
      t.string :City
      t.string :Country

      t.timestamps
    end
  end
end
