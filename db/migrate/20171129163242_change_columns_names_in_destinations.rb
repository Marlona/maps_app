class ChangeColumnsNamesInDestinations < ActiveRecord::Migration[5.1]
  def change
  	rename_column :destinations, :City, :city
  	rename_column :destinations, :Country, :country
  end
end
