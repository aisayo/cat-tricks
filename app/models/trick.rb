class Trick < ApplicationRecord
  has_many :cat_tricks
  has_many :cats, through: :cat_tricks

  validates :name, presence: true #prevents blank submission from create new trick
end
