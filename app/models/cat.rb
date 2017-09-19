class Cat < ApplicationRecord
  belongs_to :user
  has_many :cat_tricks
  has_many :tricks, through: :cat_tricks
end
