class CreateUserStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_stocks do |t|
      t.references :user
      t.references :stocks

      t.timestamps
    end
  end
end
