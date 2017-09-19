class Trick < ApplicationRecord
  has_many :cat_tricks
  has_many :cats, through: :cat_tricks
end
